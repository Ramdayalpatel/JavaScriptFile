var website={
    name :"Helloworld.com",
    getName:function(){
        return this.name;
    }
}
console.log(website.name);
var unbound=website.getName.toString;
console.log(unbound.toString);
var bound=unbound.bind(website.toString);
console.log(bound.toString);