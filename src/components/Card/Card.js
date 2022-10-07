import React from "react";
import './Card.scss';

const Card = () =>
{
    return (
        <div className="Card">
            <div className='Card_Conatiner'>
                <div className='Conatiner_FolderCornerCard'>
                    <div className='Card_Title'>
                        <span className='Title_Text'>Практические модули</span>
                    </div>
                    <span className='Card_Description'>
                        Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
                    </span>
                </div>
                <div className='Conatiner_BlackCard'>
                    <div className='Card_Title'>
                        <span className='Title_Text'>Итоговая аттестация</span>
                    </div>
                    <span className='Card_Description'>
                        <ul className='ul'>
                            <li className='li'>Бизнес-проектирование (подготовка итоговой атестационной работы, консультирование по бизнес-проектированию)</li>
                            <li className='li'>Защита итоговой аттестационной работы</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
