import React,{useState} from "react";
import AccountCalendar from "../Component/AccountCalendar";
import AccountNotes from "../Component/AccountNotes";
import AccountValue from "../Component/AccountValue";
import Button from "@material-ui/core/Button";
import img from "../SourceFiles/Header/male.png";

function Account() {
    const [DataFilter, setDataFilter] = useState([
        {

            name : 'Təqvim',
            link : AccountCalendar
        },
        {
            name : 'Qiymətləndirmə',
            link : AccountValue
        },
        {
            name : 'Qeydlər',
            link : AccountNotes
        },
    ])

    const [DataShow, setDataSwow] = useState({
        Show : AccountCalendar
    })
    const DataShowChange = (e) => {
        setDataSwow({
            Show : e
        })
    }


  return (
    <div id="account">
      <div id="account-block" className="container">
        <div id="account-flex" className="flex">
          <div id="account-content">
            <div id="acc-content-info">
              <div id="acc-img" className="flex">
                <img src={img} />
              </div>
              <div id="acc-edit" className="flex">
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  Redaktə Et
                </Button>
              </div>
              <div id="acc-info-data" className="flex">
                <ul id="acc-questions">
                  <li>Ad</li>
                  <li>Soyad</li>
                  <li>Yas</li>
                  <li>Universitet</li>
                  <li>Ixtisas</li>
                  <li>Kurs</li>
                  <li>Sobe</li>
                  <li>Aktivlik</li>
                </ul>
                <ul id="acc-answers">
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
            </div>
          </div>
          <div id="account-data">
            <div id = 'acc-data-filter' className = 'flex'>
                {DataFilter.map(data => {
                    return(
                        <Button
                        variant="contained"
                        color="primary"
                        href="#contained-buttons"
                        className = 'acc-filter-btn'
                        onClick = {() => {
                            DataShowChange(data.link)
                        }}
                      >
                        {data.name}
                      </Button>
                    )
                })}
            </div>
            <div id = 'acc-data-show'>
                <DataShow.Show />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
