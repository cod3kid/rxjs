const Rx = require("rx");
// Rx.Observable.fromEvent(document, "click")
//   .filter((c) => {
//     return c.clientX > window.innerWidth / 2;
//   })
//   .take(10)
//   .subscribe((c) => {
//     console.log(c.clientX, c.clientY);
//   });

const observable = Rx.Observable.create((observer) => {
  observer.onNext("Hello");
  observer.onNext("Mello");
  observer.onNext("Kello");
  observer.onCompleted();
});

observable.subscribe(
  (value) => console.log(value),
  null,
  () => console.log("Completed")
);
