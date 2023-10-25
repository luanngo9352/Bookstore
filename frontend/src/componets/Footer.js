//import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import playstore from '../images/playstore.png'
import appstore from '../images/Appstore.png'

const Footer = () => {
    const currentYear= new Date().getFullYear()
  return (
    <footer id='footer'>
        <div class="leftFooter">
            <h4>DOWNLOAD APPP</h4>
            <p>download app for appstore and playstore</p>
            <img src={playstore} alt = "playstore"/>
            <img src={appstore} alt="appstore"/> 
        </div>
        <div class= "midFooter">
            <h1>Book Store Future</h1>
            <p>Hight quality is our first priority</p>
            <p>Book Store Future &copy; {currentYear}</p>
        </div>
        <div class= "rightFooter"> 
            <h4>Follow Us</h4>
            <a href='https://www.facebook.com/profile.php?id=100006635956508'>facebook</a>
            <a href='https://www.instagram.com/bao_linhu/'>instagram</a>
        </div>
        {/* <Container>
            <Row>
                <Col className="text -center py-3">
                    <p>Book Store Future &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container> */}
    </footer>
  )
}

export default Footer