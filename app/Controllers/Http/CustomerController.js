'use strict'
const Customer=use('App/Models/Customer')

class CustomerController {
 
  async index ({ request, response }) {
    const customers=await Customer.all()
    response.status(200).json({
      greeting:'Here are your customers.',
      data:customers
    })
  }

  async store ({ request, response ,params:{id}}) {
    const { name, description } =request.post()
    
    debugger
    const customer=new Customer();
    customer.name=name
    customer.description=description
    await customer.save()
    /*const customer=await Customer.create({name,description}) */
    response.status(201).json({
      message:'Successfully created a new customer',
      data:customer
    })
  }

  async show ({ params:{id}, response}) {
    const customer= await Customer.find(id);
    if(customer){
      response.status(200).json({
        message:'Here are your customer',
        data:customer
      })
    }else{
      response.status(404).json({
        greeting:'Customer Not Found',
        id
      })
    }
  }


  async update ({ params:{id}, request, response }) {
    const customer=await Customer.find(id)
    if(customer){
      const {name , description}= request.post()

      customer.name=name
      customer.description=description

      await customer.save()
      response.status(200).json({
        message:'Successfully updated a new customer',
        data:customer
      })
    }else{
      response.status(404).json({
        message:'Customer not found',
        id
      })
    }
    
  }

  async destroy ({ params:{id}, request, response }) {
    const customer=await Customer.find(id)
    if(customer){
      await customer.delete()
      response.status(200).json({
        message:'Successfully updated a new customer',
       id
      })
    }else{
      response.status(404).json({
        message:'Customer not found',
        id
      })
    }
  }
}

module.exports = CustomerController
