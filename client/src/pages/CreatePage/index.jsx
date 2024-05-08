import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Box from '@mui/material/Box'
import { createCourseApi } from '../../apis/'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function CreatePage() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [lessonName, setLessonName] = useState('')
    const [video, setVideo] = useState('')
    const [lesson, setLesson] = useState([{ lessonName: '', video: '' }])
    const navigate = useNavigate()

    const payload = {
        name,
        author,
        topic,
        description,
        img,
        lesson,
        accessToken: localStorage['accessToken']
    }

    const handleCreate = async () => {
        const result = await createCourseApi(payload)
        if (result) {
            alert('Created Success!')
            navigate('/coursesmanage')
        }
    }

    const handleAddLesson = () => {
        setLesson([...lesson, { lessonName, video }])
    }

    const handleRemoveLesson = (index) => {
        const list = [...lesson]
        list.splice(index, 1)
        setLesson(list)
    }

    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Container style={{ padding: '100px 0' }}>
                <Link to='/coursesmanage'><p>Go Back &gt;&gt;</p></Link>
                <h1>Create Course</h1>
                <Form onClick={(event) => event.preventDefault()}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" required onChange={(e) => { setName(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setAuthor(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setTopic(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => { setDescription(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => { setImg(e.target.value) }} />
                        <img src={img} alt="Course image" style={{ width: '200px', height: '100px', marginTop: '10px', objectFit: 'cover' }} />
                    </Form.Group>

                    <p style={{ fontWeight: 'bold', fontSize: '25px' }}>Lesson</p>
                    {
                        lesson.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Lesson&apos;s name</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={(e) => { setLessonName(item.lessonName = e.target.value) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Video</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={(e) => { setVideo(item.video = e.target.value) }} />
                                    </Form.Group>
                                </div>
                            )
                        }
                        )
                    }
                    <div style={{ display: 'flex', color: 'red', fontWeight: 'bold' }}>
                        <p onClick={handleAddLesson} style={{ marginRight: '20px', cursor: 'pointer' }}>Add lesson +</p>
                        <p onClick={handleRemoveLesson} style={{ cursor: 'pointer' }}>Remove lesson -</p>
                    </div>
                    <Button variant="success" type="button" onClick={handleCreate}>
                        Create
                    </Button>
                </Form>
            </Container>
        </Box>
    )
}


export default CreatePage