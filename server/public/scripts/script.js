let employees = [{
    firstName: 'Ross',
    lastName: 'Qualey',
    idNumber: '81202',
    jobTitle: 'Farmer',
    annualSalary: 50000,
}, {
    firstName: 'Nanci',
    lastName: 'Qualey',
    idNumber: '105351',
    jobTitle: 'Teacher',
    annualSalary: 50000,
}, {
    firstName: 'Liam',
    lastName: 'Qualey',
    idNumber: '99910',
    jobTitle: 'Pilot',
    annualSalary: 50000,
}, {
    firstName: 'Graham',
    lastName: 'Qualey',
    idNumber: '58409',
    jobTitle: 'Astronaut',
    annualSalary: 50000,
}, ];

$(document).ready(readyNow);

function readyNow() {

    addClickHandlers();

    for (let employeeInfo of employees) {
        addRow(employeeInfo.firstName, employeeInfo.lastName, employeeInfo.idNumber, employeeInfo.jobTitle, employeeInfo.annualSalary);
        calculateMonthly();
    }

    function addClickHandlers() {
        $('#submit').on('click', handleSubmit);
        $('#employeeTable').on('click', '.deleteBtn', handleDelete);
    } // end addClickHandlers

    function handleSubmit() {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let idNumber = $('#idNumber').val();
        let jobTitle = $('#jobTitle').val();
        let annualSalary = $('#annualSalary').val();

        addRow(firstName, lastName, idNumber, jobTitle, annualSalary);
        employees.push({
            firstName,
            lastName,
            idNumber,
            jobTitle,
            annualSalary
        });
        calculateMonthly();

        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');

    } //end handleSubmit

    function handleDelete() {
        const row = $(this).closest('tr');

        // const id = row[0].cells[2].innerHTML;

        // for(let i = 0; i < employees.length; i++) {
        //     if(employees[i].idNumber === id){
        //         employees = employees.splice(id, 1);
        //     }
        // }

        row.remove();
        calculateMonthly();
    } //end handleDelete

    function addRow(firstName, lastName, idNumber, jobTitle, annualSalary) {
        let $row = $('<tr></tr>');
        $row.append(`<td>${firstName}</td>`);
        $row.append(`<td>${lastName}</td>`);
        $row.append(`<td>${idNumber}</td>`);
        $row.append(`<td>${jobTitle}</td>`);
        $row.append(`<td>${annualSalary}</td>`);
        $row.append(`<td><button class="deleteBtn">DELETE</button></td>`);

        $("#employeeTable").append($row);

    } // end addRow

    function calculateMonthly() {
        let total = 0;
        for (let i = 0; i < employees.length; i++) {
            total = parseInt(total) + parseInt(employees[i].annualSalary);
        }

        bgColor = 'under';
        monthly = (total / 12).toFixed(2);

        if (monthly > 20000) {
            bgColor = 'over';
        }

        $("#monthly").html('<h4 class=' + bgColor + '>Total Monthly :' + ' ' + monthly + '</h4>');

    }

} // end readyNow