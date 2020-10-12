addDataRows = () => {
    ds = new DataService();
    data = ds.getData(); //gets Data from DataService
    console.log(data);

    table = document.getElementById('myTable'); //gets the table
    data.forEach(rowData => { //loops through the array to get row data
        createRow(table, rowData) //passes data for each row into createRow
    });
}

createRow = (parentElem, rowData) => {
    row = parentElem.insertRow(-1); //creates a row at the end of the table

    //Adds data to the row
    row.insertCell(0).innerHTML = rowData.name;
    row.insertCell(1).innerHTML = rowData.gender;
    row.insertCell(2).innerHTML = rowData.address;
    row.insertCell(3).innerHTML = rowData.age;
    row.insertCell(4).innerHTML = rowData.phoneNumber;
}