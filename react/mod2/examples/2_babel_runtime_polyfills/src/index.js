import Employee from './Employee';
import 'babel-polyfill';
let employees = Array.from(new Array(10), (x,i) => new Employee({id: i}));
let task = 'sleep';
employees.forEach(e=>{
  if(task === 'sleep'){
    e.sleep();
    task = 'work';
  }else{
    e.work();
    task = 'sleep';
  }
});
