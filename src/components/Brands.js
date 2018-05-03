import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import {styles} from './styles/styles'
import { css, StyleSheet } from 'aphrodite'
import { connect } from 'react-redux'
import './styles/category.css'
import { withRouter } from 'react-router'
import YouTube from 'react-youtube';


const opts = {
    height: '340',
    width: '470',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};


class brands extends Component {
    constructor(props){
        super(props)
        this.state={
            tab:1
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="title_docm">
                        БРЕНДИ
                    </div>
                            </div>
                            <div>
                                <div className="row col-12 container_wrap brand" style={{height:60}}>
                                    <div onClick={()=> this.setState({tab:1})} className={`col-lg-6 col-sm-12 ${this.state.tab===1?css(styles.li_docm_1):css(styles.li_docm)}`}> <p><img style={{width:"85px"}}  src={require('./images/ruck.png')}  /></p></div>
                                    <div onClick={()=> this.setState({tab:0})} className={`col-lg-6 col-sm-12 ${this.state.tab===0?css(styles.li_docm_1):css(styles.li_docm)}`}>    <p><img style={{width:"85px"}}  src={require('./images/Logo_Sodeca_black.png')}  /></p></div>
                                </div>
                                <div>
                                    <div>
                                        <div className="docm_div_1">

                                        </div>
                                        {this.state.tab === 1?(
                                                <div>
                                                    <div className="container_wrap container" style={{margin:0,paddingLeft:20, position:"relative", zIndex:100, paddingTop:15}}>
                                                        <h5 style={{fontFamily:"Open Sans", textAlign:"center"}} >
                                                                <p className="text-center" style={{fontSize:20, color:"#fff", paddingBottom:25}}>Завод Ruck</p>
                                                                Компанії Ruck Ventilatoren 25 років
                                                                <br />
                                                                <br />
                                                                <blockquote style={{fontStyle:"italic"}}>
                                                                    «Я не знаю, чи існують які-небудь межі наших можливостей.<br />
                                                                    Це ми можемо перевірити тільки на своєму досвіді.»
                                                                    <br />
                                                                    Герхард Рук, засновник компанії.
                                                                </blockquote>
                                                        </h5>
                                                        <div  style={{textAlign:"justify",fontFamily:"Open Sans",fontSize:18 }} >
                                                            Ruck Ventilatoren GmbH - сімейне підприємство, яке спеціалізується на виробництві високоякісних систем кондиціонування і вентиляції. Компанія поставляє на ринок широкий спектр стандартних виробів, таких як канальні вентилятори для круглих і прямокутних повітроводів, а також приділяє велику увагу розробці нової продукції і пошуку індивідуальних рішень.<br /><br />
                                                            З моменту заснування всі зусилля сімейного підприємства спрямовані на постійне вдосконалення продукції. Всі співробітники працюють в невимушеній сімейній обстановці, намагаючись досліджувати межі технічних можливостей і реалізувати їх на практиці з використанням сучасних засобів.<br /><br />
                                                            Наша мета полягає не тільки в тому, щоб надавати своїм клієнтам технічно досконалі вентилятори та вентиляційні установки, але і, пропонуючи більш енергоефективну продукцію, сприяти створенню більш сприятливих і комфортних для життя умов в майбутньому.<br /><br />
                                                            Наша продукція відповідає всім чинним в даний час директивам, які регулюють питання енергоефективності, а в деяких випадках навіть значно перевершують вимоги специфікацій..<br />
                                                            Саме це і дозволяє нам з оптимізмом дивитися в майбутнє і діяти в повній відповідності з нашим девізом «Розробка для досягнення оптимального результату».
                                                        </div>
                                                        <div className="row mt-3">
                                                            <img style={{height:350}}  className="col-lg-6 col-sm-12" src={require('./images/RUCK/IMG_4535.JPG')}  />
                                                            <img style={{height:350}}  className="col-lg-6 col-sm-12" src={require('./images/RUCK/IMG_4544.JPG')}  />
                                                        </div>
                                                        <div className="col-12 mt-3" style={{display:"flex", justifyContent:"center"}}>
                                                            <span className="text-center brand_video">
                                                                    <YouTube
                                                                    videoId="o0DduApDpCI"
                                                                    opts={opts}
                                                                    onReady={this._onReady}
                                                                />
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <div style={{background:"#4b9bff", height:55}}>
                                                        <p style={{textAlign:"center", fontSize:20, color:"#fff", paddingTop:12, fontFamily:"Open Sans"}}>
                                                            СЕРТИФІКАТИ
                                                        </p>
                                                    </div>
                                                    <div className=" mt-3 container">
                                                        <a href={require('./images/RUCK/UA-TR-01.JPG')}><img style={{width:"25%"}}  src={require('./images/RUCK/UA-TR-01.JPG')}  /></a>
                                                        <a href={require('./images/RUCK/UA TR 012 C 0302_0002.jpg')}><img style={{width:"25%"}} src={require('./images/RUCK/UA TR 012 C 0302_0002.jpg')}  /></a>
                                                        <a href={require('./images/RUCK/UA TR 012 C 0303-17_0001.jpg')}><img style={{width:"25%"}} src={require('./images/RUCK/UA TR 012 C 0303-17_0001.jpg')}  /></a>
                                                        <a href={require('./images/RUCK/UA TR 012 C 0303-17_0002.jpg')}><img style={{width:"25%"}}  src={require('./images/RUCK/UA TR 012 C 0303-17_0002.jpg')}  /></a>
                                                    </div>
                                                </div>):(
                                                <div className="row" style={{margin:0,paddingLeft:20, position:"relative", zIndex:100, paddingTop:50,display:"flex", justifyContent:"center"}}>

                                                </div>
                                            )}
                                    </div>
                                </div>
                    </div>
                    <Footer/>
                </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(brands))