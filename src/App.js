import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";

import Logo from "./SourceFiles/Header/Logo.png";
import { Button, Menu, TextField } from "@material-ui/core/";

import Statistic from './Section/Statistic';
import Members from "./Section/Members";
import Account from "./Section/Account";
import Home from "./Section/Home";
import Mentors from "./Section/Mentors";

function App() {
  const homeColor = createMuiTheme({
    palette: {
      primary: {
        main : '#51ADE5'
      }
    }
  })

  const [Manu, setManu] = useState({
    link: [
      {
        link: "/",
        name: "Haqqımızda",
      },

      {
        link: "/mentors",
        name: "Mentorlar",
      },
    ],
    Account: {
      class: "fas fa-user",
      display: "display-none",
    },
  });

  const [User, setUser] = useState([
    {
      login: "admin",
      pw: '12345',
    },
  ]);

  const [SignInInput, setSignInInput] = useState(
    {
      login : '',
      pw : ''
    }
  )


  const [UserClick, setUserClick] = useState(true);

  const userClicked = () => {
    if(Manu.Account.class == 'fas fa-user'){
      setUserClick((prevState) => !prevState);
      if (UserClick) {
        setManu({
          ...Manu,
          Account: {
            ...Manu.Account,
            display: "flex",
          },
        });
      } else {
        setManu({
          ...Manu,
          Account: {
            ...Manu.Account,
            display: "display-none",
          },
        });
      }
    }else{
      setManu({...Manu,
        link: [
          {
            link: "/",
            name: "Haqqımızda",
          },
    
          {
            link: "/mentors",
            name: "Mentorlar",
          },
        ],
        Account: {
          class: "fas fa-user",
          display: "display-none",
        },
      })
    }

  };

  const SignInLogin = (e) => {
    setSignInInput({...SignInInput, login : e.target.value})
  }
  const SignInPw = (e) => {
    setSignInInput({...SignInInput, pw : e.target.value})
  }

  const SignInHandle = () => {
    User.map(user => {
      if(user.login === SignInInput.login && user.pw === SignInInput.pw){
          setManu({
            ...Manu, 
            link : [{
              link: "/",
              name: "Haqqımızda",
            },
            {
              link: "/statistic",
              name: "Statistika",
            },
            {
              link: "/mentors",
              name: "Mentorlar",
            },
            {
              link: "/members",
              name: "İştirakçılar",
            },
            {
              link: "/account",
              name: "Profilim",
            }],
            Account: {
              class: "fas fa-sign-out-alt",
              display: "display-none",
            },
          });
          setSignInInput(
            {
              login : '',
              pw : ''
            }
          )
        }
      else{
        alert('Login və ya Şifrə Səhvdir');
      }
    })
  }



  return (
    <MuiThemeProvider theme={homeColor}>
    <Router>
      <div className="App">
        <div id="header">
          <div id="header-block">
            <div className="container">
              <div id="header-flex" className="flex">
                <div id="header-logo">
                  <img src={Logo} />
                </div>
                <div id="header-manu">
                  <nav>
                    <ul className="flex">
                      {Manu.link.map((item) => {
                        return(
                          <li>
                            <Link to = {item.link}>
                            <h3>{item.name}</h3>
                            </Link>
                          </li>
                        )
                      })}
                      <li className={Manu.Account.class} onClick={userClicked}>
                        <Link>
                         <h3>{Manu.Account.text}</h3>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div id="acc-block" className={Manu.Account.display} >
          <div id = 'acc-wrapper'  onClick = {userClicked}></div>
            <div id="acc-container">
              <h4>VTP 21</h4>
              <form>
                <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  className="acc-input"
                  value = {SignInInput.login}
                  onChange = {SignInLogin}
                />
                <TextField
                  id="outlined-basic"
                  label="Parol"
                  variant="outlined"
                  className="acc-input"
                  value = {SignInInput.pw}
                  onChange = {SignInPw}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="acc-input acc-input-button"
                  onClick = {SignInHandle}
                >
                  Daxil ol
                </Button>
              </form>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/statistic" component = {Statistic} />
          <Route path="/mentors"  component = {Mentors} />
          <Route path="/members"  component = {Members} />
          <Route path="/account"  component = {Account} />
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
