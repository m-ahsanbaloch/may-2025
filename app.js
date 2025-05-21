// var students = {
//     name : "ahsan",
//     email : "abc@gmail.com"
// }

//  let {email , name,city} = students
//  console.log(email , name , )

// let arr = ["ahsan","baloch"]
// let arr2 = ["karachi","pakistan"]
// let merge = [...arr,...arr2]
// console.log(merge);


// =============== destructuring ==============

var manufacture = document.getElementById("manufacture")
var model = document.getElementById("model")
let cars = {
    toyota : {
        corolla : {
            name : "Corolla",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        },
        
        Chr : {
            name : "chr",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        },
          revo : {
            name : "Revo",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        }
        
},
Honda : {
        Civic : {
            name : "Civic",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        },
        
        brv : {
            name : "brv",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        },
          Accord : {
            name : "Accord",
            model : "2025",
            mileage : "300 Km",
            condition : "New"
        }
        
}
}

var selectManufacture = ""
for(var key in cars){
    manufacture.innerHTML += `<option value="${key}">${key}</option>`
}
manufacture.addEventListener("change",function(event){
    model.innerHTML = `<option value="Model">Select Model</option>`
     selectManufacture = event.target.value
    for(var key1 in cars[selectManufacture]){
        model.innerHTML += `<option value="${key1}">${key1}</option>`
    }
    console.log(cars[selectManufacture])
})
model.addEventListener("change",function(event){
    var selectedModel = event.target.value
    var modelDetails = cars[selectManufacture][selectedModel]
    console.log(modelDetails.mileage)
})