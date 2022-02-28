const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js')

test('create employee object', () => {
    const emp = new Employee();
    
    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(String));
    expect(emp.email).toEqual(expect.any(String));
})