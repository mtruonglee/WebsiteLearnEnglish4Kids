import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCourseApi } from '../../apis'


function CourseManage() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchCourseApi().then(data => {
            setData(data)
        })
    }, [])

    return (
        <Container>
            <div style={{ display: 'flex', paddingTop: '50px', justifyContent: 'space-between' }}>
                <h2 style={{ fontWeight: 'bold' }}>Courses Management</h2>
                <Link to={'/coursesmanage/create'}><p>Create</p></Link>
            </div>
            <Row style={{ height: 'auto', maxHeight: '500px', overflow: 'auto' }}>
                {
                    data.map((item, index) => {
                        return (
                            <Col xs={6} md={3} key={index} style={{ paddingBottom: '20px' }}>
                                <Card style={{ backgroundColor: '#add8e6' }}>
                                    <Card.Img variant="top" src={item.img} style={{ height: '150px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Link to={`/coursesmanage/edit/${item._id}`}><Button style={{ backgroundColor: '#CC3300', color: '#ffffcc', border: '0px' }}>Edit</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                    )
                }
            </Row>
        </Container>
    )
}

export default CourseManage