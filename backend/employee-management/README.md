# Employee Management — Spring Boot Backend

A simple REST API backend for an Employee Management System built using **Spring Boot, Spring Data JPA, and MySQL**.

This backend provides REST APIs to perform CRUD operations on employees and sends/receives data in **JSON format**. It is designed to work with a React frontend running on `http://localhost:5173`.

## Technologies Used

* Java
* Spring Boot
* Spring Data JPA
* MySQL
* Maven
* REST API
* JSON
* React (Frontend)

## Before You Run

### 1. Start MySQL

Make sure MySQL is running on your system using the default port:

```text
3306
```

### 2. Create the Database

Open MySQL Workbench or MySQL Command Line and create the database:

```sql
CREATE DATABASE sbdata;
```

You don't need to create the employee table manually. Hibernate will create/update the table automatically when the application starts.

### 3. Configure MySQL Username and Password

Open:

```text
src/main/resources/application.properties
```

Update the MySQL username and password according to your local setup:

```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

**Do not commit your actual database password to GitHub.**

## Import into Eclipse

1. Open Eclipse.
2. Go to **File → Import**.
3. Select **Maven → Existing Maven Projects**.
4. Browse to the `employee-management` folder.
5. Select the project and click **Finish**.
6. Eclipse will download the required dependencies from Maven Central.
7. Open `EmployeeManagementApplication.java`.
8. Right-click → **Run As → Java Application**.

If everything is configured correctly, the application should start on:

```text
http://localhost:9999
```

You should see something similar in the console:

```text
Tomcat started on port 9999
```

## REST API Endpoints

| Action               | Method | Endpoint                       |
| -------------------- | ------ | ------------------------------ |
| Create employee      | POST   | `/api/v1/createEmp`            |
| Get one employee     | GET    | `/api/v1/getEmp/{eid}`         |
| Get all employees    | GET    | `/api/v1/getEmpList`           |
| Update employee      | PUT    | `/api/v1/update/{eid}`         |
| Delete employee      | DELETE | `/api/v1/delete/{eid}`         |
| Search by first name | GET    | `/api/v1/getEmp/fname/{fname}` |

### Base URL

```text
http://localhost:9999
```

### Example

To get all employees:

```text
GET http://localhost:9999/api/v1/getEmpList
```

## Quick Test

After starting the backend, open this URL in your browser:

```text
http://localhost:9999/api/v1/getEmpList
```

If there are no employees in the database, you should get:

```json
[]
```

If employees already exist, you will receive a JSON array containing the employee details.

This confirms that the backend is running and connected to the database.

## CORS Configuration

The controller is configured to allow requests from the React Vite application:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

This allows the React frontend to communicate with the Spring Boot backend.

If your React application runs on a different port, update the URL accordingly.

## Project Structure

```text
src/main/java/com/example/employeemanagement
│
├── EmployeeManagementApplication.java
│
├── entity/
│   └── Employee.java
│
├── repository/
│   └── EmployeeRepository.java
│
├── service/
│   ├── EmployeeService.java
│   └── EmployeeNotFoundException.java
│
└── controller/
    └── EmployeeController.java
```

### Main Classes

**EmployeeManagementApplication.java**
Main Spring Boot application class used to start the project.

**Employee.java**
Entity class that represents the employee data and maps to the database table.

**EmployeeRepository.java**
Repository interface used for database operations through Spring Data JPA.

**EmployeeService.java**
Contains the main business logic for employee operations.

**EmployeeNotFoundException.java**
Custom exception used when an employee is not found.

**EmployeeController.java**
Provides the REST API endpoints for creating, reading, updating, deleting, and searching employees.

## How It Works

The basic flow of the application is:

```text
React Frontend
      ↓
REST API
      ↓
EmployeeController
      ↓
EmployeeService
      ↓
EmployeeRepository
      ↓
MySQL Database
```

The React frontend sends HTTP requests to the Spring Boot backend. The controller receives the request, the service handles the business logic, and the repository communicates with MySQL using Spring Data JPA.

## Frontend

The backend is designed to work with a React Vite frontend running at:

```text
http://localhost:5173
```

The frontend can use the REST APIs to:

* Add employees
* Display employee details
* Update employee information
* Delete employees
* Search employees by first name

## Project Status

The backend is currently configured for local development with:

* Spring Boot
* MySQL
* Spring Data JPA
* REST APIs
* React frontend integration
* CORS configuration
* Maven
* Tomcat
