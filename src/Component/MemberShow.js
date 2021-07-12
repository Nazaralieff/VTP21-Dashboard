import React from 'react'
import img from '../SourceFiles/Header/male.png'

function MemberShow(props) {
    console.log(props);
    return (
        <div id = 'member-show'>
            <div id = 'member-show-block'>
                <div id = 'member-show-img' className = 'flex'>
                    <img src = {img} />
                </div>
                <div id = 'member-show-data' className = 'flex'> 
                <div id = 'member-show-data-question'>
                    <ul>
                        <li>Ad</li>
                        <li>Soyad</li>
                        <li>Yas</li>
                        <li>Universitet</li>
                        <li>Ixtisas</li>
                        <li>Kurs</li>
                        <li>Sobe</li>
                        <li>Aktivlik</li>
                    </ul>
                </div>
                <div id = 'member-show-data-answer'>
                <ul>
                        <li>:  {props.data.name}</li>
                        <li>: {props.data.lastname}</li>
                        <li>: {props.data.age}</li>
                        <li>: {props.data.university}</li>
                        <li>: {props.data.speciality}</li>
                        <li>: {props.data.degree}</li>
                        <li>: {props.data.department}</li>
                        <li>: {props.data.activity}</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MemberShow
