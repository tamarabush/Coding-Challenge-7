//TASK 1 - Create a Department Structure:

const company = {
    departments: [
        {
            departmentName: 'Business',
            employees: [
                {
                    name: 'Daenerys Targaryen',
                    salary: 150000,
                    subordinates: [
                        {
                            name: 'Robb Stark',
                            salary: 90000,
                            subordinates: [
                                {
                                    name: 'Jaime Lannister',
                                    salary: 65000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Jon Snow',
                    salary: 95000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Civil Engineering',
            employees: [
                {
                    name: 'Sansa Stark',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bran Stark',
                            salary: 75000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Cersei Lannister',
                    salary: 35000,
                    subordinates: []
                }
            ]
        }
    ]
}; 



//TASK 2 - Create a Recursive Function to Calculate Total Salary for a Department:

function calculateDepartmentSalary(departments) {
    let sumOfSalaries = 0
    //starting the calculation off with a 0 to calculate the sum of the salaries

    for (let characterEmployee of departments.employees) {
        sumOfSalaries += characterEmployee.salary;
    //using the for of loop to iterate over the employees to accumlate their salaries

    if (characterEmployee.subordinates && characterEmployee.subordinates.length > 0) {
        sumOfSalaries += calculateDepartmentSalary({employees: characterEmployee.subordinates});
    //using an if statement to check if that employee has subordinates
    //if they do, then it will calculate the total salaries of those subordinates
    }}

    return sumOfSalaries;
    //returning the total of all salaries
}

let businessTotalSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`The total salary for the Business Department is $${businessTotalSalary}.`);
//outputs the total salary for the business department

let engineeringTotalSalary = calculateDepartmentSalary(company.departments[1]);
console.log(`The total salary for the Civil Engineering Department is $${engineeringTotalSalary}.`);
//outputs the total salary for the civil engineering department



//TASK 3 - Create a Function to Calculate the Total Salary for All Departments:

function calculateCompanySalary(company) {
    let totalSalaryCompany = 0;
    //starting the calculation off with a 0 to calculate the sum of Comapny salaries

    company.departments.forEach(department => {
        totalSalaryCompany += calculateDepartmentSalary(department);
    //using the for each method to iterate through the company department and calculate the total 
    });

    return totalSalaryCompany;
    //returning the total salaries for the comapny 
}

let totalOfCompanySalaries = calculateCompanySalary(company);
console.log(`The total salary for the company is $${totalOfCompanySalaries}.`);