const userRoutes = require('./user/userRoutes');
const calendarRoutes = require('./Calendar/CalendarRoutes');
const validationMiddleware = require('../middlewares/validationMiddleware');

const registerRoutes = (app, routes, container) => {
    routes.forEach(route => {
        const [controllerName, methodName] = route.handler.split('.');
        const controller = container.resolve(controllerName);
        
        const validateContract = validationMiddleware(route.validation);

        app[route.method](route.path, validateContract, (req, res) => {
          controller[methodName](req, res);
        });
      });
};

const routerRegister = (app, container) => {
  registerRoutes(app, userRoutes, container);
  registerRoutes(app, calendarRoutes, container);
};

module.exports = routerRegister;