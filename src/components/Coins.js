import React from 'react';
import '../App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Coins({name, price, priceChanged, icon,symbol, link}){
    return(
        <div className='coinList'>
        <Row>
            <Col md="1" xs="2">
                <img className='coinImage' src={icon}></img>
            </Col>
           <Col md = "2" xs= "2">
                <h3 className='cryptoName'>{name}</h3>
            </Col>
            <Col md = "2" xs= "2">
                <h3 className='cryptoSymbol'>{symbol}</h3>
            </Col>
            <Col md = "3" xs= "2">
                <h3 className='cryptoPrice'>${price.toFixed(2)}</h3>
            </Col>
            <Col md = "2" xs= "2">
                <h3 style={{color: priceChanged>0? "green" : "red"}} className='cryptoChange'>{priceChanged}%</h3>
             </Col>
             <Col md = "2" xs= "2">
                <a href= {link} target = '_blank'><button className='linkInfo'>Info</button></a>
             </Col>
               <hr className='line'/>
        </Row>
        </div>
    )
}

export default Coins;