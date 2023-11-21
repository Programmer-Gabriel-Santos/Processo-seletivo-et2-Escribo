import { v4 } from "uuid";

export class IdGenerator {
	generate = () => {
		return v4();
	};
}