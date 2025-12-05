import { APIRequestContext } from "@playwright/test";

export class UserApi {
  readonly request: APIRequestContext;
  readonly apiUrl = "http://localhost:3000"; // ? V realnem testovanai by vsechna url mela byt v test datech/konfiguraci spravovatelne z jednoho mista

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // ! Do teto metody nepatri asserty, pokud bychom chteli asserty potom je potreba pojmenovat jinak, napriklad registerUserAndAssertResponse
  async registerUser(username: string, password: string, email: string) {
    const response = await this.request.post(this.apiUrl + "/user/register", {
      data: {
        username,
        password,
        email,
      },
    });
    return response;
  }

  async loginUser(username: string, password: string) {
    const response = await this.request.post(
      "http://localhost:3000/auth/login",
      {
        data: {
          username,
          password,
        },
      }
    );
    return response;
  }
}
