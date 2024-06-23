import { faker } from "@faker-js/faker";

export const generateFakerUser = () => {
  return {
    profileImage: faker.image.urlLoremFlickr(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    description: faker.lorem.paragraph(),
    image: faker.image.urlPicsumPhotos(),
  };
};
