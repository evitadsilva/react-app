import React from 'react';
import "./about.css"
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../components/footer/Footer.jsx";
import MailList from "../../components/mailList/MailList.jsx";

const About = () => {
    return (
        <>
        <Navbar/>
            <div className="main">
                <div className="main__container">
                    <div className="main__content">
                        <h2>Live in a </h2>
                        <h1>Music Festival </h1>
                        <h2>Forever.</h2>
                        <p>Discover a wide range of artists to hire for your events and interact with them at a whole new level.</p>
                        <button className="main__btn"><a href="login.html">Artist</a></button>
                        <button className="main__btn"><a href="login.html">Fan</a></button>
                    </div>
                    <div className="main__img--container">
                        <img src="images\element-removebg-preview.png" id="main__img" alt="Main Image" />
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="about__container">
                    <div className="about__img--container">
                        <img src="/images/about1.jpg" id="about__img" alt="About Image" />
                    </div>
                    <div className="about__content">
                        <div className="question">
                            <h1>What makes gigit different??</h1>
                        </div>
                        <br />
                        <div className="description1">
                            <h2>Connecting fans</h2>
                            <p>A pool of artist in one place.</p>
                        </div>
                        <br />
                        <div className="description2">
                            <h2>Easier interaction.</h2>
                            <p>Making booking of music artist easier. </p>
                        </div>
                        <br />
                        <div className="description3">
                            <h2>Positive impact</h2>
                            <p>This can lead to more successful and enjoyable live music events.</p>
                        </div>
                    </div>
                </div>
            </div>

                <div className="row">
                    <h1>Our Features</h1>
                </div>
                <div className="row">

                    <div className="column">
                        <div className="card">
                            <div className="icon">
                            <FontAwesomeIcon icon={faUsers}/>
                            </div>
                            <h3>User Friendly</h3>
                            <p>Artist profiles could contain information about their music genre, availability for booking & more.</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="icon">
                            <FontAwesomeIcon icon={faBook}/>
                            </div>
                            <h3>Access</h3>
                            <p>Booking gigs include calendar integration. Users can easily book any artist of their choice according to the availability.</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="icon">
                                <FontAwesomeIcon icon={faBars}/>
                            </div>
                            <h3>Easy selection</h3>
                            <p>Users can select specific genres they are interested in, such as pop, Bollywood, classical, rock, jazz, or electronic music\.</p>
                        </div>
                    </div>
                </div>
                
            <div class="start">
    <div class="start__container">
        <div class="start__img--container">
            <img src="images/girl with guitar.jpg" id="main__img"/>
        </div>
        <div class="start__content">
        <h1>Start your journey</h1> 
        <div class="start__logo">
            <h2>with</h2> 
            <img src="images/logofinal.png" alt="logo"/>
        </div>
        <p>Build your career with gigit easy-to-use 
            services and exclusive industry access.</p>
        <button class="start__btn"><a href="login.html">Start</a></button>
    </div>
    </div>
</div>
<MailList/>
<Footer/>
        </>
    );
}

export default About;
