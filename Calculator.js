let resutl=0;;
let input=5;
function calculator(num1,num2,input){
    switch(input){
   case 1 :
       console.log("Add");
       resutl=num1+num2;
       break;
    case 2:
        console.log("subt");
        resutl=  num1>num2 ?num1-num2:num2-num1;
        break;
    case 3:
         console.log("Multiplication");
         resutl=num1*num2;
         break;
    case  4:  
    console.log("Division");
    resutl=num1!=0 &&num2!=0 ? num1/num2:"Not Possible";    
    break;
    case 5:
        console.log("Reminadr");
        resutl=num1%num2;
        break;
    default :
    console.log("Invalid Operations");
    }
    return resutl;
}
console.log(calculator(20,10,input));