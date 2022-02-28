const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js')

test('create employee object', () => {
    const emp = new Employee('Jim', '1234567', 'jim@code.com');
    
    expect(emp.name).toBe('Jim');
    expect(emp.id).toBe('1234567');
    expect(emp.email).toBe('jim@code.com');
})