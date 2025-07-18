// const task= [
//     { id: Date.now().toString(), name: 'tarefas de casa', tasks: ['lavar a roupa' , 'lavar a louça', 'varrer a casa']
//     }
// ]

const { forEach, forIn } = require("lodash")
const { tasks } = require("../controllers/showControler")

let task = [
    {
        id: Date.now().toString(), name: 'tarefas de casa', tasks: [{ content: 'lavar a roupa', status: true }, { content: 'lavar o carro', status: false }], progress: false
    }
]


const taskModel = {

    showAllLists() {
        return task
    },
    showList(id) {
        return task.find(list => list.id === id)
    },
    createList(name) {
        const list = {
            id: Date.now().toString(),
            name: name,
            tasks: [],
            progress: false
        }
        task.push(list)
    },
    toAddTask(userContent, taskId) {
        const index = task.findIndex(task => task.id === taskId)
        task[index].tasks.push({ content: userContent, status: false })
        verifyProgress(index)

    },
    markTask(selectedBox, taskId) {
        const index = task.findIndex(task => task.id === taskId)
        if (!task[index].tasks[selectedBox].status) {
            task[index].tasks[selectedBox].status = true
        } else if(task[index].tasks[selectedBox].status) {
            task[index].tasks[selectedBox].status = false
        }
        verifyProgress(index)
    },
    deleteTask(taskRemove, taskId) {
        const taskIndex = Number(taskRemove)
        const index = task.findIndex(task => task.id === taskId)
        task[index].tasks = task[index].tasks.filter( (item, i ) => i !== taskIndex)
        verifyProgress(index)
        
    },
    listRemove(id){
       task = task.filter((list) => list.id !== id)
    },
    
}

 function verifyProgress (index) {
        let progress = true

        task[index].tasks.forEach(element => {
            if(!element.status){
                progress = false
            }
        });

        if(!progress){
            task[index].progress = false
        }else{
            task[index].progress = true
        }

}

module.exports = taskModel