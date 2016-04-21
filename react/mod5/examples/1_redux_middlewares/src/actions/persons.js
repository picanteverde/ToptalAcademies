export const PERSONS_ADD = 'PERSONS_ADD';
export const PERSONS_EDIT = 'PERSONS_EDIT';
export const PERSONS_DEL = 'PERSONS_DEL';


export function add(person){
  
  return {
    type: PERSONS_ADD,
    person
  };
}

export function edit(idx, person){
  return {
    type: PERSONS_EDIT,
    idx,
    person
  };
}

export function del(idx){
  return {
    type: PERSONS_DEL,
    idx
  };
}
