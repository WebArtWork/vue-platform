export interface User {
	name: string;
	email: string;
	thumb: string;
	is: {
		[key: string]: string;
	};
	data: {
		[key: string]: string;
	};
}
