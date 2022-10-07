import React from 'react';
import ListItem from './ListItem';
import './List.scss';

const List = ({list}) =>
{
    return (
        <div className='list'>
            {list.map((item, index) =>
                <ListItem key={index} list={item} />
            )}
        </div>  
    );
};

export default List;