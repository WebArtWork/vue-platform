import { Component } from "@angular/core";
import { FormService } from "src/app/core/modules/form/form.service";
import {
	ComponentService,
	Component,
} from "src/app/core/services/component.service";
import { AlertService, CoreService } from "wacom";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";

@Component({
	templateUrl: "./components.component.html",
	styleUrls: ["./components.component.scss"],
})
export class ComponentsComponent {
	columns = ["name", "description"];

	form: FormInterface = this._form.getForm("components", {
		formId: "components",
		title: "Components",
		components: [
			{
				name: "Text",
				key: "name",
				focused: true,
				fields: [
					{
						name: "Placeholder",
						value: "fill components title",
					},
					{
						name: "Label",
						value: "Title",
					},
				],
			},
			{
				name: "Text",
				key: "description",
				fields: [
					{
						name: "Placeholder",
						value: "fill components description",
					},
					{
						name: "Label",
						value: "Description",
					},
				],
			},
		],
	});

	config = {
		create: () => {
			this._form.modal<Component>(this.form, {
				label: "Create",
				click: (created: unknown, close: () => void) => {
					this._sc.create(created as Component);
					close();
				},
			});
		},
		update: (doc: Component) => {
			this._form
				.modal<Component>(this.form, [], doc)
				.then((updated: Component) => {
					this._core.copy(updated, doc);
					this._sc.update(doc);
				});
		},
		delete: (doc: Component) => {
			this._alert.question({
				text: this._translate.translate(
					"Common.Are you sure you want to delete this cservice?"
				),
				buttons: [
					{
						text: this._translate.translate("Common.No"),
					},
					{
						text: this._translate.translate("Common.Yes"),
						callback: () => {
							this._sc.delete(doc);
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: "cloud_download",
				click: (doc: Component) => {
					this._form.modalUnique<Component>("components", "url", doc);
				},
			},
		],
	};

	get rows(): Component[] {
		return this._sc.components;
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _sc: ComponentService,
		private _form: FormService,
		private _core: CoreService
	) { }
}
