
import React from 'react';
import '../App.css';
import Pin from './Pin.jsx';

const styles ={
    pin_container:{
        clear: 'both',
        margin:0,
        padding:0,
        width:'80vw',
        backgroundColor:'#161616',
        position:'absolute',
        left:'50%',
        transform:'translate(-50%)',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill,250px)',
        gridAutoRows:'10px',
        justifyContent:'center'
    }
}
const PinterestLayout =()=>{
return(
    <div style={styles.pin_container}>
        <Pin size="large" />
        {/* <Pin size="small"/>
        <Pin size="medium"/> */}
        {/* <Pin size="large"/>
        <Pin size="small"/>
        <Pin size="medium"/>
        <Pin size="small"/> */}
    </div>
)

}
export default PinterestLayout;
