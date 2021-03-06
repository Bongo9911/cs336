"use strict";

//class to supply hard coded data
export default class DataService {
  private data : Person[];
  //initilizes data, doesn't take any user input
  constructor() {
    this.data = [];
  };

  //returns data, optional paramater allows user to limit amount of data supplied
  //if parameter is not supplied all data is returned
  getData(numRecords?: number) : Person[] {
    return this.data.slice(0, numRecords ? numRecords : this.data.length);
  };

  async fetchData() {
    try {
      let response = await fetch('https://randomuser.me/api/?results=10'); //Waits to get data before proceeding
      if (!response.ok) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      try {
        let results = await response.json();
        this.data = this.data.concat(results.results); //gets the data from the results and saves it
        console.log(JSON.stringify(this.data, undefined, 2));
      }
      catch (err) {
        console.log(err);
      }
    }
    catch (err) {
      console.log('Fetch Error :-S', err);
    }
  };
}


//test class with console.log()
/*
const dataService = new DataService();
console.log(dataService.getData());
console.log(dataService.getData(-1));
console.log(dataService.getData(0));
console.log(dataService.getData(1));
console.log(dataService.getData(2));
console.log(dataService.getData(3));
console.log(dataService.getData(4));
console.log(dataService.getData());
*/


// Generated by https://quicktype.io
export interface Person {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface ID {
  name: string;
  value: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
