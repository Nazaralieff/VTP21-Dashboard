import React from 'react'

function SingIn() {
    return (
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
              />
              <TextField
                id="outlined-basic"
                label="Parol"
                variant="outlined"
                className="acc-input"
              />
              <Button
                variant="contained"
                color="primary"
                className="acc-input acc-input-button"
              >
                Daxil ol
              </Button>
              <a>Qeydiyyatdan Keç</a>
            </form>
          </div>
        </div>
    )
}

export default SingIn
