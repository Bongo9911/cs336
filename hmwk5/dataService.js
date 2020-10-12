class DataService {
    data = [{name: "Dawson Buist", gender: "M", address: "1234 Cool Person St.", age: 20, phoneNumber: "(616) 616-1616"},
        {name: "Jane Doe", gender: "F", address: "99 99th Ave.", age: 21, phoneNumber: "(777) 777-7777"},
        {name: "Johnny Appleseed", gender: "M", address: "232 Fairytale Blvd.", age: 554, phoneNumber: "(333) 222-1111"}];

    constructor() { };

    //returns the number of records passed in starting at index 0
    getData(numRecords) { return (numRecords !== null ? this.data.slice(0, numRecords) : this.data); }
}


// function testData() {
//     let ds = new DataService();

//     data = ds.getData(2);
//     console.log(data[2]); //returns undefined
//     console.log(data[1]); //returns Jane Doe data

//     data2 = ds.getData();
//     console.log(data2[2]); //returns Johnny Appleseed data
//     console.log(data2[2].name); //returns just Johnny Appleseed

//     data3 = ds.getData(-1);
//     console.log(data3[2]); //returns undefined
//     console.log(data3[1]); //returns Jane Doe data
//     console.log(data3[0]); //returns Dawson Buist data
// }
