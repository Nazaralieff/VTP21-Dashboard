import React, { useState } from "react";
import MemberShow from "../Component/MemberShow";
import img from "../SourceFiles/Header/male.png";

function Members() {
  const [Members, setMembers] = useState([
    {
      id: 1,
      name: "person1",
      lastname: "lastname",
      age: "age",
      university: "uni",
      speciality: "speciality",
      degree: "degree",
      department: "department",
      activity: "activ",
    },
    {
      id: 2,
      name: "person2",
      lastname: "lastname",
      age: "age",
      university: "uni",
      speciality: "speciality",
      degree: "degree",
      department: "department",
      activity: "activ",
    },
    {
      id: 3,
      name: "person3",
      lastname: "lastname",
      age: "age",
      university: "uni",
      speciality: "speciality",
      degree: "degree",
      department: "department",
      activity: "activ",
    },
    {
      id: 4,
      name: "person4",
      lastname: "lastname",
      age: "age",
      university: "uni",
      speciality: "speciality",
      degree: "degree",
      department: "department",
      activity: "activ",
    },
    {
      id: 5,
      name: "person5",
      lastname: "lastname",
      age: "age",
      university: "uni",
      speciality: "speciality",
      degree: "degree",
      department: "department",
      activity: "activ",
    },
  ]);



  const [MemberData, setMemberData] = useState({
    id: 1,
    name: "person1",
    lastname: "lastname",
    age: "age",
    university: "uni",
    speciality: "speciality",
    degree: "degree",
    department: "department",
    activity: "activ",
  })

  const changeMember = (e) => {
      Members.map(person => {
          if(person.id == e){
            setMemberData({
                name: person.name,
                lastname: person.lastname,
                age: person.age,
                university: person.university,
                speciality: person.speciality,
                degree: person.degree,
                department: person.department,
                activity: person.activity
            })
          }
      })

  }



  return (
    <div id="members">
      <div id="members-block" className="container flex">
        <MemberShow data = {MemberData}/>
        <div id="member-list">
          <div id="member-list-block">
            <ul className="flex">
              {Members.map((item) => {
                return (
                  <li className="flex" onClick = {()=>{changeMember(item.id)}}>
                    <div className="img flex">
                      <img src={img} />
                    </div>
                    <div className="member-data flex">
                      <h4>{item.name}</h4>
                      <span>{item.department}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
