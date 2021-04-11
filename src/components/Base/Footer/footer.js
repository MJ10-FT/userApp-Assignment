import React, { Component } from 'react';
import './footer.css';

const Footer = () => {
    return (  
        <>
        <div className= "footer">
            <div style={{paddingLeft: '15px', fontSize: '11px'}}>
                BLOCO <sup style= {{fontSize: '8px', position: 'relative', top: '2px;'}}>Ⓒ</sup> 2019 All Rights Reserved
            </div>

            <div style= {{width: '20%' }}>
                <ul className= "list"> 
                    <li style = {{listStyle: 'none'}}>About</li>
                    <li style = {{color: '#7cd319'}}><span style = {{color: 'black'}}>Terms</span></li>
                    <li style = {{color: '#0ce7ec'}}><span style = {{color: 'black'}}>Privacy</span></li>
                    <li style = {{color: '#f8e70c'}}><span style = {{color: 'black'}}>Cookies</span></li>
                </ul>                         
            </div>

            <div style={{paddingRight: '15px', fontSize: '11px'}}>
                BLOCO <sup style= {{fontSize: '8px', position: 'relative', top: '3px;'}}>Ⓒ</sup> 2019 All Rights Reserved     
            </div>
        </div>
        </>
    );
}
 
export default Footer;