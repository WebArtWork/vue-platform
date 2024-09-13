export interface TemplateFieldInterface {
	name: string;
	value: unknown;
	skipTranslation?: boolean;
}

export interface TemplateComponentInterface {
	name: string;
	component: unknown;
	fields?: string[];
	fieldComponent?: Record<string, string>;
}

export interface FormComponentInterface {
	components?: FormComponentInterface[];
	// or
	name?: string; // template name
	key?: string; // submition location
	root?: boolean; // if key should be applied to data or root document
	focus?: () => void; // ???
	focused?: boolean;
	hidden?: boolean;
	class?: string;
	fields?: TemplateFieldInterface[];
	valid?: () => boolean;
	required?: boolean;
	disabled?: boolean;
	// disabled?: boolean | (value: unknown) => boolean;

	component?: unknown; // deprecated
}
