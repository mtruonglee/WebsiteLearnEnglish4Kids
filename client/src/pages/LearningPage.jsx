import Container from 'react-bootstrap/Container'
import Box from '@mui/material/Box'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCourseByIdApi } from '../apis/index.js'


function LearningPage() {
    const [data, setData] = useState([])
    const [video, setVideo] = useState('')
    const [flag, setFlag] = useState(0)
    const { CourseId } = useParams()

    useEffect(() => {
        fetchCourseByIdApi(CourseId).then(data => {
            setData(data)
            setVideo(data.lesson[0].video)
        })
    }, [CourseId])

    return (
        <Box pt={12} pb={5} sx={{ backgroundColor: '#FFF2E5' }}>
            <Container fluid>
                <Row>
                    <Col xs={12} md={8}>
                        <iframe
                            width="100%"
                            height="438"
                            src={`${video}`}
                            title='hehehehe'
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ borderRadius: '10px' }}
                        >
                        </iframe>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3>List</h3>
                        <ListGroup variant="flush" style={{ borderRadius: '10px' }}>
                            {data.length != 0 &&
                                data.lesson.map((item, index) => {
                                    return (
                                        <ListGroup.Item
                                            active={flag === index}
                                            key={index}
                                            onClick={() => {
                                                setVideo(item.video)
                                                setFlag(index)
                                            }}>
                                            {index + 1}. {item.lessonName}
                                        </ListGroup.Item>
                                    )
                                })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

export default LearningPage
