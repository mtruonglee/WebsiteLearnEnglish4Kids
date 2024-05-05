import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { saveUserData } from '../../redux/authSlice.js'
import { loginApi } from '../../apis/index.js'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const payload = {
        email,
        password
    }
    const handleLogin = async () => {
        const data = await loginApi(payload)
        if (data) {
            dispatch(saveUserData(data))
            navigate('/')
        }
    }

    return (
        <Box pt={10} pb={5}>
            <Box sx={{ textAlign: 'center' }}>
                <h2>EZ2Learn</h2>
                <h1>Sign in</h1>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50%' },
                    textAlign: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic-1" label="Email" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic-2" label="Password" variant="outlined" type='password' onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={handleLogin}>Sign In</Button>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <p>You don&apos;t have account? <a href="/sign-up">Sign up</a>.</p>
            </Box>
        </Box>
    )
}

export default SignIn