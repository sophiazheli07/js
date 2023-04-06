class Service {
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


postService.getRequest().then((data) => console.log(data, "posts"));
postService
  .postRequest({ title: "title", body: "text", userId: 0 })
  .then((data) => console.log("CREATED POST", data));
postService
  .patchRequest(1, { id: 1, titile: "title", body: "body" })
  .then((data) => console.log("UPDATED POST", data));
postService
  .deleteRequest(1)
  .then((status) => console.log("status of deletion", status));


