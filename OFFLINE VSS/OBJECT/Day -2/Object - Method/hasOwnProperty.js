const profile = {
    name: "Roopesh",
    city: "Jabalpur",
    age: 22,

    education: {
        school: "sdm hr sec school",
        college: "SRIT Jabalpur",
    }
}

const result = profile.education.hasOwnProperty("school")
// console.log(result)

// const object1 = {};
// object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));

// const object1 = {
//     property1: 42;
// };

// console.log(object1.hasOwnProperty(42));

const profiile = {
    name: "satyam",
    city: "jabalpur",
    age: 26,
    eduction: {
        school: {
            5: "Soorwari",
            9: "convent",
            highersec: {
                eleventh: "narsinghpur",
                twelth: "Jabalpur",
            }
        },
        college: {
            mechanical: "global",
            city: "jabalpur",
            jobprep: {
                online: "jabalpur",
                offlne: "Indore",
            }
        }
    }
}
// const resuult = profiile.eduction.school.highersec.hasOwnProperty("eleventh")
// const resuult = profiile.eduction.college.jobprep.hasOwnProperty("online")
const resuult = profiile.eduction.school.hasOwnProperty("5")

console.log(resuult)