import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Comments from './Comments.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCourseByIdApi } from '../../apis'
import { createProcessApi } from '../../apis'
import { useNavigate } from 'react-router-dom'

function CoursesPage() {

    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { CourseId } = useParams()

    useEffect(() => {
        fetchCourseByIdApi(CourseId)
            .then((data) => setData(data))

    }, [])

    const handleLearning = () => {
        if (localStorage.getItem('accessToken')) {
            navigate(`/learning/${data._id}`)
            createProcessApi(CourseId, { accessToken: localStorage.getItem('accessToken') })
        }
        else navigate('/sign-in')
    }

    return (
        <Box pt={10} pb={10} sx={{ backgroundColor: '#FFF2E5' }}>
            <Container>
                <Row>
                    <Col xs={12} md={8} style={{ borderRight: 'solid black 1px' }}>
                        <Typography variant='h3' component='h1' pb={1} sx={{ fontWeight: 'bold' }}>
                            {data.name}
                        </Typography>
                        <Typography variant='h5' component='h1'>
                            Are you looking for an exciting and educational experience for your child? Look no further! Our Kids English Course on the theme of animals is the perfect opportunity for children to embark on a journey of discovery and learning.
                        </Typography>
                        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold' }}>
                            Why Choose Our Course?
                        </Typography>
                        <Typography pl={3}>
                            1. Engaging Content: Our course is designed to captivate children interest in animals through interactive lessons, colorful visuals, and fun activities. From lions to dolphins, we cover a wide range of animals to keep young learners intrigued and excited.
                            <br />
                            2. Language Development: Through exploring the world of animals, children will naturally expand their English vocabulary and improve their language skills. Our curriculum includes a variety of language activities such as storytelling, role-playing, and vocabulary games tailored to the interests and learning styles of young learners.
                            <br />
                            3. Cultural Awareness: Beyond language skills, our course also introduces children to different cultures and habitats around the world. Through learning about animals, children will develop a deeper appreciation for biodiversity and the importance of conservation.
                            <br />
                            4. Interactive Learning Environment: We believe that children learn best when they are actively engaged in the learning process. That why our course incorporates hands-on activities, group discussions, and multimedia resources to create a dynamic and immersive learning experience.
                        </Typography>
                        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold' }}>
                            Course Highlights:
                        </Typography>
                        <Typography pl={3}>
                            1. Introduction to different animal species
                            <br />
                            2. Learning animal names and characteristics
                            <br />
                            3. Exploring animal habitats and behaviors
                            <br />
                            4. Fun games and activities to reinforce learning
                            <br />
                            5. Creative projects such as making animal masks or creating a mini-zoo
                            <br />
                            6. Field trips or virtual tours to local zoos or wildlife sanctuaries
                        </Typography>
                        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold' }}>
                            Conclusion:
                        </Typography>
                        <Typography pl={3}>
                            Our Kid English Course on the theme of animals offers a unique blend of education and entertainment, providing children with the opportunity to expand their English skills while discovering the fascinating world of animals. Enroll your child today and watch them embark on an unforgettable learning adventure!
                        </Typography>
                    </Col>
                    <Col xs={12} md={4}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image src={data.img} rounded style={{ width: '100%', height: '400px', border: 'solid black 2px' }} />
                        </div>
                        <Typography variant='h5'>
                            Author: {data.author}
                            <br />
                            {data.lesson && <span>Lessons: {data.lesson.length}</span>}
                            <br />
                            Date: {data.createdAt}
                        </Typography>
                        <Button onClick={handleLearning} style={{ backgroundColor: '#AB0033', border: '0px' }}>Start learing</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: '60px' }}>
                    <h2>Comments</h2>
                    <Col xs={12} md={8} style={{ marginTop: '20px' }}>
                        <Comments />
                    </Col>
                </Row>
            </Container>
        </Box >
    )
}
export default CoursesPage