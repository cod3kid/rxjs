const Rx = require("rx");
Rx.Observable.fromEvent(document, "click")
  .filter((c) => {
    return c.clientX > window.innerWidth / 2;
  })
  .take(10)
  .subscribe((c) => {
    console.log(c.clientX, c.clientY);
  });
