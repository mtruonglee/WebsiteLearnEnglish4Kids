import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Box from '@mui/material/Box'
import CourseManage from './CourseManage.jsx'
import UserManage from './UserManage.jsx'
import { useState } from 'react'

function CourseManagePage() {
    const [flag, setFlag] = useState(1)

    return (
        <Box pt={8} pb={5} sx={{ backgroundColor: '#FFF2E5' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <ListGroup style={{ paddingTop: '50px' }}>
                            <ListGroup.Item onClick={() => setFlag(1)} active={flag === 1}>Course</ListGroup.Item>
                            <ListGroup.Item onClick={() => setFlag(2)} active={flag === 2}>User</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={8}>
                        {flag === 1 && <CourseManage />}
                        {flag === 2 && <UserManage />}
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

export default CourseManagePage