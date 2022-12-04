import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const News = () => {
    useTitle('News details')
    const news = useLoaderData();
    const {title, total_view, rating, author, image_url, details, category_id } = news;
    return (
            <Card>
                <Card.Img className='p-2' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                </Card.Body>
                <Link className='p-2' to={`/category/${category_id}`}>
                    <Button variant='primary'>All news in this Category</Button>
                </Link>
            </Card>
    );
};

export default News;