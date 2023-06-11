import React, { useContext } from "react";
import { LoginContext } from "../LoginContext/DataContext";
import "../../img/blog-1.jpg";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./LoginBar.css";
import Carousel from "react-elastic-carousel";
import Item from "../../Item";
import { useState } from "react";
import { LoginInfoContext } from "../LoginContext/DataContext";
function LoginBar() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const[] = useState();
const i = require('../../img/doctor.png')
const j = require('../../img/patient.png')
const k = require('../../img/pharmacist.png')

const a = require('../../img/carousel1.jpg')
const b = require('../../img/carousel2.jpg')
const c = require('../../img/carousel3.jpg')
const d = require('../../img/carousel4.jpg')
const e = require('../../img/carousel5.jpg')
const f = require('../../img/carousel6.jpg')
const g = require('../../img/carousel7.jpg')
const h = require('../../img/carousel8.jpg')


  const { Access, CurrentAccount } = useContext(LoginInfoContext);
  const navigate = useNavigate();
  console.log(Access);
  const handleChange = () => {
    if (Access && CurrentAccount !== "Account") {
      navigate("/login/Docter");
    } else {
      navigate("/registers/docter");
    }
  };
  return (
    <div className= "App1">
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Welcome To MedChain</h5>
              <h1 className="display-1 text-white mb-md-4">India's Best Drug Tracking Portal</h1>
            </div>
          </div>
        </div>
      </div>
		<div className='Container'>
            <div className='header'>
                Supply chain
            </div>
            <div className='cards'>
                <div className='cardcontainer'>
                    <div className='image'>
                        <img src={i}/>
                    </div>    
                    <div className='headline'>
                        Doctor
                    </div>
                    {/* <div className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?
                    </div> */}
                    <div className='submit'>
                        <Link to = '/registers/docter' className='option'>
                        <button className='btn rounded-pill'>LOGIN</button>
                        </Link>
                    </div>
                </div>
                <div className='cardcontainer'>
                    <div className='image'>
                        < img src={j}/>
                    </div>    
                    <div className='headline'>
                        Patient
                    </div>
                    {/* <div className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error? 
                    </div> */}
                    <div className='submit'>        
                        <Link to = '/Registers/patient' className='option'>
                        <button className='btn rounded-pill'>LOGIN</button></Link>
                    </div>
                </div>
                <div className='cardcontainer'>
                    <div className='image'>
                        < img src={k}/>
                    </div>    
                    <div className='headline'>
                        Pharmacist
                    </div>
                    {/* <div className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?
                    </div> */}
                    <div className='submit'>
                        <Link to = '/registers/pharmasist ' className='option'>
                        <button className='btn rounded-pill'>LOGIN</button></Link>
                    </div>
                </div>
            </div>
		</div>
        <div id="about" className="carousel">
            <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000} >
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={a} /></div>
            <p className='sliderPara'>Most psychotropic medications with the exception of anxiolytics, stimulants and hypnotics are not addictive. Addictive behaviour is defined by intense urges, obsessions, loss of control and behaviour to satisfy the addiction.</p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={b} /></div>
            <p className='sliderPara'>Because sleeping aids or pain medication offer quick relief, many people think psychotropic medication will act the same way. Instead, it can take 4 to 6 weeks or more at the right dosage to determine if a medication is alleviating symptoms.</p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={c} /></div>
            <p className='sliderPara'>Some medications can have long term (sometimes debilitating) side effects, such as weight gain, fatigue, loss of desire, and persistent dry mouth. </p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={d} /></div>
            <p className='sliderPara'>Failure to commit to a prescription plan is a major reason why medications do not work as intended. When medications are not used as prescribed, adequate drug blood levels are not achieved</p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={e} /></div>
            <p className='sliderPara'>Everyone's body is unique, this includes how our brains are wired. So medication will work differently in each person. </p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={f} /></div>
            <p className='sliderPara'>The phrase “psychotropic drugs” is a technical term for psychiatric medicines that alter chemical levels in the brain which impact mood and behavior.</p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={g} /></div>
            <p className='sliderPara'>Different drugs have different effects on people. That said, certain drugs do tend to cause more allergic reactions than others. </p>
            </div>
            </Item>
            <Item>
            <div className='slider1'>
            <div className='sliderImg'><img src={h} /></div>
            <p className='sliderPara'>A drug with high risk of adverse effects may be administered only by a healthcare provider.</p>
            </div>
            </Item>
            </Carousel>
        </div>
	</div>
  );
}
export default LoginBar;
