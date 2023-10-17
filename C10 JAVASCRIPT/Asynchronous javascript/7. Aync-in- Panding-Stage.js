const onWakeUp = () => {
    return new Promise((reply, reject) => {
        setTimeout(() => {
            reply("Wake up successfully");
        }, 3000);
    });
};

const runAPI = async () => {
    console.log("Code Started");
    const wakeUpData = await onWakeUp();
    console.log("Code Ended");
};
runAPI();

