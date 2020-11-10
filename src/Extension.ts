import { PLATFORMS } from './constants';
import { log } from './utils';
import { ButtonInput } from './types/button-input';
import { ConfigInput } from './types/config-input';

export class Extension {
	private name: string = '';
	private inputs: ButtonInput[] = [];
	private configs: { [key: string]: ConfigInput } = {};
	private platforms: Array<PLATFORMS> = [PLATFORMS.WINDOWS];

	public get selections(): Array<{ header: string } | ButtonInput> {
		return [
			{
				header: this.name
			},
			...this.inputs
		];
	}

	public execute(action: string, params: any): void {
		log.info({ action, params });
		return;
	}
}