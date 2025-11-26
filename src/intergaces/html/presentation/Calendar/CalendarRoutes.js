const calendarSchema  = require('./CalendarSchemas')();

module.exports = [
    {
      method: 'post',
      path: '/createCalendar',
      handler: 'calendarController.createCalendar',
      validation: {
        body: calendarSchema.create
      }
    },
    {
      method: 'put',
      path: '/updateCalendar/:id',
      handler: 'calendarController.updateCalendar'
    },
    {
      method: 'put',
      path: '/updateSchedulesCreated/:id',
      handler: 'calendarController.updateSchedulesCreated',
      validation: {
        body: calendarSchema.updateSchedulesCreated
      }
    },
    {
      method: 'put',
      path: '/updateSchedulesJoined/:id',
      handler: 'calendarController.updateSchedulesJoined',
      validation: {
        params: calendarSchema.updateSchedulesJoined,
        body: calendarSchema.bodyUpdateSchedulesJoined
      }
    },
    {
      method: 'delete',
      path: '/deleteSchedules/:id',
      handler: 'calendarController.deleteSchedules',
      validation: {
        params: calendarSchema.deleteSchedules,
        body: calendarSchema.bodyDeleteSchedules
      }
    },
    {
      method: 'get',
      path: '/listCalendar/:createdBy',
      handler: 'calendarController.listCalendar'
    }
    ,
    {
      method: 'get',
      path: '/calendar/:id',
      handler: 'calendarController.getCalendar'
    }
];