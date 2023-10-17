const profile = {
    name: "Akshay",
    city: "Jabalpur",
    country: "India",
    datails: {
        job: true,
        compony: "tcs",
        profile: "network Engineer",
        salary: 45000,
    }
}

// 1.  BY JSON METHOD

// const JsonMethod = JSON.parse(JSON.stringify(profile))
// JsonMethod.datails.compony = "Infosys"
// console.log(JsonMethod)

// 2.  BY StructureClone method

// const deep = structuredClone(profile)
// deep.datails.job = false;
// console.log(deep)

// 3. 