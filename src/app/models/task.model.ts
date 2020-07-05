export default interface Task {
  id?: number;
  title: string;
  description: string;
  status: number;
  statusName?: string;
  userId?: number;
  user?:string;
}
