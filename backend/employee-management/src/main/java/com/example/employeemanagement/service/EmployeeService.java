package com.example.employeemanagement.service;

import com.example.employeemanagement.entity.Employee;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmp(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(Integer eid) {
        return employeeRepository.findById(eid)
                .orElseThrow(() -> new EmployeeNotFoundException("No employee found with id " + eid));
    }

    public List<Employee> getEmpList() {
        return employeeRepository.findAll();
    }

    public Employee update(Integer eid, Employee updatedEmployee) {
        Employee existing = getEmployee(eid);

        existing.setFname(updatedEmployee.getFname());
        existing.setLname(updatedEmployee.getLname());
        existing.setAge(updatedEmployee.getAge());
        existing.setSalary(updatedEmployee.getSalary());
        existing.setCity(updatedEmployee.getCity());
        existing.setState(updatedEmployee.getState());

        return employeeRepository.save(existing);
    }

    public void delete(Integer eid) {
        Employee existing = getEmployee(eid);
        employeeRepository.delete(existing);
    }

    public Employee getEmployeeByFname(String fname) {
        List<Employee> results = employeeRepository.findByFname(fname);
        if (results.isEmpty()) {
            throw new EmployeeNotFoundException("No employee found with first name " + fname);
        }
        return results.get(0);
    }
}
