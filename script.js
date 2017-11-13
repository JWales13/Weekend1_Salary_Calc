$(document).ready(readyNow);

function readyNow(){
   $('#submitButton').on('click', submitInformationClick);
   $('input[id="deleteBtn"]').click(function(e){
    $(this).closest('tr').remove()
 })
};

var currentMonthlyCostTotal = 0;

function Employee(first, last, id, title, salary) {
    this.firstName = first;
    this.lastName = last;
    this.idNumber = id;
    this.jobTitle = title;
    this.annualSalary = salary;
    this.employeeMonthlyCost = Math.round(this.annualSalary / 12);

};


function submitInformationClick () {
    Employee.firstName = $('#firstName').val();
    Employee.lastName = $('#lastName').val();
    Employee.idNumber = $('#idNumber').val();
    Employee.jobTitle = $('#jobTitle').val();
    Employee.annualSalary = $('#annualSalary').val();
    Employee.employeeMonthlyCost = Math.round(Employee.annualSalary / 12);

    currentMonthlyCostTotal += Employee.employeeMonthlyCost;
    document.getElementById('calcTotal').innerHTML = '$' + currentMonthlyCostTotal;
    document.getElementById('inputForm').reset();
    
    $('tbody').append('<tr><td>' +
        Employee.firstName + '</td>' +
        '<td>' + Employee.lastName + '</td>' +
        '<td>' + Employee.idNumber + '</td>' +
        '<td>' + Employee.jobTitle + '</td>' +
        '<td>' + Employee.annualSalary + '</td>' +
        '<td><input type="button" value="Delete Employee"></td></tr>');

        $('input[id="deleteBtn"]').click(function(e){
            $(this).closest('tr').remove()
         });
    
}; 

    
    