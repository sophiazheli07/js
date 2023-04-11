class Service {
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  constructor(url) {
    this.url = url;
  }

  async getRequest() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
  async postRequest(data) {
    const response = await fetch(this.url, {
      headers: Service.headers,
      method: "POST",
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    return payload;
  }
  async patchRequest(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    return payload;
  }
  async deleteRequest(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    const status = await response.status;
    return status;
  }
}

class PostService extends Service {
  static url = "https://jsonplaceholder.typicode.com/posts";

  constructor(url) {
    super(url);
  }
}
const postService = new PostService(
  "https://jsonplaceholder.typicode.com/posts"
);

const UserService = new Service("https://jsonplaceholder.typicode.com/posts");

// postService.getRequest().then((data) => console.log(data, "posts"));
// postService
//   .postRequest({ title: "title", body: "text", userId: 0 })
//   .then((data) => console.log("CREATED POST", data));
// postService
//   .patchRequest(1, { id: 1, titile: "title", body: "body" })
//   .then((data) => console.log("UPDATED POST", data));
// postService
//   .deleteRequest(1)
//   .then((status) => console.log("status of deletion", status));

// ----------------------------

class UserRealService extends Service {
  constructor(url) {
    super(url);
  }
}

const realUserService = new UserRealService(
  "https://learning-server.onrender.com/users"
);
realUserService.getRequest().then((data) => console.log("users", data));
realUserService
  .postRequest({
    name: "Sophia",
    age: 15,
    location: "Kyiv",
    salary: 3000,
    skills: ["HTML", "CSS"],
  })
  .then((data) => console.log("new user", data));

realUserService.getRequest().then((data) => {
  console.log("users2", data.users);

  const res = [];

  data.users.forEach((user, index) => {
    // const usersWithSameName = aerray.filter((u) => u.name === user.name);
    const isUserAdded = res.find((u) => u.name === user.name);
    !isUserAdded && res.push(user);
  })
  console.log(res, "wtf is going on")
});
// realUserService
//   .patchRequest("6435961868dc217913867831", {
//     name: Sophia,
//     age: 17,
//     location: "Kyiv",
//     skills: ["HTML", "CSS"],
//     salary: 3000,
//   })
//   .then((data) => console.log(data));

realUserService.getRequest().then((data) => {
  const uniqueUsers = {};

  data.users.forEach((user) => {
    if (!uniqueUsers[user.name]) {
      uniqueUsers[user.name] = [user];
    } else {
      const existingUser = uniqueUsers[user.name].find((u) => u.id === user.id);
      if (!existingUser) {
        uniqueUsers[user.name].push(user);
      }
    }
  });
  const uniqueUserList = Object.keys(uniqueUsers).map((name) => {
    return uniqueUsers[name];
  });

  console.log("Unique users by name:", uniqueUserList);
});

