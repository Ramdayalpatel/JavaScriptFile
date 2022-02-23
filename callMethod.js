function Emp(id,name){
    this.id=id;
    this.name=name;
}
function ParmanetEmp(id,name){
Emp.call(this,id,name);
}
 function TempEmp(id,name){
     Emp.call(this,id,name);
 }

 pp=new ParmanetEmp(100,"Ramdayal Patel");
 tmp=new TempEmp(200,"Ajya Singh");
 console.log(`Id_Number = ${pp.id} Name = ${pp.name} `);
 console.log(`Id_Number = ${tmp.id} Name = ${tmp.name} `);