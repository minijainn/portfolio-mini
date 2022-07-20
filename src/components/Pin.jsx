
import React from 'react';
import './Pinstyle.css';
import '../App.css';
import githublink from "../images/GitHub-link.png";
import projectlink from "../images/projectOpen-link.png";
import projectMinioniol from "../images/minioniolProjectImg.png";

const styles={
    pin:{
        margin:'15px 10px',
        padding:0,
        borderRadius:'15px',
        backgroundColor:'#2C2A2D',
        color:'#FFFFFF'
    },
    small:{
        gridRowEnd:'span 26'
    },
    medium:{
        gridRowEnd:'span 33'
    },
    large:{
        gridRowEnd:'span 45'
    }
}
const Pin =(props)=>{
return(
    <>
    <div style={{...styles.pin,...styles[props.size]}} className="card">
       <div className="projectTitle"></div>
       <div className='projectModel'>
         {/* header */}
        <div className='project'>MINIONIOLS</div>
       {/* footer */}
        <div className='projectLinks'>
            <div className='destination'>
                <div className='iconContainer'>
                <img src={projectlink} alt='project-link'  backgroundColor='transparent' className='icon'/>
                </div>
                <span><a href='https://minijainn.github.io/MINIONIOL/'>Project Link</a></span>
            </div>
            <div className='destination'>
                <div className='iconContaniner'>
                <img src={githublink} alt='github-link' className='icon' />
                </div>
                <span><a href='https://github.com/minijainn/MINIONIOL'> Github code Link</a></span>
            </div>
        </div>
       </div>
       <div className='projectImg'>
        <img src={projectMinioniol} alt='' />
       </div>
       
    </div>
   
  
    </>

    
)

}
export default Pin;
