import { Any } from 'wacom';
export interface User {
	token?: string;
	name: string;
	email: string;
	thumb: string;
	is: Any;
	data: Any;
}
