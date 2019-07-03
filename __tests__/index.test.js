import Extension from '../Extension';
import { PLATFORMS, INPUT_METHOD } from '../constants';
jest.mock('../Extension');

class TestExtension extends Extension {
    constructor() {
        super();
        this.name = 'Test Name';
        this.inputs = [
            {
                label: 'Action 1',
                value: 'action1',
                icon: 'book',
                color: '#8E44AD',
                inputs: [
                    {
                        type: INPUT_METHOD.INPUT_SELECT,
                        label: 'Value 1',
                        ref: 'val1',
                        items: [
                            {
                                value: 'opt1',
                                label: 'Options 1'
                            },
                            {
                                value: 'opt2',
                                label: 'Options 2'
                            }
                        ]
                    }, {
                        type: INPUT_METHOD.INPUT_TEXT,
                        label: 'Value 2',
                        ref: 'val2'
                    }
                ]
            }
        ];
        this.platforms = [PLATFORMS.WINDOWS, PLATFORMS.MAC];
    }
}

beforeEach(() => {
    Extension.mockClear();
})

it('extension test', () => {
    const testExt = new TestExtension();
    expect([
        { header: testExt.name },
        ...testExt.inputs
    ]).toEqual([
        { header: 'Test Name' },
        {
            label: 'Action 1',
            value: 'action1',
            icon: 'book',
            color: '#8E44AD',
            inputs: [
                {
                    type: 'input:select',
                    label: 'Value 1',
                    ref: 'val1',
                    items: [
                        {
                            value: 'opt1',
                            label: 'Options 1'
                        },
                        {
                            value: 'opt2',
                            label: 'Options 2'
                        }
                    ]
                }, {
                    type: 'input:text',
                    label: 'Value 2',
                    ref: 'val2'
                }
            ]
        }
    ]);
    expect(testExt.platforms).toEqual(['WINDOWS', 'MAC']);
})