/**
 * Defines a button input configuration for a Deckboard extension action
 *
 * This type represents a single action that users can assign to buttons in Deckboard.
 * Each ButtonInput appears as an option when configuring a button.
 *
 * @example
 * ```typescript
 * const buttonInput: ButtonInput = {
 *   label: 'Launch Application',
 *   value: 'launch-app',
 *   fontIcon: Icons.ionicons,
 *   input: 'rocket',
 *   color: '#3498DB'
 * };
 * ```
 */
export type ButtonInput = {
	/**
	 * The display name shown in the Deckboard UI for this action
	 */
	label: string;

	/**
	 * Unique identifier for this action, passed to the execute() method
	 * Use kebab-case for consistency (e.g., 'launch-app', 'send-command')
	 */
	value: string;

	/**
	 * The icon font family to use (e.g., Icons.ionicons, Icons.fontAwesomeSolid)
	 * @see Icons constant for available options
	 */
	fontIcon: string;

	/**
	 * The icon name from the specified font family
	 * For Ionicons: 'rocket', 'home', 'settings'
	 * For FontAwesome: use with prefix like 'fas fa-rocket'
	 */
	input: string;

	/**
	 * Optional hex color code for the button background
	 * @example '#3498DB', '#E74C3C', '#2ECC71'
	 */
	color?: string;
};
