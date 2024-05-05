import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Welcome() {
    return (
        <Box sx={{ backgroundColor: '#FFF2E5' }}>
            <Typography variant='h3' component='h1' pl={10} pt={10} pb={1} sx={{ fontWeight: 'bold' }}>
                Welcome to EZ 2 Learn
            </Typography>
            <Typography variant='h5' component='h1' pl={10} pb={10} pr={10} sx={{ }}>
                EZ 2 Learn is brought to you by the British Council, the world English teaching experts.
                We have lots of free online games, songs, stories and activities for children.
                For parents, we have articles on supporting children in learning English,
                videos on using English at home and information about English courses for your child.
            </Typography>
        </Box>
    )
}

export default Welcome