const { header } = require('express-validator');

const userSchema  = require('./userSchemas')();

module.exports = [
    {
      method: 'post',
      path: '/create',
      handler: 'userController.createUser',
      validation: {
        body: userSchema.create
      }
    },
    {
      method: 'get',
      path: '/confirm/:token',
      handler: 'userController.confirmEmail',
      validation: {
        params: userSchema.confirmEmail
      }      
    },
    {
      method: 'patch',
      path: '/updateUser/',
      handler: 'userController.updateUser',
      validation: {
        body: userSchema.updateUser
      }      
    },
    {
      method: 'patch',
      path: '/changePassword/',
      handler: 'userController.changePassword',
      validation: {
        body: userSchema.changePassword
      }      
    },
    {
      method: 'post',
      path: '/requestReset/:email',
      handler: 'userController.requestReset',
      validation: {
        params: userSchema.requestReset
      } 
    },
    {
      method: 'post',
      path: '/confirmReset/:token',
      handler: 'userController.confirmReset',
      validation: {
        body: userSchema.confirmReset
      } 
    },
    {
      method: 'post',
      path: '/login',
      handler: 'userController.loginUser',
      validation: {
        body: userSchema.login
      }
    },
    {
      method: 'get',
      path: '/user/:user_id',
      handler: 'userController.getUser',
      validation: {
        params: userSchema.getUser
      }
    }
];