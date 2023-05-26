const Cpages = require("./schema");
const path = require("path");
const fs = require("fs");
module.exports = async (waw) => {
	waw.app.get("/api/constructor", (req, res) => {
		const templates = [];
		const pathJson = path.join(process.cwd(), "template", "template.json");
		if (fs.existsSync(pathJson)) {
			templates.push(waw.readJson(pathJson));
		}
		res.json({ templates });
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
			waw.url(
				path.join(template, "dist", `_${page.page}.html`),
				page.url,
				page,
				page.domain || undefined
			);
		}
	};
	serve();
	waw.on("cpage_create", serve);
	waw.on("cpage_update", serve);
};
