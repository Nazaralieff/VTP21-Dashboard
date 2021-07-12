import React from 'react'
import img from "../SourceFiles/Header/male.png";
import MentorShowRadar from './MentorShowRadar';

function MentorShow(props) {
    const { data } = props;
    return (
        <div id='mentor-data-container'>
            <div id='md-header'>
                <div id='md-header-flex' className='flex'>
                    <hr id='md-header-hr-left' />
                    <img src={img} />
                    <h3>{data.name + ' ' + data.lastname}</h3>
                    <h4></h4>
                    <hr id='md-header-hr-right' />
                </div>
            </div>
            <div id='md-content'>
                <div id='md-main' className = 'flex'>
                    <div id='md-main-content'>
                            {
                                data.about.map(about => {
                                    return(
                                        <div className = 'md-main-category flex'>
                                            <div className = 'flex'>
                                            <h6>{about.category}</h6>
                                            <span>:</span>
                                            </div>
                                            <ul>
                                            {about.items.map(item => {
                                                return(
                                                    <li> {item}</li>
                                                )
                                            })}
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    <div id='md-main-skill'>
                        <MentorShowRadar />
                    </div>
                </div>
                <hr />
                <div id='md-text' >
                    <h5>{data.text.textHeader}</h5>
                    <p>{data.text.textContent}</p>
                </div>
                <hr />
                <div id='md-galery'>
                    <ul className='flex'>
                        {data.galery.map(item => {
                            return (

                                <li className='flex'>
                                    <img src={item} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <hr />
                <div id='md-sosial-media'>
                    <ul className='flex'>
                        {data.sm.map(item => {
                            return (
                                <li className={item.class}>
                                    <i className={item.logo}></i>
                                    <h6>{item.name}</h6>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MentorShow
