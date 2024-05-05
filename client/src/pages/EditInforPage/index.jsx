
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import { getUserApi } from '../../apis/'
import { updateUserApi } from '../../apis/index.js'
import { useNavigate, Link } from 'react-router-dom'

function EditInforPage() {

    // const [data, setData] = useState({ name: '', author: '', description: '', img: '', lesson: [{ lessonName: '', video: '' }] })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const navigate = useNavigate()

    const payload = {
        accessToken: localStorage.getItem('accessToken'),
        name,
        tel,
        updatedAt: Date.now()
    }

    useEffect(() => {
        getUserApi({ accessToken: localStorage.getItem('accessToken') }).then(data => {
            setName(data.name)
            setEmail(data.email)
            setTel(data.tel)
        })
    }, [])

    const handleUpdate = async () => {
        const update = await updateUserApi(payload)
        if (update) {
            alert('Updated Success!')
            navigate('/user/infor')
        }
        else {
            alert('Something went wrong')
        }
    }

    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Container style={{ padding: '100px 0' }}>
                <Link to='/user/infor'><p>Go back &gt;&gt;</p></Link>
                <h1>Edit Information</h1>
                <Form onClick={(event) => event.preventDefault()}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" defaultValue={email} readOnly />
                        <p style={{ color: 'red' }}>*Email can not change</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="text" defaultValue={tel} onChange={e => setTel(e.target.value)} />
                    </Form.Group>

                    <Button variant="success" type="button" onClick={handleUpdate}>
                        Update
                    </Button>
                </Form>
            </Container>
        </Box>
    )
}

export default EditInforPage