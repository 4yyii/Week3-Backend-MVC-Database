let command = process.argv[2];
let table = process.argv[3];
let args = process.argv.slice(4);

const ContactController = require('./controller/contactController');
const GroupsController = require('./controller/groupController');
const ContactGroupController = require('./controller/contactGroupController');
const view = require('./view');

switch (command) {
    case 'create':
        if (table === 'Contact') ContactController.create(args);
        else if (table === 'Groups') GroupsController.create(args);
        else if (table === 'ContactGroups') ContactGroupController.create(args);
        break;

    case 'update':
        if (table === 'Contact') ContactController.update(args);
        else if (table === 'Groups') GroupsController.update(args);
        else if (table === 'ContactGroups') ContactGroupController.update(args);
        break;
    
    case 'delete':
        if (table === 'Contact') ContactController.delete(args);
        else if (table === 'Groups') GroupsController.delete(args);
        else if (table === 'ContactGroups') ContactGroupController.delete(args);
        break;

    case 'showContact':
        ContactController.show();
        break;

    case 'showGroups':
        GroupsController.show();
        break;

    case 'help':
    default:
        view.help();
}