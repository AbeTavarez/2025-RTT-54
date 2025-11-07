export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
 
export interface User {
  id: string;
  name: string;
}
 
export interface UserContextType {
  currentUser: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
}