import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import Avatar from '@mui/material/Avatar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUserData } from '../redux/authSlice'
import { useEffect, useState } from 'react'
import { getProcessApi } from '../apis/index.js'

function DefaultLayout() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const accessState = localStorage.getItem('accessToken')

    useEffect(() => {
        getProcessApi({ accessToken: localStorage.getItem('accessToken') })
            .then(data => setData(data))
    }, [accessState])

    return (
        <>
            <Navbar expand="lg" className="" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }} fixed='top'>
                <Container fluid>
                    <Navbar.Brand style={{ cursor: 'pointer' }} href='/'>EZ2Learn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link style={{ margin: '0 10px' }} href='/'>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate('/courses')}>Courses</Nav.Link>
                            <Nav.Link style={{ margin: '0 10px' }} onClick={() => navigate('/game')}>Game</Nav.Link>
                            {
                                localStorage.getItem('accessToken')
                                &&
                                <NavDropdown title='My Courses' id="navbarScrollingDropdown">
                                    {
                                        data?.IdCourses &&
                                        data?.IdCourses.map((item, index) => {
                                            return (
                                                <NavDropdown.Item key={index} onClick={() => navigate(`/learning/${item._id}`)}>
                                                    {index+1}. {item.name} - {item.author}
                                                </NavDropdown.Item>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    {
                        localStorage.getItem('name') ?
                            <>
                                <Avatar src="/broken-image.jpg" sx={{ marginRight: '10px' }} />
                                <NavDropdown title={`Hi, ${localStorage.getItem('name')}`} id="navbarScrollingDropdown" drop='start'>
                                    <NavDropdown.Item onClick={() => navigate('/user/infor')}>
                                        Information
                                    </NavDropdown.Item>
                                    {
                                        localStorage.getItem('role') === 'admin' &&
                                        <NavDropdown.Item onClick={() => navigate('/coursesmanage')}>
                                            Management
                                        </NavDropdown.Item>
                                    }
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href='/' onClick={() => {
                                        localStorage.clear()
                                        dispatch(deleteUserData())
                                    }}>
                                        Sign Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                            :
                            <>
                                <Button variant="success" href='/sign-up' style={{ marginRight: '10px' }}>Sign Up</Button>
                                <Button variant="danger" href='/sign-in'>Sign In</Button>
                            </>

                    }
                </Container>
            </Navbar>
            <Outlet />
            <Box pb={10} pt={10} sx={{ background: 'linear-gradient(to right, #396afc, #2948ff)', color: '#ffffcc' }}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Typography variant='h3' component='h1' pb={4} sx={{ fontWeight: 'bold' }}>
                                EZ2Learn
                            </Typography>
                            <Box>
                                <FacebookIcon fontSize='large' sx={{ marginRight: '30px' }} />
                                <InstagramIcon fontSize='large' />
                                <XIcon fontSize='large' sx={{ marginLeft: '30px' }} />
                            </Box>
                        </Col>
                        <Col xs={6} md={8}>
                            <Typography variant='h3' component='h1' pb={4} sx={{ fontWeight: 'bold' }}>
                                Service
                            </Typography>
                            <Row>
                                <Col md={4}>
                                    <Typography>
                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Contact</span> <br />
                                        Email: <br />
                                        minhtruongle0312@gmail.com <br />
                                        Telephone: <br />
                                        0916691618
                                    </Typography>
                                </Col>
                                <Col md={4}>
                                    <Typography>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    </Typography>
                                </Col>
                                <Col md={4}>
                                    <Typography>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    </Typography>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </>
    )
}

export default DefaultLayout
