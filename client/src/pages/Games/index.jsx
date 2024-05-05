import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ButtonBT from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { fetchWordApi, getWordByTopicApi, createUserScoreApi, updateUserScoreApi, getUserScoreApi } from '../../apis/index.js'
import { useState } from 'react'

function GamePage() {
    const [data, setData] = useState([])
    const [score, setScore] = useState(0)
    const [highestScore, setHighestScore] = useState([])
    const [fail, setFail] = useState(0)
    const [start, setStart] = useState(0)
    const [mode, setMode] = useState('All')

    const navigate = useNavigate()

    // if (fail >=3) document.getElementById('end').play()

    const userScore = {
        accessToken: localStorage.getItem('accessToken'),
        [mode]: score
    }

    const random = () => Math.floor(Math.random() * data.length)

    let a = random()

    const handleGetData = async () => {
        if (localStorage.getItem('accessToken')) {
            await createUserScoreApi(userScore)
            const highScore = await getUserScoreApi(userScore)
            setHighestScore(highScore)
            if (mode === 'All') {
                const result = await fetchWordApi()
                setData(result)
                setStart(1)
            }
            else {
                const result = await getWordByTopicApi({ topic: mode })
                setData(result)
                setStart(1)
            }
        }
        else navigate('/sign-in')
    }

    const handleScore = async () => {
        var value = await document.getElementById('outlined-basic').value
        if (value === data[a].word || value === data[a].word.toLowerCase()) {
            document.getElementById('correct').play()
            setScore(score => score += 10)
            document.getElementById('outlined-basic').value = ''
            document.getElementById('outlined-basic').focus()
        }
        else {
            setFail(fail => fail + 1)
            document.getElementById('wrong').play()
            document.getElementById('outlined-basic').value = ''
            document.getElementById('outlined-basic').focus()
        }

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleScore()
        }
    }

    const newGame = async () => {
        if (score > highestScore[0][mode]) {
            await updateUserScoreApi(userScore)
            await getUserScoreApi(userScore).then(data => setHighestScore(data))
        }
        setScore(0)
        setFail(0)
    }

    return (
        <>
            {start === 1 &&
                <Box sx={{ backgroundColor: '#FFF2E5', height: '700px', alignItems: 'center' }} pt={8}>
                    <p onClick={() => setStart(0)} style={{ fontWeight: 'bold', cursor: 'pointer' }}><HomeIcon /> Menu</p>
                    <audio src="/y2mate.com - Wii Music  Gaming Background Music HD.mp3" autoPlay loop></audio>
                    <audio src="/y2mate.com - Correct sound effect.mp3" id='correct'></audio>
                    <audio src="/y2mate.com - Incorrect sound effect.mp3" id='wrong'></audio>
                    <audio src="/y2mate.com - Fail Sound Effect.mp3" id='fail'></audio>
                    {
                        fail >= 3 ?
                            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Lose</h1>
                            :
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                <h1>High: {highestScore[0][mode]}</h1>
                                <h1>Score: {score} </h1>
                                <h1>Fail: {fail} </h1>
                            </div>
                    }
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '20px' }}>
                        {
                            data &&
                            <div style={{ textAlign: 'center' }}>
                                <h1>{data[a].meaning}</h1>
                                <div style={{ width: '200px', height: '200px', backgroundColor: 'white' }}><img style={{ width: '200px', height: '200px', objectFit: 'cover' }} src={data[a].img}></img></div>
                            </div>
                        }
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <TextField id="outlined-basic" label="Answer" variant="outlined" autoFocus sx={{ width: '50%' }} onKeyDown={handleKeyPress} />
                        <Button
                            variant="contained"
                            onClick={handleScore}
                        >
                            Submit
                        </Button>
                        {fail >= 3 && <Button variant="contained" onClick={newGame} sx={{ marginLeft: '10px', backgroundColor: 'red' }}>New Game</Button>}
                    </Box>
                </Box>
            }

            {start === 0 &&
                <Box sx={{ backgroundColor: '#FFF2E5', height: 'auto' }} pt={8}>
                    <Container style={{ width: '50%' }}>
                        <Row style={{ marginBottom: '20px' }}>
                            <Col md={12} style={{ textAlign: 'center' }}>
                                <h1>WordWordWord...</h1>
                                <img src="https://i.pinimg.com/originals/23/51/bc/2351bc65b2b5d75cef146b7edddf805b.gif" alt="catdance" style={{ marginBottom: '20px' }} />
                                <h3 >Choose topic: {mode}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('All')}>All</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Action')}>Action</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Animal')}>Animal</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Body')}>Body</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Color')}>Color</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('House')}>House</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Family')}>Family</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Feeling')}>Feeling</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Food')}>Food</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Fruit')}>Fruit</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Job')}>Job</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('School & School supplies')}>School & School supplies</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Shapes')}>Shapes</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Transport')}>Transport</ButtonBT>
                            </Col>
                            <Col md={6} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='warning' onClick={() => setMode('Weather')}>Weather</ButtonBT>
                            </Col>
                            <Col md={12} style={{ marginBottom: '20px' }}>
                                <ButtonBT style={{ width: '100%' }} variant='danger' onClick={handleGetData}>Let&apos;s gooooooo!</ButtonBT>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            }
        </>
    )
}

export default GamePage