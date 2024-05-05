import Typography from '@mui/material/Typography'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Box from '@mui/material/Box'

function Topic() {
    return (
        <>
            <Box pb={10} pt={10} sx={{ background: 'linear-gradient(to bottom right, #88d3ce, #6e45e2)' }}>
                <Container>
                    <Row>
                        <Col xs={4} md={4}>
                            <img src="https://i.pinimg.com/originals/98/42/28/984228ab0a3a15bf48642b7fb2b524b2.gif" alt="" />
                        </Col>
                        <Col xs={4} md={8}>
                            <Row>
                                <Col xs={4} md={12}>
                                    <Typography variant='h3' component='h1' pl={5} pb={4} sx={{ fontWeight: 'bold' }}>
                                        Why are us?
                                    </Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={12}>
                                    <Typography variant='h5' component='h1' pl={5} pb={4}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                                    </Typography>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Box>
            <Box pb={10} pt={10} sx={{ background: 'linear-gradient(to bottom right, #88d3ce, #6e45e2)' }}>
                <Container>
                    <Row>
                        <Col xs={4} md={8}>
                            <Row>
                                <Col xs={4} md={12}>
                                    <Typography variant='h3' component='h1' pl={5} pb={4} sx={{ fontWeight: 'bold' }}>
                                        English for children from 6 to 12
                                    </Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={12}>
                                    <Typography variant='h5' component='h1' pl={5} pb={4}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                                    </Typography>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4} md={4}>
                            <img src="https://clipart-library.com/images/qiBd4bai5.gif" alt="" style={{ width: '70%' }} />
                        </Col>
                    </Row>
                </Container>
            </Box>
        </>
    )
}

export default Topic
