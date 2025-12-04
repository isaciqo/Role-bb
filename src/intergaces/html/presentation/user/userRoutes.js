/**
 * @openapi
 * /create:
 *   post:
 *     tags:
 *       - User
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreate'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *
 * /confirm/{token}:
 *   get:
 *     tags:
 *       - User
 *     summary: Confirma email do usuário
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email confirmado
 *
 * /updateUser:
 *   patch:
 *     tags:
 *       - User
 *     summary: Atualiza dados do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *
 * /changePassword:
 *   patch:
 *     tags:
 *       - User
 *     summary: Troca a senha do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePassword'
 *     responses:
 *       200:
 *         description: Senha alterada
 *
 * /requestReset/{email}:
 *   post:
 *     tags:
 *       - User
 *     summary: Solicita recuperação de senha
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email enviado
 *
 * /confirmReset/{token}:
 *   post:
 *     tags:
 *       - User
 *     summary: Confirma reset de senha
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConfirmReset'
 *     responses:
 *       200:
 *         description: Senha redefinida
 *
 * /login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado
 *
 * /user/{user_id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Obtém um usuário pelo ID
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 */

const userSchema  = require('./userSchemas')();
const carbonSchema  = require('../carbon/carbonSchemas')();

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
    },
    {
      method: 'get',
      path: '/qrcode/:qrcodeID',
      handler: 'carbonController.generateQRCode',
      validation: {
        params: carbonSchema.get
      }
    }
];
