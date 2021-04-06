import faker from 'faker';

export class User {
  name: string;
  location: {
    lag: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lag : parseFloat(faker.address.latitude()),
      lng : parseFloat(faker.address.longitude())
    };
  }
}

//this is for testing password