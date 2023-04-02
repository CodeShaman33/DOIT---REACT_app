import {factory, primaryKey} from '@mswjs/data';
import  {faker} from '@faker-js/faker';


export const db = factory({
    task: {
        id: primaryKey(faker.datatype.uuid),
        task: () => faker.fake(`{{name.firstName}}`),
        date: () => faker.date.betweens('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
        note: () => faker.fake(`{{name.lastName}}`),
        priority: () => faker.datatype.number({min:1, max:4})
    }
})