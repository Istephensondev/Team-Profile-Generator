const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Ivy', '123', 'istephensondev@gmail.com');

    expect(employee.name).toBe('Ivy');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('istephensondev@gmail.com');
});

test("returns employee's name", () => {
    const employee = new Employee('Ivy', '123', 'istephensondev@gmail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining('Ivy'));
});

test("returns employee's id", () => {
    const employee = new Employee('Ivy', '123', 'istephensondev@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test("returns employee's email", () => {
    const employee = new Employee('Ivy', '123', 'istephensondev@gmail.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('jscott@d-verse.com'));
});

test("returns employee's role", () => {
    const employee = new Employee('Ivy', '123', 'istephensondev@gmail.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});