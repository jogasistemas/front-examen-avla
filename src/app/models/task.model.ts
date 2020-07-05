export default interface Task {
  id?: number;
  title: string;
  description: string;
  status: string;
  userId?: number;
  user?:string;
}
