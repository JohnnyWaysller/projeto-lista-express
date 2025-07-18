const taskModel = require('../models/taskModel')

const showController = {
    //get home
    home: (req, res) => {
        res.render('home')
    },
    //get task
    tasks: (req, res) => {
        const task = taskModel.showAllLists()
        res.render('tasks', { task })
    },
    //get task especific
    showTaskId: (req, res) => {
        const id = req.params.id
        const idTask = taskModel.showList(id)
        res.render('taskid', { idTask })
    },
    showCreateList: (req, res) => {
        res.render('newList')
    }

}

module.exports = showController