import { test } from "@playwright/test";

// ? Parametr request nam umoznuje praci s API (posilani, konfigurace...)
test("Send GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET Request with URL Parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 123,
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Request s hlavickou",
      },
    }
  );
});

test("POST Request with JSON body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "Cus",
        numberProperty: 789,
        booleanProperty: false,
      },
    }
  );
});
