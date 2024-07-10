const employee ={
     calcTax: function(a){
        console.log((a/100)*10)
    },
};

const emp1 = {
    name: "Daniel",
    Salary: 15000
};
const emp2 = {
    name: "Dani",
    Salary: 10000
};
const emp3 = {
    name: "anand",
    Salary: 30000
};
const emp =[emp1 ,emp2 ,emp3];
emp.forEach(element => {
    Object.setPrototypeOf(element,employee);
});
emp.forEach(element =>{
    console.log(`${element.name}'s tax:`);
    element.calcTax(element.Salary); 
})
