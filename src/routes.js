const express = require('express')
const showCotroller = require('./controllers/showControler')
const postController = require('./controllers/postControler')

const router = express.Router()

//home get
router.get('/', showCotroller.home)

//tasks get
router.get('/tasks', showCotroller.tasks)

//list get
router.get('/list/:id', showCotroller.showTaskId)
//get createList
router.get('/newList', showCotroller.showCreateList)
//post createList
router.post('/createList',postController.createNewList)
//list id post
router.post('/list', postController.postNewTask)
//post mark/unmark task
router.post('/checkBoxTask', postController.checkedTask)
//post delete
router.post('/deleteTask', postController.deleteTasks)
//post deleteList
 router.post('/deleteList', postController.deleteList)



module.exports = router