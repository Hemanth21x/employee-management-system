package com.example.employeemanagement.controller;

import com.example.employeemanagement.entity.Employee;
import com.example.employeemanagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://employee-management-frontend-pa8b.onrender.com")
@RestController
@RequestMapping("api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // POST http://localhost:9999/api/v1/createEmp
    @PostMapping("/createEmp")
    public Employee createEmp(@RequestBody Employee employee) {
        return employeeService.createEmp(employee);
    }

    // GET http://localhost:9999/api/v1/getEmp/{eid}
    @GetMapping("/getEmp/{eid}")
    public Employee getEmployee(@PathVariable("eid") Integer eid) {
        return employeeService.getEmployee(eid);
    }

    // GET http://localhost:9999/api/v1/getEmpList
    @GetMapping("/getEmpList")
    public List<Employee> getEmpList() {
        return employeeService.getEmpList();
    }

    // PUT http://localhost:9999/api/v1/update/{eid}
    @PutMapping("/update/{eid}")
    public Employee update(@PathVariable("eid") Integer eid, @RequestBody Employee employee) {
        return employeeService.update(eid, employee);
    }

    // DELETE http://localhost:9999/api/v1/delete/{eid}
    @DeleteMapping("/delete/{eid}")
    public void delete(@PathVariable("eid") Integer eid) {
        employeeService.delete(eid);
    }

    // GET http://localhost:9999/api/v1/getEmp/fname/{fname}
    @GetMapping("/getEmp/fname/{fname}")
    public Employee getEmployeeByFname(@PathVariable("fname") String fname) {
        return employeeService.getEmployeeByFname(fname);
    }
}
