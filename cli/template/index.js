const {
    Extension,
    log,
    INPUT_METHOD,
    PLATFORMS
} = require("deckboard-kit");

class MyExtension extends Extension {
    constructor() {
        super();
        this.name = "Sample Extension";
        this.platforms = [PLATFORMS.WINDOWS, PLATFORMS.MAC];
        this.inputs = [
            {
                label: 'Action',
                value: 'action',
                icon: 'book',
                color: '#8E44AD',
                input: [
                    {
                        label: 'Action Value',
                        ref: 'value',
                        type: INPUT_METHOD.INPUT_TEXT
                    }
                ]
            }
        ];
    }

    execute = (action, args) => {
        switch (action) {
            case "action":
                log('info', 'action')
                break;
            default:
                break;
        }
    };
}

module.exports = new MyExtension();