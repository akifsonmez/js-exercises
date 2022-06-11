const rejectExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 4000);
});

rejectExample
  .then(() => {
    console.log("since promise will be rejected this should not be logged");
  })
  .catch(() =>
    console.log("since promise will be rejected this should be logged")
  );

const resolvedExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 4000);
});

resolvedExample
  .then(() => {
    console.log("since promise will be resolved this should be logged");
  })
  .catch(() =>
    console.log("since promise will be resolved this should not be logged")
  );
