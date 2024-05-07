import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { createUserApi } from '../../apis/index.js'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const payload = {
        email,
        password,
        name,
        tel
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleCreateUser = async () => {
        if (!isValidEmail)
            alert('Invalid Email')
        else if (password != rePassword)
            alert('Password and Retype Password do not match')
        else
            await createUserApi(payload)
    }

    return (
        <Box pt={10} pb={5}>
            <Box sx={{ textAlign: 'center' }}>
                <h2>EZ2Learn</h2>
                <h1>Sign up</h1>
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
                <TextField type="email" id="outlined-basic-1" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required />
                <TextField id="outlined-basic-2" label="Password" variant="outlined" type='password' onChange={(e) => setPassword(e.target.value)} required />
                <TextField id="outlined-basic-2" label="Retype Password" variant="outlined" type='password' onChange={(e) => setRePassword(e.target.value)} required />
                <TextField id="outlined-basic-3" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} required />
                <TextField id="outlined-basic-4" label="Tel" variant="outlined" onChange={(e) => setTel(e.target.value)} required />
                <Button variant="contained" onClick={handleCreateUser}>Sign Up</Button>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <p>You already have an account? <a href="/sign-in">Sign in</a>.</p>
            </Box>
        </Box>
    )
}

export default SignUp