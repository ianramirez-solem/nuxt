import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const user = {
    id: faker.string.nanoid(5),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  }
  /**
   * En una app real, aqui es donde hay validar con db u otro el auth service
   */
  await setUserSession(event, {
    user,
    loggedInAt: new Date(),
  });
  return user
});
