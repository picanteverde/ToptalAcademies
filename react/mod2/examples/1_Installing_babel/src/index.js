let answer = 42;

export default function(question){
  return ()=>{
    return question + '\n' + answer;
  };
}
