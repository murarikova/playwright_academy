import { test } from "@playwright/test";

test("Exercise: Sending API", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
