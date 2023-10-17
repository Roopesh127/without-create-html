let count = 0;
myinterval = setInterval(() => {
    count++;
    console.log(count);

    if (count == 10) {
        clearInterval(myinterval)
        console.log("process is completed")

    }

}, 1000)
