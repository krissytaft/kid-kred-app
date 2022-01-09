import { User } from "../util/common"

export interface LoginServiceApi {
    signInUser: (username: string, password: string) => Promise<{token: string, user: User}>
    verifyToken: (token: string) => Promise<{token: string, user: User}>
}

export interface LoginServiceApiFactory {
    (): LoginServiceApi;
}
export const LoginServiceApi: LoginServiceApiFactory = (): LoginServiceApi => {
    const baseUrl = 'http://localhost:4000'
    return {
        signInUser: async (username: string, password: string): Promise<{token: string, user: User}> => {
            const response = await fetch(`${baseUrl}/users/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error signing in the user')
            }
            
        },
        verifyToken: async (token: string): Promise<{token: string, user: User}> => {
            const response = await fetch(`${baseUrl}/verifyToken?token=${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid token')
            }
        }
    }
}