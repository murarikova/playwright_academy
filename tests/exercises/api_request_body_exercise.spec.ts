import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";

test("Exercise: Request with body", async ({ request }) => {
  const username =
    faker.internet.username() + "_" + faker.number.int({ max: 1_000_000 });
  const email = faker.internet.exampleEmail();
  //  const password = faker.internet.password();

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username,
        password: "123456",
        email: email,
      },
    }
  );
});
