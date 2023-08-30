let name = {
    firstname:"Roopesh",
    lastname:"Vishwakarma",

    printfullname: function(){
        console.log(this.firstname + " "+ this.lastname)
    }
}
name.printfullname();

let name2 = {
    fname :"ankit",
    lname:"Jain", 
}
name.printfullname.call(name2);