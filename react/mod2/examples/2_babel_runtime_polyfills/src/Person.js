export default class Person {
  constructor(options){
    this.name = 'Person' + options.id;
  }
  sleep(){
    console.log(`${this.name} is sleeping!`);
  }
}
