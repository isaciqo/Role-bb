class CalendarController {
    constructor({ 
        createCalendarOperation,
        getCalendarOperation,
        listCalendarOperation,
        updateCalendarOperation,
        updateSchedulesCreatedOperation,
        updateSchedulesJoinedOperation,
        deleteSchedulesOperation
     }) {
        this.createCalendarOperation = createCalendarOperation;
        this.getCalendarOperation = getCalendarOperation;
        this.listCalendarOperation = listCalendarOperation;
        this.updateCalendarOperation = updateCalendarOperation;
        this.updateSchedulesCreatedOperation = updateSchedulesCreatedOperation;
        this.updateSchedulesJoinedOperation = updateSchedulesJoinedOperation;
        this.deleteSchedulesOperation = deleteSchedulesOperation;      
    }
    async createCalendar(req, res) {
        try {
            const { createdBy, users, calendarInformation, name, description } = req.body;
            if (!createdBy || !users) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            console.log('create Calendar', createdBy);
            const newCalendar = await this.createCalendarOperation.createCalendar({ createdBy, users, calendarInformation, name, description });
            res.status(201).json(newCalendar);
        } catch (error) {
            console.error('Error creating calendar:', error);
            res.status(500).json({ error: 'Unable to create calendar' });
        }
    }

    async updateSchedulesCreated(req, res) {
        try {
            const { id } = req.params;
            const { schedulesCreated } = req.body;
            if (!schedulesCreated) {
                return res.status(400).json({ message: 'Missing schedulesCreated' });
            }
            console.log('updateSchedulesCreated', schedulesCreated);
            const newUser = await this.updateSchedulesCreatedOperation.updateSchedulesCreated({ id, schedulesCreated });
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error updating schedules created:', error);
            res.status(500).json({ error });
        }
    }

    async updateSchedulesJoined(req, res) {
        try {
            const { id } = req.params;
            const { user_id } = req.body
            const newUser = await this.updateSchedulesJoinedOperation.updateSchedulesJoined({ id, user_id });
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error updating schedules joined:', error);
            res.status(500).json({ error });
        }
    }

    async deleteSchedules(req, res) {
        try {
            const { id } = req.params;
            const { user_id } = req.body
            const newUser = await this.deleteSchedulesOperation.deleteSchedules({ id, user_id });
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error updating schedules joined:', error);
            res.status(500).json({ error });
        }
    }

    async updateCalendar(req, res) {
        try {
            const { id } = req.params;
            const  calendarInformation  = req.body.calendarInformation;
            if (!calendarInformation) {
                return res.status(400).json({ message: 'Missing calendarInformation' });
            }
            console.log('calendarInformation----------', calendarInformation);
            const newCalendar = await this.updateCalendarOperation.updateCalendar({ id, calendarInformation });
            res.status(201).json(newCalendar);
        } catch (error) {
            console.error('Error updating calendar:', error);
            res.status(500).json({ error });
        }
    }

    async listCalendar(req, res) {
        try {
            const { createdBy } = req.params;
            if (!createdBy) {
                return res.status(400).json({ message: 'Missing createdBy' });
            }
            console.log('list Calendar', createdBy);
            const calendars = await this.listCalendarOperation.listCalendar({ createdBy });
            res.status(200).json(calendars);
        } catch (error) {
            console.error('Error listing calendars:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async getCalendar(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Missing id' });
            }
            console.log('get Calendar', id);
            const calendar = await this.getCalendarOperation.getCalendar({ id });
            res.status(200).json(calendar);
        } catch (error) {
            console.error('Error getting calendar:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CalendarController