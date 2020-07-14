// @flow

function ButtonInput(
    label: string,
    value: string,
    fontIcon: string,
    color?: string,
    input: string
) {
    this.label = label;
    this.value = value;
    this.fontIcon = fontIcon;
    this.color = color;
    this.input = input || [];
}

module.exports = ButtonInput;