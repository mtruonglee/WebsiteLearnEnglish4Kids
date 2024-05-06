import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src="https://th.bing.com/th/id/OIG4.YVQ3YNT1GNrxEiDLxLv4?pid=ImgGn" alt="" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
                <Carousel.Caption style={{ color: '#ffffcc', WebkitTextStroke: '0.5px black' }}>
                    <h3>Fun English Adventures: Engage, Learn, and Grow with Our Kid-Friendly Platform</h3>
                    <p>Spark your child&apos;s love for English with our vibrant learning environment! Explore interactive games, captivating stories, and creative activities that make language learning a delightful journey.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://th.bing.com/th/id/OIG4.pFE1uqroHtxQpeNMzx6q?pid=ImgGn" alt="" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
                <Carousel.Caption style={{ color: '#ffffcc', WebkitTextStroke: '0.5px black' }}>
                    <h3>Convenience and Flexibility</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../../Untitled.png" alt="" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
                <Carousel.Caption style={{ color: '#ffffcc', WebkitTextStroke: '0.5px black' }}>
                    <h3>Time and Cost Savings</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel
