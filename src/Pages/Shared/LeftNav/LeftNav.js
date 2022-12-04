import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://dragon-news-server-theta-three.vercel.app/news-categories')
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            <h2>All Categories</h2>
            <div>
                {
                    categories.map(category=> <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;



