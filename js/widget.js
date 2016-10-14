const employeeStatusModule = (($) => {

    let url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/226578/employees.json'

    let generateListItems = (employees) => {
        let listItems = '';
        $.each(employees, (index, employee) => {
            if (employee.inoffice) {
                listItems += '<li class="in">';
            } else {
                listItems += '<li class="out">';
            }
            listItems += employee.name + '</li>';
        });

        return listItems;
    };

    let generateUnorderedList = (listItems) => {
        return '<ul class="bulleted">' + listItems + '</ul>';
    };

    let addEmployeesToPage = (unorderedList) => {
        $('#employeeList').html(unorderedList);
    }

    let promiseResponse = $.getJSON(url)
        .then(generateListItems)
        .then(generateUnorderedList)
        .then(addEmployeesToPage)
        .catch((e) => {
            console.log(e.status + ": " + e.statusText);
        });

})(jQuery);
