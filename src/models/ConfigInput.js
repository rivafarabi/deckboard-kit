// @flow

function ConfigInput(props: {
    type: string,
    name: string,
    descriptions?: string,
    value: string | Array<string>
}) {
    this.type = props.type;
    this.name = props.name;
    this.descriptions = props.descriptions;
    this.value = props.value;
}

module.exports = ConfigInput;