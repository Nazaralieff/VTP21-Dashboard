import React from "react";
import { Button, Menu, TextField } from "@material-ui/core/";

import it from "../SourceFiles/Home/Departments/IT.png";
import acc from "../SourceFiles/Home/Departments/Acc.png";
import hr from "../SourceFiles/Home/Departments/Hr.png";
import lp from "../SourceFiles/Home/Departments/LP.png";



function Home() {

  return (
    <div id="home">
      <div id="home-block">
        <div id="main-section">
          <div id="main-section-text">
            <h1>Virtual Təcrübə Proqramı</h1>
            <h2>2021</h2>
          </div>
        </div>
        <div id="home-text-section" className="home-section">
          <div className="container">
            <h2>
              Haqqımızda
              <br />
              <hr />
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham. here are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.vThere are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the fiteration in some form, by injected
              humour, or randomised words which don't look even slihumour, or
              non-characteristic words etc.
            </p>
          </div>
        </div>
        <div id="home-departments-section" className="home-section">
          <div className="container">
            <h2 className="flex">
              ŞÖBƏLƏR
              <hr />
            </h2>
            <div id="home-departments" className=" container flex">
              <div className="home-departments-block">
                <img src={it} />
                <h4>Internet Texnologiyalar</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of ty
                </p>
              </div>
              <div className="home-departments-block">
                <img src={acc} />
                <h4>Muhasibatlıq</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of ty
                </p>
              </div>
              <div className="home-departments-block">
                <img src={hr} />
                <h4>İnsan Resursları</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of ty
                </p>
              </div>
              <div className="home-departments-block">
                <img src={lp} />
                <h4>Satınalma</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of ty
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="home-counter-section" className="home-section">
          <div id="counter-block-flex" className="container flex">
            <div className="counter-item flex">
              <span>
                <h3>Vebinar</h3>
                <h4>33</h4>
              </span>
            </div>
            <div className="counter-item flex">
              <span>
                <h3>Tapşırıq</h3>
                <h4>15</h4>
              </span>
            </div>
            <div className="counter-item flex">
              <span>
                <h3>Rəhbərlə Görüş</h3>
                <h4>13</h4>
              </span>
            </div>
            <div className="counter-item flex">
              <span>
                <h3>Praktiki Görüş</h3>
                <h4>46</h4>
              </span>
            </div>
          </div>
        </div>
        <div id="home-form-section" className="home-section">
          <div id="home-form-container" className="container">
            <div id="home-form-flex" className="flex">
              <div id="home-form-text" className='flex'>
                <h3>VTP22</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <form id="home-form">
                <div id='home-form-wrapper'>
                  <h5>Bizə Qoşulun</h5>

                  <div id="home-form-wrap">
                    <div className="-home-form-group">
                      <TextField
                        id="outlined-basic"
                        label="Ad"
                        variant="outlined"
                        className='home-form-input'
                      />
                    </div>
                    <div className="home-form-group">
                      <TextField
                        id="outlined-basic"
                        label="Soyad"
                        variant="outlined"
                        className='home-form-input'
                      />
                    </div>
                    <div className="home-form-group">
                      <TextField
                        id="outlined-basic"
                        label="E-Mail"
                        variant="outlined"
                        className='home-form-input'
                      />
                    </div>
                    <div className="home-form-group">
                      <div id="home-input-cv">
                        <Button variant="contained" color="primary" className='home-form-input home-form-btn'>
                          <label for="cv">
                            Cv və ya PortFoilo
                          </label>
                        </Button>
                        <input type="file" id="cv" name="Cv" placeholder="cv" />
                      </div>
                    </div>
                    <div className="home-form-group">
                      <Button variant='contained' color='primary' className='home-form-input home-form-btn' >Send</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
