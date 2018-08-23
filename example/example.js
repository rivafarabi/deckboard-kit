var { DeckboardExtention, extensionLog, INPUT_METHOD } = require("..")

const selections = {
  label: 'Do Something',
  value: 'study',
  icon: 'book',
  inputs: [
    {
      type: INPUT_METHOD.INPUT_SELECT,
      label: 'Subject',
      assignTo: 'primary',
      items: [{
        value: 'math',
        label: 'Mathematics'
      },
      {
        value: 'biology',
        label: 'Biology'
      }]
    }, {
      type: INPUT_METHOD.INPUT_TEXT,
      label: 'Additional Note',
      assignTo: 'secondary'
    }
  ]
} 

const execute = (category, primary, secondary) => {
  if (!primary) {
    extensionLog("error", "No primary value");
    return;
  } else {
    switch (category) {
      case "study":
        doStudy(primary, secondary);
        break;
      default:
        doNothing();
        break;
    }
  }
};

function doStudy(activity, options) {
  extensionLog('info', `I did  ${activity}. ${options ? 'Notes: ' + options : ''}`)
}

function doNothing() {
  extensionlog('info', 'I did nothing...')
}

var deckboardExtention = new DeckboardExtention("Example Extension", selections, execute);
module.exports = deckboardExtention