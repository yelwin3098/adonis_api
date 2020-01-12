'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/customers','CustomerController.index')
Route.post('/customers','CustomerController.store')
Route.get('/customers/:id','CustomerController.show')
Route.patch('/customers/:id','CustomerController.update')
Route.delete('/customers/:id','CustomerController.destroy')
