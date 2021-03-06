
// Interfaces


// Respuesta de las lists
export interface IRespList {
  ok: boolean;
  page: number;
  lists: IList[];
}

// Respuesta de los items
export interface IRespItem {
  ok: boolean;
  // page: number;
  items: IItem[];
}

export interface IRespEvent {
  ok: boolean;
  events: IEvent[];
}

export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export interface IList {
  _id?: string;
  title?: string;
  completed?: boolean;
  items?: string[];
  user?: IUser;
}

export interface IItem {
  _id?: string;
  title?: string;
  description?: string;
  created?: string;
  completed?: boolean;
  preparation?: number;
  sets?: number;
  time?: number;
  restSets?: number;
  repeats?: number;
  restReps?: number;
  totalTime?: number;
  list?: string;

}

export interface IEvent {

  _id?: string;
  title?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  allDay?: boolean;


}


