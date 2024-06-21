import { CrudDocument } from "wacom";

export interface User extends CrudDocument {
	is: Record<string, boolean>;
	name: string;
	email: string;
	thumb: string;
}
