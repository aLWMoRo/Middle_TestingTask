import React from 'react';
import HeaderContainer from '../Text/HeaderContainer/HeaderContainer';
import './Container.scss';
import ContainerBlock from './ContainerBlock/ContainerBlock';

const Container = ({FirstList, SecondList, title}) =>
{
    return (
        <div className='Container'>
            <div className='Container_Title'>
                <HeaderContainer title={title} />
            </div>
            <div className='Container_Description'>
                <ContainerBlock list={FirstList} name={'1 модуль'} />
                <ContainerBlock list={SecondList} name={'2 модуль'} />
            </div>
        </div>
    );
}

export default Container;
