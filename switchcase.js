import lib from '*./library';
import i from 'console-read-write';


let text;
let input= Window.prompt("Enter Your Number");
switch(input){
    case 1:
        text +="A is First divison";
        break;
    case 2:
        text +="Pass By Second Divsion";
        break;
    case 3:
        text +="Pass By third Division";
        break;
        default:
            text +="Sorry Next Time ";
}