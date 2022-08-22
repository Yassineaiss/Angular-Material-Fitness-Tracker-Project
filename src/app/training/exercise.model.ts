export interface Exercise {
  id: string  | null;
  name: string  | null;
  duration: number  | null;
  calories: number  | null;
  date?: Date  | null;
  state?: 'completed' | 'cancelled' | null;
}
