
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Box from '@mui/material/Box'
import { fetchCourseByIdApi } from '../../apis/'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateCourseApi } from '../../apis/index.js'
import { deleteCourseApi } from '../../apis/index.js'
import { useNavigate, Link } from 'react-router-dom'

function EditCoursePage() {

    // const [data, setData] = useState({ name: '', author: '', description: '', img: '', lesson: [{ lessonName: '', video: '' }] })
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const { CourseId } = useParams()
    const [lessonName, setLessonName] = useState('')
    const [video, setVideo] = useState('')
    const [lesson, setLesson] = useState([])

    const navigate = useNavigate()

    const payload = {
        accessToken: localStorage.getItem('accessToken'),
        name,
        author,
        description,
        img,
        lesson,
        updatedAt: Date.now()
    }

    useEffect(() => {
        fetchCourseByIdApi(CourseId).then(data => {
            setName(data.name)
            setAuthor(data.author)
            setTopic(data.topic)
            setDescription(data.description)
            setImg(data.img)
            setLesson(data.lesson)
        })
    }, [])

    const handleAddLesson = () => {
        setLesson([...lesson, { lessonName, video }])
    }

    const handleRemoveLesson = (index) => {
        const list = [...lesson]
        list.splice(index, 1)
        setLesson(list)
    }

    const handleUpdate = async () => {
        const update = await updateCourseApi(CourseId, payload)
        if (update) {
            alert('Updated Success!')
            navigate('/coursesmanage')
        }
        else {
            alert('Something went wrong')
        }
    }

    const handleDelete = async () => {
        if (confirm('Delete this course?')) {
            const del = await deleteCourseApi(CourseId)
            if (del) {
                alert('Success!')
                navigate('/coursesmanage')
            }
            else {
                alert('Something went wrong')
            }
        }
    }

    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Container style={{ padding: '100px 0' }}>
                <Link to='/coursesmanage'><p>Go Back &gt;&gt;</p></Link>
                <h1>Edit Course</h1>
                <Form onClick={(event) => event.preventDefault()}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={author} onChange={e => setAuthor(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={topic} onChange={e => setTopic(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={description} onChange={e => setDescription(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={img} onChange={e => setImg(e.target.value)} />
                    </Form.Group>

                    <p style={{ fontWeight: 'bold', fontSize: '25px' }}>Lesson</p>
                    {
                        lesson.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Lesson&apos;s name ({index + 1})</Form.Label>
                                        <Form.Control type="text" placeholder="" defaultValue={item.lessonName} onChange={(e) => { setLessonName(item.lessonName = e.target.value) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Video</Form.Label>
                                        <Form.Control type="text" placeholder="" defaultValue={item.video} onChange={(e) => { setVideo(item.video = e.target.value) }} />
                                    </Form.Group>
                                </div>
                            )
                        }
                        )
                    }
                    <div style={{ display: 'flex', color: 'red', fontWeight: 'bold' }}>
                        <p onClick={handleAddLesson} style={{ marginRight: '20px' }}>Add +</p>
                        <p onClick={handleRemoveLesson}>Remove -</p>
                    </div>

                    <Button variant="success" type="button" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button variant="danger" type="button" style={{ marginLeft: '10px' }} onClick={handleDelete}>
                        Delete
                    </Button>
                </Form>
            </Container>
        </Box>
    )
}

export default EditCoursePage