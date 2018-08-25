const { DeckboardExtension, extensionLog, INPUT_METHOD } = require("..")

const selections = {
  label: 'Do Something', // Action lookup label
  value: 'study', // Action lookup value
  icon: 'book', // FontAwesome icon
  color: '#8E44AD', // Button's default color
  inputs: [
    {
      type: INPUT_METHOD.INPUT_SELECT, // Create a drop down selection field input
      label: 'Subject', // Label for drop down field
      ref: 'subject', // Field's reference name that can be used in execute function
      items: [ // Array of drop down items
        { 
          value: 'math',
          label: 'Mathematics'
        },
        {
          value: 'biology',
          label: 'Biology'
        }
      ]
    }, {
      type: INPUT_METHOD.INPUT_TEXT, // Create a text field input
      label: 'Additional Note',
      ref: 'note'
    }
  ]
} 

const execute = (action, args) => {
  switch (action) {
    case "study":
      doStudy(args.subject, args.note);
      break;
    default:
      doNothing();
      break;
  }
};

function doStudy(activity, options) {
  extensionLog('info', `I did  ${activity}. ${options ? 'Notes: ' + options : ''}`)
}

function doNothing() {
  extensionlog('info', 'I did nothing...')
}

const myExtension = new DeckboardExtension("Example Extension", selections, execute);
module.exports = myExtension
