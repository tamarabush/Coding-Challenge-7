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

//Task 
