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
                        <Col xs={12} md={8}>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Typography variant='h3' component='h1' pl={5} pb={4} sx={{ fontWeight: 'bold' }}>
                                        Why are us?
                                    </Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Typography variant='h5' component='h1' pl={5} pb={4}>
                                    EZ2Learn is a top choice for children&apos;s language education due to its engaging video content covering a wide range of topics. With interactive features and vibrant visuals, the platform offers an immersive learning experience, keeping children focused and motivated. It fosters a supportive environment where children can learn at their own pace and conveniently access the platform anytime, anywhere. Overall, EZ2Learn provides a valuable resource for effective language learning and growth in children.
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
                        <Col xs={12} md={8}>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Typography variant='h3' component='h1' pl={5} pb={4} sx={{ fontWeight: 'bold' }}>
                                        English for children from 6 to 12
                                    </Typography>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Typography variant='h5' component='h1' pl={5} pb={4}>
                                    The process of learning English for children aged 6 to 12 is a significant developmental journey, providing them with the opportunity to explore a new language and develop crucial communication skills. At this age, children are developing cognitive abilities and are capable of quickly absorbing information, which makes learning English easier. Integrating creative activities and educational games into the English learning process can stimulate children&apos;s curiosity and interest. A variety of resources and learning methods allow children to approach English from different perspectives, from watching videos and listening to music to participating in group activities and practicing communication. Setting specific learning goals and measuring progress is important, and support and encouragement from family and teachers play a crucial role in fostering children&apos;s English learning journey.
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
