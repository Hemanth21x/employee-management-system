package com.example.employeemanagement.repository;

import com.example.employeemanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // Spring Data JPA auto-generates the query from this method name:
    // "find employees where fname equals the given value"
    List<Employee> findByFname(String fname);
}
