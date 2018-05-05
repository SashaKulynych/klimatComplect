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
                                    <div onClick={()=> this.setState({tab:1})} className={`col-lg-6 col-sm-12 ${this.state.tab===1?css(styles.li_docm_1):css(styles.li_docm)}`}><p><img style={{width:"85px"}}  src={require('./images/ruck.png')}  /></p></div>
                                    <div onClick={()=> this.setState({tab:0})} className={`col-lg-6 col-sm-12 ${this.state.tab===0?css(styles.li_docm_1):css(styles.li_docm)}`}><p><img style={{width:"85px"}}  src={require('./images/Logo_Sodeca_black.png')}  /></p></div>
                                </div>
                                <div>
                                    <div>
                                        <div className="docm_div_1">

                                        </div>
                                        {this.state.tab === 1?(
                                                <div>
                                                    <div className="container_wrap container" style={{margin:0,paddingLeft:20, position:"relative", zIndex:100, paddingTop:15}}>
                                                        <h5 style={{fontFamily:"Open Sans", textAlign:"center"}} >
                                                                <p className="text-center" style={{fontSize:20, color:"#fff", paddingBottom:25}}>Завод RUCK</p>
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
                                                    <div>
                                            <div className="container_wrap container" style={{margin:0,paddingLeft:20, position:"relative", zIndex:100, paddingTop:15}}>
                                                    <h5 style={{fontFamily:"Open Sans", textAlign:"center"}} >
                                                        <p className="text-center" style={{fontSize:20, color:"#fff", paddingBottom:25}}>Завод SODECA</p>
                                                        <a href={require('./images/factory.jpg')}><img style={{width:"50%"}}  src={require('./images/factory.jpg')}  /></a><br />
                                                        <br />
                                                        <br />
                                                    </h5>
                                                    <div  style={{textAlign:"justify",fontFamily:"Open Sans",fontSize:18 }} >
                                                        Завод  <b>SODECA</b> був заснований у 1983 році, та заходиться у місті Сант-Кирсе-де-Бесора провінції Барселона в Іспанії.
                                                        Бізнесом компанії є проектування, виробництво і продаж промислових і комерційних вентиляторів. Компанія входить до складу <b>SODECA GROUP</b> - індустріальної групи компаній,
                                                        що динамічно розвивається, є конкурентноспроможною та здатною успішно втілювати свої ідеї в життя.
                                                        <p className="text-center">Бізнес-цілі <b>SODECA</b>:</p>
                                                        Високий рівень обслуговування клієнтів<br/>
                                                        Влучний підбір вентиляційних рішень для ваших проектів<br/>
                                                        Надання клієнтоорієнтованої рекомендації від експертів галузі<br/><br />
                                                        Можливості наших виробничих процесів дуже гнучкі та дозволяють скоротити терміни поставки і витрати на установку.<br/><br/>
                                                        У Дослідницькому Центрі постійно здійснюється контроль за продукцією та за процесами, задіяними в її виробництві.
                                                        Це гарантує високі стандарти якості та відповідності вимогам ISO і AMCA.
                                                        Сучасна технологія, яка використовується на виробництві, забезпечує гнучкість виробництва, що дає можливість відповідати вимогам ринку.<br/><br/>
                                                        <p className="text-left"><b>SODECA</b> у світі:</p>
                                                        <ul>
                                                            <li>-	350 працівників </li>
                                                            <li>-	5 заводів</li>
                                                            <li>-	Дослідницький центр </li>
                                                            <li>-	Комерційна діяльність у 117 країнах світу на 5 континентах </li>
                                                            <li>-	4200 сертифікованих продукти у каталозі </li>
                                                        </ul><br/>
                                                        <p className="text-left"><b>SODECA GROUP</b>:</p>
                                                        <ul>
                                                            <li>-	Стандарт якості ISO <b>9001:2015</b></li>
                                                            <li>-	Стандарт енергоефективності <b>Erp 2015/2016/2018</b></li>
                                                            <li>-	Стандарт випробувань <b>AMCA 210-07</b></li>
                                                            <li>-	Стандарт температурних випробувань <b>EN-12101-3</b></li>
                                                            <li>-	Стандарт акустичних випробувань <b>ISO 3744</b></li>
                                                            <li>-	Стандарт балансування <b>ISO 1940-1</b></li>
                                                            <li>-	Стандарт з безпеки EN <b>ISO 12100</b></li>
                                                            <li>-	Відповідність директиві <b>Directiva 2009/125/CE</b></li>
                                                            <li>-	Стандарт вибухзахищеності <b>EN-14986</b></li>
                                                        </ul>
                                                        Каталог компанії <b>SODECA</b> включає понад 4 200 вентиляторів і витяжних пристроїв, оснащених за останньою технологією,
                                                        кожен з яких може бути адаптований під технічні вимоги наших клієнтів.
                                                    </div>
                                                    <div className="row mt-3">
                                                        <img style={{height:"100%"}}  className="col-lg-12" src={require('./images/CI parking1.jpg')}  />
                                                    </div>
                                                    <div className="col-12 mt-3" style={{display:"flex", justifyContent:"center"}}>
                                                            <span className="text-center brand_video">
                                                                    <YouTube
                                                                        videoId="GNrkDOlU6Eg"
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
                                                    <a href={require('./images/SODEKA/сертифікат1.JPG')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат1.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат2.JPG')}><img style={{width:"25%"}} src={require('./images/SODEKA/сертифікат2.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат3.JPG')}><img style={{width:"25%"}} src={require('./images/SODEKA/сертифікат3.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат4.JPG')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат4.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат5.JPG')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат5.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат6.JPG')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат6.JPG')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат7.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат7.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат8.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат8.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат9.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат9.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат10.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат10.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат11.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат11.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат12.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат12.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат13.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат13.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат14.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат14.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат15.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат15.jpeg')}  /></a>
                                                    <a href={require('./images/SODEKA/сертифікат16.jpeg')}><img style={{width:"25%"}}  src={require('./images/SODEKA/сертифікат16.jpeg')}  /></a>
                                                </div>
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