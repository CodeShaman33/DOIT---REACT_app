import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  task: {
    id: primaryKey(faker.datatype.uuid),
    content: () =>
      `${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()}`,
    date: () =>
      faker.date.betweens(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      ),
    note: () => faker.fake(`{{name.lastName}}`),
    priority: () => faker.datatype.number({ min: 1, max: 4 }),
  },

  user: {
    id: primaryKey(() => "1"),
    name: () => "Jacek Sobczak",
    login: () => "luckyloki33@gmail.com",
    password: () => "1234",
  },

  note: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'lorem ipsum dolor sit amet ',
    content: () => 'lorem ipsum dolor sit amet',
  }
});
