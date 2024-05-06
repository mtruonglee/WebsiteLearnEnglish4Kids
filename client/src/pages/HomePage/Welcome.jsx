import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Welcome() {
    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Typography variant='h3' component='h1' pl={10} pt={10} pb={1} sx={{ fontWeight: 'bold' }}>
                Welcome to EZ 2 Learn
            </Typography>
            <Typography variant='h5' component='h1' pl={10} pb={10} pr={10} sx={{ }}>
            EZ2Learn is an online platform designed for children to learn English through engaging video content covering various common topics. With colorful visuals and interactive features, it provides an immersive learning experience. The curated collection of videos includes popular themes like animals, nature, everyday activities, and storytelling. Children can expand their vocabulary and comprehension skills while enjoying entertaining narratives. EZ2Learn offers a supportive environment for young learners to thrive in their language learning journey.
            </Typography>
        </Box>
    )
}

export default Welcome