// Employee class
    // baseEmployee
    // manager
    // boss

    // employee class
        // properties (occupied, currentTicket, name, title)
        // methods (takeCall, endCall)


// Call Handler class
    // properties(ticketQueue, baseQueue, managerQueue, bossQueue, completedTickets)
    // methods (takeCall, delegateCall, customerResponse )


class Employee {
    contructor(name, title, manager, callCenter) {
        this.name = name;
        this.title = title;
        this.occupied = false;
        this.ticket = null;
        this.manager = manager;
        this.callCenter = callCenter;

        if (manager) manager.addEmployee(this);
        if (callCenter) callCenter.addEmployee(this)
    }

    takeCall(ticket) {
        this.ticket = ticket;
        this.occupied = true;
    }

    endCall() {
        const ticket = this.ticket;
        this.ticket = null;
        this.occupied = fale;

        this.callCenter.addEmployee(this);
        this.callCenter.addCompletedTicket(ticket)
    }
}

class Base extends Employee {
    constructor(name, title, manager) {
        super(name, title, manager);
    }
}

class Manager extends Employee {
    constructor(name, title, manager) {
        super(name, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    passTicketToEmployee() {
        // TODO
    }
}

class Boss extends Employee {
    constructor(name, title, manager) {
        super(name, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    passTicketToEmployee() {
        // TODO
    }
}

class CallHandler {
    constructor() {
        this.ticketQueue = [];
        this.baseQueue = [];
        this.managerQueue = [];
        this.bossQueue = [];
        this.completedTickets = [];
    }

    addEmployee(employee) {
        const title = employee.title;
        if (title === 'base') this.baseQueue.push(employee);
        if (title === 'manager') this.managerQueue.push(employee);
        if (title === 'boss') this.bossQueue.push(employee);
    }

    takeCall(caller) {
        const ticket = this.generateTicket(caller);
        if (this.checkAvail()) {
            this.delegateCall(ticket);
        } else {
            this.ticketQueue.push(ticket);
        }
    }

    generateTicket(caller) {
        // TODO
        // Return ticket number;
    }

    checkAvail() {
        // if all employees are busy return false.
    }

    delegateCall(ticket) {
        let employee;
        if (this.baseQueue.length) {
            employee = this.baseQueue.shift();
            employee.takeCall(ticket);
        } else if (this.managerQueue.length) {
            employee = this.managerQueue.shift();
            employee.takeCall(ticket);
        } else if (this.bossQueue.length) {
            employee = this.bossQueue.shift();
            employee.takeCall(ticket);
        }
    }

    addCompletedTicket(ticket) {
        this.completedTickets.push(ticket);
    }
}
