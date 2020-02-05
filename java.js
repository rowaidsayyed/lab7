function first(){
alert("Welcome 102d5 ");
var name= prompt("Please enter your name");
var age= prompt("Please enter your age");

if(age>=19 && age <27){
    var major= prompt("Please enter your major");
    var text =name +" with major "+ major;
}
else if(age>=27){
    var job= prompt("Please enter your job");
    var text =name +" with job "+ job;
}
else{
    var school= prompt("Please enter your school");
    var text =name +" from school "+ school;
}

return text;

}

var text=first();
document.write("<h3>" +"hello "+ text+"</h3>");