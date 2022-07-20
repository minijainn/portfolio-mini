import React from 'react';
import Footer from './Footer';
import pic from "./images/myimg2.jpeg";
import Typewriter from 'typewriter-effect'

const Main =()=>{
    return(
        <>
      
            <section className="App-section container-fluid d-flex flex-row justify-content-evenly flex-wrap my-5">
                <div className="App-section-left p-2 flex-sm-column col-lg-5 col-md-8 col-10 col-xxs-5">
                    <div class="title col-8 mx-auto">
                        <h1 class="gradient-text"> Hello!<br/>I'm&nbsp;Minitha</h1>
                    </div>
                    <div class="work d-inline"><h2>
                       <Typewriter
                            onInit={(typewriter) => {typewriter
                                .typeString("aspiring Web Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();}}
                                options={{
                                    loop: true,
                                  }}
                        />
                        </h2>
                    </div>
                    <div class="contact">
                    <ul class="social-icons">
                        <li><a href="https://www.linkedin.com/in/mini03/">
                        <i class="fa fa-linkedin-square" ></i>
                        </a>
                        </li>
                        <li><a href="https://twitter.com/minijainn">
                        <i class="fa fa-twitter" ></i>
                        </a>
                        </li>
                        <li><a href="https://github.com/minijainn">
                        <i class="fa fa-github"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="App-section-right p-2 flex-sm-column col-lg-5 col-md-5 col-10 col-xxs-5">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <img class="image-fluid" src={pic} alt="myimg" style={{width: '40%', height: '40%',borderRadius: '15px'}}/></div>
                </div>
                </div>
                </section>
              
                        
        </>
    )
}
export default Main
