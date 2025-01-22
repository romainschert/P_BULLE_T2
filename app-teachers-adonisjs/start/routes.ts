/*
|--------------------------------------------------------------------------
| Le fichier des routes
|--------------------------------------------------------------------------
|
| Le fichier des routes a pour but de définir toutes les routes HTTP.
|
*/
import TeachersController from '#controllers/teachers_controller'
import router from '@adonisjs/core/services/router'
router.get('/', [TeachersController, 'index']).as('home')
router.get('/teacher/:id/show', [TeachersController, 'show']).as('teacher.show')
router.get('/teacher/:id/destroy', [TeachersController, 'destroy']).as('teacher.destroy')
router.get('/teacher/add', [TeachersController, 'create']).as('teacher.create')
router.post('/teacher/add', [TeachersController, 'store']).as('teacher.store')
router.get('/teacher/:id/edit', [TeachersController, 'edit']).as('teacher.edit')
router.post('/teacher/:id/update', [TeachersController, 'update']).as('teacher.update')
