class Todos {
  constructor(Url1) {
    this._Url1 = Url1;
  }
  async fetchTodo() {
    const response = await fetch(this._Url1);
    return response.json();
  }
}
class Users {
  constructor(Url2) {
    this._Url2 = Url2;
  }
  async fetchUser() {
    const response = await fetch(this._Url2);
    return response.json();
  }
}
const classTodos = new Todos(
  "https://jsonplaceholder.typicode.com/todos/1"
).fetchTodo();
const classUsers = new Users(
  "https://jsonplaceholder.typicode.com/users/1"
).fetchUser();

async function run() {
  try {
    const results = await Promise.all([classTodos, classUsers]);

    console.log("Promise.all result:");
    console.log("  todo:", results[0]);
    console.log("  user:", results[1]);

    const firstResult = await Promise.race([classTodos, classUsers]);

    console.log("Promise.race result:");
    console.log("get first result:", firstResult);
  } catch (error) {
    console.error("error:", error);
  }
}

run();
