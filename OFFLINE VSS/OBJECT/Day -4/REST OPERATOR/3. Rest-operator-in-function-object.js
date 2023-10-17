const getmessage = (obj) => {
    console.log("obj", obj)
};
const getmessagev2 = ({ name, ...bachahua }) => {
    console.log("getoutput", name, bachahua)
}
getmessagev2({
    name: "ajay",
    salary: 3200000,
    compony: "Adidas",
    available: true,
});