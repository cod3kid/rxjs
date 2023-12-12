const Rx = require("rx");
const http = require("http");

const get = (url) => {
  return Rx.Observable.create((observer) => {
    const req = http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log("Response:", data);
        observer.onCompleted();
      });
    });

    // Handle errors
    req.on("error", (error) => {
      observer.onError(error.message);
    });
  });
};

const api = get("https://jsonplaceholder.typicode.com/users");

api.subscribe(
  (value) => console.log(value),
  (err) => {
    console.log(err);
  },
  () => {
    console.log("Complete");
  }
);
