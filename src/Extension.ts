import { Platforms } from './enum';
import { log } from './utils';
import { ButtonInput } from './types/button-input';
import { ConfigInput } from './types/config-input';

/**
 * Base class for Deckboard extensions
 *
 * All Deckboard extensions should extend this class and implement the execute method
 * to handle button actions triggered by users.
 *
 * @example
 * ```typescript
 * class MyExtension extends Extension {
 *   constructor() {
 *     super();
 *     this.name = 'My Extension';
 *     this.inputs = [...];
 *   }
 *
 *   execute(action: string, params: any): void {
 *     // Handle actions
 *   }
 * }
 * ```
 */
export class Extension {
	/**
	 * The display name of the extension shown in the Deckboard UI
	 * @protected
	 */
	private name: string = '';

	/**
	 * Array of button input configurations that define the actions
	 * available in this extension
	 * @protected
	 */
	private inputs: ButtonInput[] = [];

	/**
	 * Configuration options for the extension that can be set by users
	 * in the Deckboard settings
	 * @protected
	 */
	private configs: { [key: string]: ConfigInput } = {};

	/**
	 * Array of platforms that this extension supports
	 * Defaults to Windows only
	 * @protected
	 */
	private platforms: Array<Platforms> = [Platforms.windows];

	/**
	 * Gets the list of available actions for this extension
	 * Returns an array with a header object followed by all button inputs
	 *
	 * @returns Array containing the extension header and all button input configurations
	 */
	public get selections(): Array<{ header: string } | ButtonInput> {
		return [
			{
				header: this.name
			},
			...this.inputs
		];
	}

	/**
	 * Executes an action when a button is pressed in Deckboard
	 *
	 * This method should be overridden in your extension class to handle
	 * specific actions defined in your inputs array.
	 *
	 * @param action - The action identifier from the ButtonInput value property
	 * @param params - Parameters passed from the button configuration
	 *
	 * @example
	 * ```typescript
	 * execute(action: string, params: any): void {
	 *   switch (action) {
	 *     case 'my-action':
	 *       // Handle the action
	 *       break;
	 *   }
	 * }
	 * ```
	 */
	public execute(action: string, params: any): void {
		log.info({ action, params });
		return;
	}
}
