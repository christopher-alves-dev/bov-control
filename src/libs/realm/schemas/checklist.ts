import { Realm } from "@realm/react";

export class Farmer extends Realm.Object {
  name!: string;
  city!: string;

  static schema: Realm.ObjectSchema = {
    name: "Farmer",
    properties: {
      name: "string",
      city: "string",
    },
  };
}

export class Person extends Realm.Object {
  name!: string;

  static schema: Realm.ObjectSchema = {
    name: "Person",
    properties: {
      name: "string",
    },
  };
}

export class Location extends Realm.Object {
  latitude!: number;
  longitude!: number;

  static schema: Realm.ObjectSchema = {
    name: "Location",
    properties: {
      latitude: "double",
      longitude: "double",
    },
  };
}

type GenerateProps = {
  _id?: Realm.BSON.UUID;
  type: string;
  amount_of_milk_produced: number;
  number_of_cows_head: number;
  had_supervision: boolean;
  farmer: Farmer;
  from: Person;
  to: Person;
  location: Location;
  created_at?: Date;
  updated_at?: Date;
};

export class Checklist extends Realm.Object<Checklist> {
  _id!: Realm.BSON.ObjectId;
  type!: string;
  amount_of_milk_produced!: string;
  number_of_cows_head!: string;
  had_supervision!: boolean;
  farmer!: Farmer;
  from!: Person;
  to!: Person;
  location!: Location;
  created_at!: Date;
  updated_at!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Checklist",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      type: "string",
      amount_of_milk_produced: "string",
      number_of_cows_head: "string",
      had_supervision: "bool",
      farmer: "Farmer",
      from: "Person",
      to: "Person",
      location: "Location",
      created_at: "date",
      updated_at: "date",
    },
  };
}
