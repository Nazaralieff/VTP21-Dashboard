import React,{useState} from 'react'
import img from "../SourceFiles/Header/male.png";
import img1 from '../SourceFiles/Mentors/img1.jpg'
import img2 from '../SourceFiles/Mentors/img2.jpg'
import img3 from '../SourceFiles/Mentors/img3.jpg'
import img4 from '../SourceFiles/Mentors/img4.jpg'
import img5 from '../SourceFiles/Mentors/img5.jpg'
import img6 from '../SourceFiles/Mentors/img6.jpg'
import img7 from '../SourceFiles/Mentors/img7.jpg'
import img8 from '../SourceFiles/Mentors/img8.jpg'
import img9 from '../SourceFiles/Mentors/img9.jpg'
import img10 from '../SourceFiles/Mentors/img10.jpg'
import img11 from '../SourceFiles/Mentors/img11.jpg'
import img12 from '../SourceFiles/Mentors/img12.jpg'
import img13 from '../SourceFiles/Mentors/img13.jpg'
import img14 from '../SourceFiles/Mentors/img14.jpg'
import MentorShow from '../Component/MentorShow';


function Mentors() {
    const [MentorList, setMentorList] = useState([
        {
            id : 1,
            name : 'Mentor 1',
            lastname : 'soyad',
            department : 'sobe',
            skil : 'bacariqlar',
            about : [
                {
                    category : 'Universitet',
                    items : ['Uni 1', 'Uni 2', 'Uni 3']
                },
                {
                    category : 'İş Yerləri',
                    items : ['Company 1',  'Company 2', 'Company 3']
                },
                {
                    category : 'İşləri',
                    items : ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']
                },
                {
                    category : 'Dil Bilikləri',
                    items : ['Lang 1', 'Lang 2']
                },
            ],
            text : {
                textHeader : 'Why do we use it?',
                textContent : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
            },
            galery : [img1, img2, img3, img4, img5, img6, img7, img8],
            sm : [
                {
                    logo : 'fab fa-facebook',
                    class : 'flex fb',
                    name : 'Facebook'
                },
                {
                    logo : 'fab fa-instagram',
                    class : 'flex ins',
                    name : 'Instagram'
                },
                {
                    logo : 'fab fa-linkedin-in',
                    class : 'flex in',
                    name : 'Linkedin'
                }
            ]
        },
        {
            id : 2,
            name : 'Mentor 2',
            lastname : 'soyad',
            department : 'sobe',
            skil : 'bacariqlar',
            about : [
                {
                    category : 'Universitet',
                    items : ['Uni 1', 'Uni 2', 'Uni 3']
                },
                {
                    category : 'İş Yerləri',
                    items : ['Company 1',  'Company 2', 'Company 3']
                },
                {
                    category : 'İşləri',
                    items : ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']
                },
                {
                    category : 'Dil Bilikləri',
                    items : ['Lang 1', 'Lang 2']
                },
            ],
            text : {
                textHeader : 'Where can I get some?',
                textContent : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
            },
            galery : [img9, img5, img4, img2, img11, img12, img10, img1],
            sm : [
                {
                    logo : 'fab fa-facebook',
                    class : 'flex fb',
                    name : 'Facebook'
                },
                {
                    logo : 'fab fa-instagram',
                    class : 'flex ins',
                    name : 'Instagram'
                },
                {
                    logo : 'fab fa-linkedin-in',
                    class : 'flex in',
                    name : 'Linkedin'
                }
            ]
        },
        {
            id : 3,
            name : 'Mentor 3',
            lastname : 'soyad',
            department : 'sobe',
            skil : 'bacariqlar',
            about : [
                {
                    category : 'Universitet',
                    items : ['Uni 1', 'Uni 2', 'Uni 3']
                },
                {
                    category : 'İş Yerləri',
                    items : ['Company 1',  'Company 2', 'Company 3']
                },
                {
                    category : 'İşləri',
                    items : ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']
                },
                {
                    category : 'Dil Bilikləri',
                    items : ['Lang 1', 'Lang 2']
                },
            ],
            text : {
                textHeader : 'Where does it come from?',
                textContent : 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            galery : [img6, img14, img2, img9, img12, img3, img13, img1],
            sm : [
                {
                    logo : 'fab fa-facebook',
                    class : 'flex fb',
                    name : 'Facebook'
                },
                {
                    logo : 'fab fa-instagram',
                    class : 'flex ins',
                    name : 'Instagram'
                },
                {
                    logo : 'fab fa-linkedin-in',
                    class : 'flex in',
                    name : 'Linkedin'
                }
            ]
        },
        {
            id : 4,
            name : 'Mentor 4',
            lastname : 'soyad',
            department : 'sobe',
            skil : 'bacariqlar',
            about : [
                {
                    category : 'Universitet',
                    items : ['Uni 1', 'Uni 2', 'Uni 3']
                },
                {
                    category : 'İş Yerləri',
                    items : ['Company 1',  'Company 2', 'Company 3']
                },
                {
                    category : 'İşləri',
                    items : ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5']
                },
                {
                    category : 'Dil Bilikləri',
                    items : ['Lang 1', 'Lang 2']
                },
            ],
            text : {
                textHeader : 'Lorem Ipsum',
                textContent : 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            galery : [img2, img4, img6, img8, img10, img12, img14, img1],
            sm : [
                {
                    logo : 'fab fa-facebook',
                    class : 'flex fb',
                    name : 'Facebook'
                },
                {
                    logo : 'fab fa-instagram',
                    class : 'flex ins',
                    name : 'Instagram'
                },
                {
                    logo : 'fab fa-linkedin-in',
                    class : 'flex in',
                    name : 'Linkedin'
                }
            ]
        },

    ])
    const [MentorTurn, setMentorTurn] = useState(1)
    const MentorChange = (e) => {
        setMentorTurn(e)
    }
    return (
        <div id = 'mentors'>
            <div id = 'mentors-block' className = 'container'>
                <div id = 'mentors-flex' className = 'flex'>
                <div id = 'mentor-list'>
                    <ul>
                        {MentorList.map(item => {
                            return(
                                <li className = 'mentor-list-item flex' onClick = {()=> {
                                    MentorChange(item.id)
                                }}>
                                <img  src = {img}/>
                                <h5>{item.name}</h5>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div id = 'mentor-data'>
                    {
                        MentorList.map(mentor => {
                            if(mentor.id == MentorTurn){
                                return(
                                    <MentorShow data = {mentor} />
                                )
                            }
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors
