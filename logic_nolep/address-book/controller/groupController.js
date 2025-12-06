const Groups = require('../model/group');

module.exports = {
    create(args) {
        let [groupName] = args;
        Groups.create(groupName)
            .then(result => console.log('Created:', result))
            .catch(err => console.log(err.message));
    },

    update(args) {
        let [id, groupName] = args;
        Groups.update(id, groupName)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.message))
    },

    delete(args) {
        let [id] = args;
        Groups.delete(id)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.message))
    },

    show() {
        Groups.showGroups()
            .then(rows => console.log(rows))
            .catch(err => console.log(err.message))
    }
}