import React,{useState} from "react";
import { Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import Activity from '../Component/Charts/Activity'
import Age from '../Component/Charts/Age'
import Degree from '../Component/Charts/Degree'
import Departments from '../Component/Charts/Departments'
import Gender from '../Component/Charts/Gender'
import Speciality from '../Component/Charts/Speciality'
import University from '../Component/Charts/University'

function Statistic() {
    const [Filter, setFilter] = useState([
        {
          id : 1,
            check : true,
            name : 'Cins',
            department : Gender
        },
        {
          id : 2,
            check : true,
            name : 'Şöbə',
            department : Departments
        },
        {
          id : 3,
            check : true,
            name : 'Aktivlik',
            department : Activity
        },
        {
          id : 4,
            check : true,
            name : 'Yaş',
            department : Age
        },
        {
          id : 5,
            check : true,
            name : 'Universitet',
            department : University
        },
        {
          id : 6,
            check : true,
            name : 'İxtisas',
            department : Speciality
        },
        {
          id : 7,
            check : true,
            name : 'Kusr',
            department : Degree
        }

    ])

    const StatisticFilter = (e) => {

      // setFilter([
      //   ,,,Filter,
      //   {
      //     ...e,
      //   check : !e.check
      //   }
      // ])
    }

  return (
    <div id="statistic">
      <div id="statistic-block">
        <div className="container">
          <div id="statistik-flex" className="flex">
            <div id="statistic-left">
              <div id="sl-container">
                <h3>Filter</h3>
                <FormGroup>
                    {Filter.map(item => {
                        return(
                            <label className = 'flex'>
                            <h4>{item.name}</h4>
                            <FormControlLabel
                              control={
                                <Switch
                                  size="small"
                                  checked = {item.check}
                                  onClick = {() => {
                                    StatisticFilter(item)
                                  }}
                                />
                              }
                            />
                            </label>
                        )
                    })}
                </FormGroup>
              </div>
            </div>
            <div id="statistic-right">
                <div id = 'sr-container'>
                    {Filter.map(item => {
                        return(
                            <item.department />
                        )
                    })}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
