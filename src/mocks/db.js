import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

//date
const startDate = new Date('2022-04-28')
const endDate = new Date('2022-12-28')

export const db = factory({
  task: {
    id: primaryKey(faker.datatype.uuid),
    content: () =>
      `${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()} ${faker.random.word()}`,
    date: () => {
      const randomDate = faker.date.between(startDate, endDate);
      const formattedDate = randomDate.toISOString().split('T')[0];
      return formattedDate;
    },
    note: () => faker.fake(`{{name.lastName}}`),
    priority: () => faker.datatype.number({ min: 1, max: 4 }),
    done: () => false,
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
