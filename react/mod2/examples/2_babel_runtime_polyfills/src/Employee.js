import Person from 'Person';

export default class Employee extends Person{
  constructor(options){
    super(options);
    this.name = 'Employee' + options.id;
  }
  work(){
    console.log(`${this.name} working!`);
  }
}
