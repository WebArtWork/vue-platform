const Cpages = require("./schema");
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
		const componnets = waw.getDirectories(path.join(templatePath, 'components'));
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
		const sections = waw.getDirectories(path.join(templatePath, 'sections'));
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
		const template = getTemplate(
			path.join(
				process.cwd(),
				'template'
			)
		);
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
	const serve = async (page) => {
		const pages = await Cpages.find(
			page
				? {
						_id: page._id,
				  }
				: {}
		);

		for (const page of pages) {
			const template = path.join(
				process.cwd(),
				page.template
					? path.join("templates", page.template)
					: "template"
			);
			// waw.build(template, `_${page.page}`); // here we need to use content from page, not to look for the page it self
			// waw.url(
			// 	path.join(template, "dist", `_${page.page}.html`),
			// 	page.url,
			// 	page,
			// 	page.domain || undefined
			// );
		}
	};
	serve();
	waw.on("cpage_create", serve);
	waw.on("cpage_update", serve);
};
