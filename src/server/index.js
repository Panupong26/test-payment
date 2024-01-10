import { createServer, Model, Factory, hasMany, belongsTo } from "miragejs";

import authServerConfig from "./auth-server";

import { faker } from "@faker-js/faker";
import { calendarEvents } from "./app/data";
import calendarServerConfig from "./app/calendar/calendar-server";
const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000 * 2
);

createServer({
  models: {
    user: Model,
    product: Model,
    calendarEvent: Model,
  },
  factories: {},

  seeds(server) {
    server.create("user", {
      email: "Dot@gmail.com",
      password: "Dot",
    });
 
    calendarEvents.forEach((element) => {
      server.create("calendarEvent", {
        id: faker.string.uuid(),
        title: element.title,
        start: element.start,
        end: element.end,
        allDay: element.allDay,
        //className: "warning",
        extendedProps: {
          calendar: element.extendedProps.calendar,
        },
      });
    });
  },
  routes() {
    //this.namespace = "api";

    authServerConfig(this);
    calendarServerConfig(this);
    this.timing = 500;
    //this.passthrough();
  },
});
