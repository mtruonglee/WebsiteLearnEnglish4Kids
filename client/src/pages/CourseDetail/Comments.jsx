import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import { createCommentApi, getCommentApi, deleteCommentApi } from '../../apis/index.js'
import { useParams } from 'react-router-dom'

function Comments() {
    const [content, setContent] = useState()
    const [data, setData] = useState({})
    const [update, setUpdate] = useState(0)

    const { CourseId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCommentApi(CourseId).then(data => setData(data))
    }, [update])

    const payload = {
        CourseId,
        content,
        accessToken: localStorage.getItem('accessToken')
    }

    const handlePost = async () => {
        if (localStorage.getItem('accessToken')) {
            await createCommentApi(payload)
            document.getElementById('outlined-basic').value = ''
            if (update === 0) setUpdate(1)
            else setUpdate(0)
        }
        else navigate('/sign-in')
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handlePost()
        }
    }

    const handleDelete = async (id) => {
        if (confirm('Delete this comment?')) {
            const del = await deleteCommentApi(id, payload)
            if (del) {
                alert('Success!')
                if (update === 0) setUpdate(1)
                else setUpdate(0)
            }
            else {
                alert('Something went wrong')
            }
        }
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextField id="outlined-basic" label="Comment" variant="outlined" sx={{ width: '90%' }} onChange={(e) => setContent(e.target.value)} onKeyDown={handleKeyPress}/>
                <Button variant="contained" sx={{ width: '5%' }} onClick={handlePost}>Post</Button>
            </Box>
            {
                data?.comments?.map((item, index) => {
                    return (
                        <Box sx={{ marginTop: '20px', backgroundColor: 'white', padding: '10px' }} key={index}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src="/broken-image.jpg" sx={{ marginRight: '10px' }} />
                                <Typography variant="h6">
                                    {item.name}
                                </Typography>
                            </Box>
                            <Typography variant="h7" sx={{ marginLeft: '50px' }}>
                                {item.content}
                            </Typography>
                            {
                                localStorage.getItem('role') === 'admin' &&
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <DeleteIcon id='deleteIcon' sx={{ cursor: 'pointer' }} onClick={() => handleDelete(item._id)}/>
                                </Box>
                            }
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Comments