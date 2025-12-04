const j2s = require("joi-to-swagger");
const userSchemas = require("../intergaces/html/presentation/user/userSchemas")();
const calendarSchemas = require("../intergaces/html/presentation/Calendar/CalendarSchemas")();

module.exports = {
  UserCreate: j2s(userSchemas.create).swagger,
  UserUpdate: j2s(userSchemas.updateUser).swagger,
  UserLogin: j2s(userSchemas.login).swagger,
  UserGet: j2s(userSchemas.getUser).swagger,
  ConfirmEmail: j2s(userSchemas.confirmEmail).swagger,
  RequestReset: j2s(userSchemas.requestReset).swagger,
  ConfirmReset: j2s(userSchemas.confirmReset).swagger,
  ChangePassword: j2s(userSchemas.changePassword).swagger,

  login:j2s(calendarSchemas.login).swagger,
  updateSchedulesJoined:j2s(calendarSchemas.updateSchedulesJoined).swagger, 
  bodyUpdateSchedulesJoined:j2s(calendarSchemas.bodyUpdateSchedulesJoined).swagger,
  deleteSchedules:j2s(calendarSchemas.deleteSchedules).swagger, 
  bodyDeleteSchedules:j2s(calendarSchemas.bodyDeleteSchedules).swagger,
};