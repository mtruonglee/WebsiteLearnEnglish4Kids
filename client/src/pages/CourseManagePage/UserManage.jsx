import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import { getAllUserApi } from '../../apis/index.js'

function UserManage() {
    const [data, setData] = useState([])

    useEffect(() => {
        getAllUserApi({ accessToken: localStorage.getItem('accessToken') })
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <Container>
            <div style={{ display: 'flex', paddingTop: '50px', justifyContent: 'space-between' }}>
                <h2 style={{ fontWeight: 'bold' }}>Users Management</h2>
            </div>
            <Row style={{ height: 'auto', maxHeight: '500px', overflow: 'auto' }}>
                {
                    data.map((item, index) => {
                        return (
                            <Col md={12} key={index}>
                                <Card body>
                                    No. {index + 1} <br />
                                    Name: {item.name} <br />
                                    Email: {item.email} <br />
                                    Created At: {item.createdAt}
                                </Card>
                            </Col>
                        )
                    })

                }
            </Row>
        </Container>
    )
}

export default UserManage