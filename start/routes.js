'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.put('/api/contacts/:id', 'ContactController.update').middleware('auth')
Route.delete('/api/contacts/id', 'ContactController.destroy').middleware('auth')
Route.post('/api/contacts', 'ContactController.store').middleware('auth')
Route.get('/api/contacts', 'ContactController.index')

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')