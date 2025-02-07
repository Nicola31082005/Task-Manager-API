import moment from "moment";

export function registerhelper(date: Date) {
  return moment(date).format("MMMM Do YYYY, h:mm a");
}
