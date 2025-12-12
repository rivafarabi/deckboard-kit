import { InputTypes } from '../enum';

/**
 * Defines a configuration input for extension-wide settings
 *
 * Configuration inputs allow users to set global preferences for the extension
 * through the Deckboard settings interface. These values are accessible across
 * all actions in the extension.
 *
 * @example
 * ```typescript
 * const config: ConfigInput = {
 *   type: InputTypes.text,
 *   name: 'API Key',
 *   descriptions: 'Your API key for authentication',
 *   value: ''
 * };
 * ```
 */
export type ConfigInput = {
	/**
	 * The input method type - must be one of the InputTypes enum values
	 * @see InputTypes enum for all available options
	 */
	type: InputTypes;

	/**
	 * The display name for this configuration option in the settings UI
	 */
	name: string;

	/**
	 * Optional description text to help users understand this setting
	 * Displayed below the input field in the settings UI
	 */
	descriptions?: string;

	/**
	 * The current value of this configuration
	 * Can be a single string or array of strings depending on the input type
	 */
	value: string | Array<string>;
};
