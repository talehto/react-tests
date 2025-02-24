export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
}

export type TaskCategory = 'To Do' | 'In Progress' | 'Done';
