import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Box from '@mui/material/Box'
import { getUserApi } from '../../apis/'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function InforPage() {

    // const [data, setData] = useState({ name: '', author: '', description: '', img: '', lesson: [{ lessonName: '', video: '' }] })
    const [data, setData] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getUserApi({ accessToken: localStorage.getItem('accessToken') })
            .then(data => setData(data))
    }, [])

    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Container style={{ padding: '100px 0' }}>
                <h1>Information</h1>
                <Form onClick={(event) => event.preventDefault()}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={data.email} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={data.name} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" defaultValue={data.tel} readOnly />
                    </Form.Group>

                    <Button variant="success" type="button" onClick={() => navigate('/user/editinfor')}>
                        Edit
                    </Button>
                </Form>
            </Container>
        </Box>
    )
}

export default InforPage
