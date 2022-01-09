import { setuid } from 'process';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginServiceApi } from '../services/loginService'
import { setUserSession } from '../util/common';


export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleClickLogin = async () => {
        setError(null);
        setLoading(true);
        const loginService = LoginServiceApi();
        try {
            console.log(`Trying to log in ${username} with ${password}`)
            const signInResult = await loginService.signInUser(username, password);
            setUserSession(signInResult.token, signInResult.user)
        } catch (err) {
            setError('Something went wrong. Please try again later')
        }
        setLoading(false)
        navigate('/dashboard')
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleClickLogin} disabled={loading} /><br />
        </div>
    )

}