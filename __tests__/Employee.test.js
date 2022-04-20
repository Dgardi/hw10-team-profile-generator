
const { expect } = require('@jest/globals')
const expectExport = require('expect')
const Employee = require('../lib/Employee')
test("Can Create new Employee Class",()=>{
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})
test("That we  can add a name to Employee", ()=>{
    const testName = 'Jimmy'
    const a = new Employee(testName);
    expect(a.getName).toBe(testName) ;
    
})