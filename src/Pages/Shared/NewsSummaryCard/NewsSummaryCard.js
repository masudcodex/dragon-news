import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {_id, title, total_view, rating, author, image_url, details } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle src={author.img} style={{height: '55px'}}></Image>
                        <div className='ms-2 p-0'>
                            <p className='mb-1'>{author?.name}</p>
                            <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt className='ms-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='py-2'>
                        {details.length > 200 ? 
                        <span>{details.slice(0, 250) + '...' } <Link to={`/news/${_id}`}>Read More</Link></span> 
                        :
                        <span>{details}</span> 
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaEye className='me-2'></FaEye>
                            <span>{total_view}</span>
                        </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;