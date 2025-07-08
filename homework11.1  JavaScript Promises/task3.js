async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function run() {
  try {
    const results = await Promise.all([fetchTodo(), fetchUser()]);

    console.log("Promise.all result:");
    console.log("  todo:", results[0]);
    console.log("  user:", results[1]);

    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);

    console.log("Promise.race result:");
    console.log("get first result:", firstResult);
  } catch (error) {
    console.error("error:", error);
  }
}

run();
