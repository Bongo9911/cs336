"use strict";

//gets the data for the rows from the DataService class and calls createRow
//on all of the returned data
async function addDataRows() {
    let table = document.getElementById("myTable");
    const dataService = new DataService();
    await dataService.fetchData();
    let data = dataService.getData();
    data.forEach(element => { //loops through the array to get row data
        createRow(table, element); //passes data for each row into createRow
    });
}

//creates a row with data provieded in rowData and adds it to the DOM under the
//parentElem
function createRow(parentElem, rowData) {
    let row = parentElem.insertRow(-1); //creates a row at the end of the table

    //Adds data to the row
    row.insertCell(0).innerHTML = rowData.name.title + " " + rowData.name.first + " " + rowData.name.last;
    row.insertCell(1).innerHTML = rowData.gender;
    row.insertCell(2).innerHTML = rowData.location.street.number + " " + rowData.location.street.name
        + ", " + rowData.location.city + ", " + rowData.location.state + ", " + rowData.location.country;
    row.insertCell(3).innerHTML = rowData.dob.age;
    row.insertCell(4).innerHTML = rowData.phone;

    //Create a cell to put the image in and then append the image to the cell
    let imgCell = row.insertCell(5);
    var img = document.createElement('img');
    img.src = rowData.picture.medium;
    imgCell.appendChild(img);
}