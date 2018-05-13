import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/text.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Slider from 'react-slick';

class Reference extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Header/>
                <div className="text container_wrap">
                    <div className="textContainer ">
                        <p>Об’єкти, на яких успішно використовується наше обладнання - добре відомі та легко впізнавані будівлі по всій території України. Часто вони мають принципове значення у своїй галузі або значний обсяг виробництва, тож ми усвідомлюємо рівень відповідальності, що нам припадає. Кожен наш об’єкт – витвір мистецтва у дуже специфічному жанрі та водночас, високотехнологічна і точна система.</p>
                        <p>Ми пишаємося своїм доробком у технологічному прогресі України, довершеною естетикою та комфортом створюваних умов. І безперечно, своїми задоволеними клієнтами!</p>
                    </div>
                    <div className="col-lg-12 text-center" style={{paddingBottom:50}}>
                        <Slider {...settings}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-44.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-47.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-50.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-53.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-55.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={require("./images/photo_2018-05-05_11-32-58.jpg")} style={{height:"500px", margin:"auto"}} className="img_us" alt=""/>
                            </div>
                        </Slider>
                    </div>
                    <div className="row col-12">
                        <div className="col-lg-6 col-sm-12 ref_bloc_1">
                            <img className="text-center" src={require("./images/icon/101.png")} />
                            <h5>Кожен наш об’єкт – витвір мистецтва у дуже специфічному жанрі та водночас,<br/> високотехнологічна і точна система.</h5>
                        </div>
                        <div className="col-lg-6 col-sm-12 ref_bloc_1" style={{borderLeft:"1px solid #37384d"}}>
                            <img className="text-center" src={require("./images/icon/102.png")} />
                            <h5>Кожен наш об’єкт – витвір мистецтва у дуже специфічному жанрі та водночас</h5>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Reference))