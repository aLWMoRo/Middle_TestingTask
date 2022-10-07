import React, { useEffect, useState } from 'react';
import './DataFetching.scss';
import Loader from '../components/Loader/Loader';

const DataFetching = ({limit, page}) =>
{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        getData();
    }, [])

    const getData = async () =>
    {
        const response = await fetch(`https://api-moscow-mba.herokuapp.com/products?_limit=${limit}`)
        .then(response =>  response.json())
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
        setPosts(response)
    }

    return (
        <div className='Disciplines'>
            {
                loading
                ?
                <div className='Disciplines_Loader'>
                    <Loader />
                </div>
                :
                <ul className='Disciplines_Items' >
                    {
                        page === 2 ?
                            posts && posts.slice(5, 10).map(post =>
                                <li className='Disciplines_Item' key={post.id}>{post.title}</li>
                            )
                        : page === 3 ?
                            posts && posts.slice(10, 15).map(post =>
                                <li className='Disciplines_Item' key={post.id}>{post.title}</li>
                            )
                        : page === 4 ?
                            posts && posts.slice(15, 20).map(post =>
                                <li className='Disciplines_Item' key={post.id}>{post.title}</li>
                            )
                        :
                            posts && posts.slice(0, 5).map(post =>
                                <li className='Disciplines_Item' key={post.id}>{post.title}</li>
                            )
                    }
                </ul>
            }
        </div>
    );
}

export default DataFetching;