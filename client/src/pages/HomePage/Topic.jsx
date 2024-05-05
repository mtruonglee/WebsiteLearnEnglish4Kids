import Typography from '@mui/material/Typography'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Box from '@mui/material/Box'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Topic() {
    return (
        <>
            <Box pb={10} pt={10} sx={{ background: 'linear-gradient(to bottom right, #88d3ce, #6e45e2)' }}>
                <Typography variant='h3' component='h1' pl={10} pb={4} sx={{ fontWeight: 'bold' }}>
                    Topic
                </Typography>
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <Card style={{ backgroundColor: '#add8e6' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/cute-animals-white_1308-35096.jpg" style={{ objectFit: 'cover', height: '300px' }}/>
                                <Card.Body style={{ backgroundColor: '#add8e6' }}>
                                    <Card.Title>Animal</Card.Title>
                                    <Card.Text >
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card content.
                                    </Card.Text>
                                    <Link to='/courses'><Button style={{ backgroundColor: '#CC3300', color: '#add8e6', border: '0px' }}>More</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card style={{ backgroundColor: '#add8e6' }}>
                                <Card.Img variant="top" src="https://en.pimg.jp/006/040/350/1/6040350.jpg" style={{ objectFit: 'cover', height: '300px' }}/>
                                <Card.Body style={{ backgroundColor: '#add8e6' }}>
                                    <Card.Title>Traffic</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card content.
                                    </Card.Text>
                                    <Link to='/courses'><Button style={{ backgroundColor: '#CC3300', color: '#add8e6', border: '0px' }}>More</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card style={{ backgroundColor: '#add8e6' }}>
                                <Card.Img variant="top" src="https://images.assetsdelivery.com/compings_v2/vitasunny/vitasunny1601/vitasunny160100362.jpg" style={{ objectFit: 'cover', height: '300px' }}/>
                                <Card.Body style={{ backgroundColor: '#add8e6' }}>
                                    <Card.Title>Color</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card content.
                                    </Card.Text>
                                    <Link to='/courses'><Button style={{ backgroundColor: '#CC3300', color: '#add8e6', border: '0px' }}>More</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card style={{ backgroundColor: '#add8e6' }}>
                                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/25/47/29/360_F_225472916_GxbKEE45AhLZvZh86nIcHSED2XDwXuCd.jpg" style={{ objectFit: 'cover', height: '300px' }}/>
                                <Card.Body style={{ backgroundColor: '#add8e6' }}>
                                    <Card.Title>ABC</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card content.
                                    </Card.Text>
                                    <Link to='/courses'><Button style={{ backgroundColor: '#CC3300', color: '#add8e6', border: '0px' }}>More</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </>
    )
}

export default Topic