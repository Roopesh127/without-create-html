
const onWakeUp = () => {
    return new Promise((reply, reject) => {
        setTimeout(() => {
            reply("Wake up successfully");
        }, 3000);
    });
};

const onGettingReady = () => {
    return new Promise((reply, reject) => {
        setTimeout(() => {
            reply("I'm ready my friend");
        }, 5000);
    });
};

const onGoingToShopping = () => {
    return new Promise((reply, reject) => {
        setTimeout(() => {
            reply("Done with my shopping");
        }, 3000);
    });
};

console.log("Code Started");
/*   onWakeUp()
  .then((wakeUpData) => {
    console.log("1.", wakeUpData);
    onGettingReady()
      .then((gettingReadyData) => {
        console.log("2. : ", gettingReadyData);
        onGoingToShopping()
          .then((shoppingData) => {
            console.log("3. : ", shoppingData);
          })
          .catch((shoppingErr) => console.log("3. Err: ", shoppingErr));
      })

      .catch((gettingReadyError) =>
        console.log("2.Error: ", gettingReadyError)
      );
  })
  .catch((wakeUpError) => console.log("1.Error: ", wakeUpError)); */

const callAPI = async () => {
    try {
        console.log("Async Code Started");
        const wakeUpData = await onWakeUp();
        console.log("1. ", wakeUpData);

        const onGettingReadyData = await onGettingReady();
        console.log("2. ", onGettingReadyData);

        const onGoingToShoppingData = await onGoingToShopping();
        console.log("3. ", onGoingToShoppingData);

        console.log("Async Code Ended");
    } catch (err) {
        console.log("Error: ", err);
    }
};
callAPI();
console.log("Code ended");
