const Constructor = require("./schema");
const path = require("path");
const fs = require("fs");
const templatesPath = path.join(process.cwd(), "templates");
module.exports = async (waw) => {
	const getTemplate = (templatePath) => {
		const jsonPath = path.join(templatePath, "template.json");
		if (!fs.existsSync(jsonPath)) {
			return false;
		}
		const template = waw.readJson(jsonPath);
		template.path = templatePath;
		template.name = path.basename(templatePath);
		template.componnets = [];
		const componnets = waw.getDirectories(
			path.join(templatePath, "components")
		);
		for (const component of componnets) {
			const componentJson = path.join(component, "component.json");
			if (fs.existsSync(componentJson)) {
				const json = waw.readJson(componentJson);
				json.path = component;
				json.name = path.basename(component);
				template.componnets.push(json);
			}
		}

		template.sections = [];
		const sections = waw.getDirectories(
			path.join(templatePath, "sections")
		);
		for (const section of sections) {
			const sectionJson = path.join(section, "section.json");
			if (fs.existsSync(sectionJson)) {
				const json = waw.readJson(sectionJson);
				json.path = section;
				json.name = path.basename(section);
				template.sections.push(json);
			}
		}

		return template;
	};

	waw.app.get("/api/constructor", (req, res) => {
		const templates = [];
		const template = getTemplate(path.join(process.cwd(), "template"));
		if (template) {
			templates.push(template);
		}
		if (fs.existsSync(templatesPath)) {
			const templatesList = waw.getDirectories(templatesPath);
			for (const templatePath of templatesList) {
				const template = getTemplate(templatePath);
				if (template) {
					templates.push(template);
				}
			}
		}
		res.json(templates);
	});

	// Pages

	const build = (root, constructor) => {
		if (!fs.existsSync(path.join(root, "index.html"))) {
			return console.log("Missing index.html in template root folder");
		}

		fs.mkdirSync(path.join(root, "dist", "constructor"), {
			recursive: true,
		});

		let code = fs.readFileSync(path.join(root, "index.html"), "utf8");

		const json = waw.readJson(path.join(root, 'template.json'))

		const html = constructor.sections.map(s => {
			return `{{{'/${json.prefix}/sections/${s.folder}'|c({translate: translate})|safe}}}`;
		}).join('\n\t');

		code = code.replace(
			"<!-- HTML -->",
			html
		);
		code = code.replace("<!-- CSS -->", "");
		code = code.replace("<!-- JS -->", "");

		fs.writeFileSync(
			path.join(root, "dist", "constructor", constructor.id + ".html"),
			code,
			"utf8"
		);
	};
	const serve = async (page) => {
		const constructors = await Constructor.find(
			page
				? {
						_id: page._id,
				  }
				: {}
		);

		for (const constructor of constructors) {
			if (!constructor.url || !constructor.domain) continue;

			const templatePath = path.join(
				process.cwd(),
				constructor.template === "template"
					? "template"
					: path.join("templates", constructor.template)
			);
			build(templatePath, constructor);

			waw.url(
				path.join(templatePath, "dist", "constructor", constructor.id + '.html'),
				constructor.url,
				constructor,
				constructor.domain || undefined
			);
		}
	};
	serve();
	waw.on("cpage_create", serve);
	waw.on("cpage_update", serve);
};
