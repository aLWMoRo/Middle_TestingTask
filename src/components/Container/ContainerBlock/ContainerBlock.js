import React, { useState } from 'react';
import List from '../../List/List';
import './ContainerBlock.scss';
import plus from '../../../assets/images/plus.png';
import minus from '../../../assets/images/minus.png';

const ContainerBlock = ({list, name}) =>
{
    const [listIsVisible, seListIsVisible] = useState(true);

    return (
        <div className='ContainerBlock'>
            <div className='ContainerBlock_Header'>
                <hr />
                <button className='Header_Button_visible' onClick={() => listIsVisible ? seListIsVisible(false) : seListIsVisible(true)}>
                    {
                    listIsVisible
                    ?
                        <img className="Header_Icon" src={plus} />
                    : 
                        <img className="Header_Icon" src={minus} />
                    }
                </button>
                <span className='ContainerBlock_Title'>{name}</span>
            </div>
            {
                listIsVisible
                ?
                <div className='ContainerBlock_List'>
                    <List list={list} />
                </div>
                :
                <div className='ContainerBlock_List_media' >
                    <List list={list} />
                </div>
            }
        </div>
        
    );
};

export default ContainerBlock;