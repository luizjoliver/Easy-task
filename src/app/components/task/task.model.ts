export type TypeTask = {
  id:string;
  userId:string;
  summary:string;
  title:string;
  dueDate:string;
}


export type newAddTask = Omit<TypeTask,'id'|'userId'>
