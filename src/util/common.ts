import { json } from "stream/consumers";

export interface User {
    userId: string;
    name: string;
    username: string;
    userType: UserType;
}

export enum UserType {
    Student = 'Student',
    Teacher = 'Teacher',
    Admin = 'Admin'
}

// Gets the user data from session storage
export function getUser(): User | undefined {
    const userString = sessionStorage.getItem('user');
    if (userString) return JSON.parse(userString);
    else return;
}

// gets the token from session storage
export function getToken(): string | undefined {
    const token = sessionStorage.getItem('token');
    return token || undefined;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token: string, user: User) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}