import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Box from '@mui/material/Box'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCourseApi } from '../../apis'

function CoursesPage() {

    const [data, setData] = useState([])
    const [state, setState] = useState('')
    useEffect(() => {
        fetchCourseApi().then(data => {
            setData(data)
        })
    }, [])

    return (
        <Box sx={{ backgroundColor: '#FFF2E5', paddingBottom: '50px', paddingTop: '100px' }}>
            <Container>
                <Row>
                    <Col md={3}>
                        <h2 style={{ fontWeight: 'bold' }}>Topics</h2>
                        <ListGroup>
                            <ListGroup.Item key={0} onClick={() => setState('')} active={state === ''}>All</ListGroup.Item>
                            <ListGroup.Item key={1} onClick={() => setState('Action')} active={state === 'Action'}>Action</ListGroup.Item>
                            <ListGroup.Item key={2} onClick={() => setState('Animals')} active={state === 'Animals'}>Animals</ListGroup.Item>
                            <ListGroup.Item key={3} onClick={() => setState('Body')} active={state === 'Body'}>Body</ListGroup.Item>
                            <ListGroup.Item key={4} onClick={() => setState('Color')} active={state === 'Color'}>Color</ListGroup.Item>
                            <ListGroup.Item key={5} onClick={() => setState('House')} active={state === 'House'}>House</ListGroup.Item>
                            <ListGroup.Item key={6} onClick={() => setState('Family')} active={state === 'Family'}>Family</ListGroup.Item>
                            <ListGroup.Item key={7} onClick={() => setState('Feeling')} active={state === 'Feeling'}>Feeling</ListGroup.Item>
                            <ListGroup.Item key={8} onClick={() => setState('Food')} active={state === 'Food'}>Food</ListGroup.Item>
                            <ListGroup.Item key={9} onClick={() => setState('Fruit')} active={state === 'Fruit'}>Fruit</ListGroup.Item>
                            <ListGroup.Item key={10} onClick={() => setState('Job')} active={state === 'Job'}>Job</ListGroup.Item>
                            <ListGroup.Item key={11} onClick={() => setState('School & School supplies')} active={state === 'School & School supplies'}>School & School supplies</ListGroup.Item>
                            <ListGroup.Item key={12} onClick={() => setState('Shapes')} active={state === 'Shapes'}>Shapes</ListGroup.Item>
                            <ListGroup.Item key={13} onClick={() => setState('Transport')} active={state === 'Transport'}>Transport</ListGroup.Item>
                            <ListGroup.Item key={14} onClick={() => setState('Weather')} active={state === 'Weather'}>Weather</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={9} style={{ height: '700px', overflow: 'auto' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Courses</h2>
                        <Row>
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            {state === ''
                                                ?
                                                <Col xs={6} md={3} key={index} style={{ paddingBottom: '20px' }}>
                                                    <Card style={{ backgroundColor: '#add8e6' }}>
                                                        <Card.Img variant="top" src={item.img} style={{ height: '200px', objectFit: 'cover' }} />
                                                        <Card.Body>
                                                            <Card.Title style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</Card.Title>
                                                            <Card.Text style={{ display: '-webkit-box', WebkitLineClamp: '3', overflow: 'hidden' }}>
                                                                {item.description}
                                                            </Card.Text>
                                                            <Link to={`/courses/${item._id}`}><Button style={{ backgroundColor: '#CC3300', color: '#ffffcc', border: '0px' }}>Details</Button></Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                :
                                                item.topic === state &&
                                                <Col xs={6} md={3} key={index} style={{ paddingBottom: '20px' }}>
                                                    <Card style={{ backgroundColor: '#add8e6' }}>
                                                        <Card.Img variant="top" src={item.img} style={{ height: '200px', objectFit: 'cover' }} />
                                                        <Card.Body>
                                                            <Card.Title>{item.name}</Card.Title>
                                                            <Card.Text>
                                                                {item.description}
                                                            </Card.Text>
                                                            <Link to={`/courses/${item._id}`}><Button style={{ backgroundColor: '#CC3300', color: '#ffffcc', border: '0px' }}>Details</Button></Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            }
                                        </>
                                    )
                                }
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

export default CoursesPage
