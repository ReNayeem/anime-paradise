"use client"

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../../public/nice-a.png';
import Image from 'next/image';

function UncontrolledExample() {
    return (
        <Carousel className='container'>
            <Carousel.Item>
                <div className='d-flex'>
                    <Image src={ExampleCarouselImage} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem minima quidem illum asperiores ducimus ipsa voluptatem iure beatae exercitationem, ex repellat accusantium fuga? Architecto voluptatibus molestiae maxime doloremque voluptatum beatae laboriosam laudantium minus vero! Laboriosam, cumque. Facere blanditiis quo nesciunt expedita, deserunt facilis ea deleniti, vel nihil, totam quas.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={ExampleCarouselImage} alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={ExampleCarouselImage} alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
