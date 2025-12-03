import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test";

test("Reusing Data Between API Calls", async ({ request }) => {
  const email = faker.internet.exampleEmail();
  const password = "123456";
  const username =
    faker.internet.username() + "_" + faker.number.int({ max: 1_000_000 });

  let userId = 0;

  const registrationResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username,
        email,
        password,
      },
    }
  );

  const registrationBody = await registrationResponse.json();
  userId = registrationBody.userId;

  const userResponse = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop",
    {
      params: {
        userId: userId,
      },
    }
  );

  const userBody = await userResponse.json();
  expect(userBody.username, "Username has correct value").toEqual(username);
  expect(userBody.email, "Email has correct value").toEqual(email);
});
