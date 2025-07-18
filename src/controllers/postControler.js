const taskModel = require('../models/taskModel')


const postController = {

    createNewList: (req, res) => {
        const { list } = req.body
        taskModel.createList(list)
        res.redirect('/tasks')

    },
    postNewTask: (req, res) => {
        const { content, taskId } = req.body
        taskModel.toAddTask(content, taskId)
        const idTask = taskModel.showList(taskId)

        res.render('taskid', { idTask })
    },
    checkedTask: (req, res) => {
        const { boxIndex, taskId, fixedIndex } = req.body
        //verificar erro 
        if (typeof boxIndex === 'undefined') {
            // se undefined box nao envia indice
            //necessario, entao pedo clone do indice
            const selectedBox = Number(fixedIndex)
            taskModel.markTask(selectedBox, taskId)
            return res.redirect(`/list/${taskId}`)

        }
        const selectedBox = Number(boxIndex)
        taskModel.markTask(selectedBox, taskId)
        const idTask = taskModel.showList(taskId)
        res.render('taskid', { idTask })

    },
    deleteTasks: (req, res) => {
        const { fixedIndex, taskId } = req.body
        taskModel.deleteTask(fixedIndex, taskId)
        const idTask = taskModel.showList(taskId)
        res.render('taskid', { idTask })
    },
    deleteList: (req, res) => {
        const { listTodelete } = req.body
        taskModel.listRemove(listTodelete)
        res.redirect('tasks')
    }

}

module.exports = postController