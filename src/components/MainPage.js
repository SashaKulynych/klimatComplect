import React, { Component } from 'react';
import './styles/styles.css';
import Slider from 'react-slick';
import Header from './Header'
import Footer from './Footer'
import * as API from '../actions/api'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import YouTube from 'react-youtube';


const opts = {
    height: '340',
    width: "600",
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};

class MainPage extends Component {
    constructor(){
        super();
        this.state= {
            news: [],
            paper:[],
            data: [
                {name: '14.02.18', total: 8, paid: 7},
                {name: '15.02.18', total: 9, paid: 9},
                {name: '16.02.18', total: 8, paid: 5},
                {name: '17.02.18', total: 9, paid: 6},
                {name: '18.02.18', total: 10, paid: 8},
                {name: '19.02.18', total: 10, paid: 10},
                {name: '20.02.18', total: 9, paid: 3}
            ]
        }
    };
    componentWillMount(){
        document.title = "Головна сторінка";
    }
    componentDidMount(){
        API.getNews().then((value)=>{
            console.log('getNews',value)
            this.setState({news:value.news})
            this.setState({paper:value.papers})
        });
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let newsFirst=this.state.news.slice(0,2).map((value)=>{
            let maxLength = 15;
            let title =value.title.length>15?value.title.substring(0, maxLength) + '...':value.title;
            let img = value.img===''?{backgroundImage: `url(${require('./images/newsPicture1.png')}`}:
                {backgroundImage: "url(http://admin.klimatkomplect.com.ua/image/news/"+value.img+")"};
            return(

                <div className="col newsBlock"  onClick={()=>this.props.history.push('/News/'+ value.id)}>
                    <div className="newsPicture d-flex justify-content-center align-items-center"
                         style={img}>
                        <div className="pictureTitle"> </div>
                    </div>
                    <div className="newsTitle d-flex justify-content-center">{title}</div>
                    <div className="newsDescription" style={{height:90}}>
                        {value.text}
                    </div>
                </div>
            )
        });

        let newsSecond=this.state.paper.slice(0,2).map((value)=>{
            let maxLength = 15;
            let title =value.title.length>15?value.title.substring(0, maxLength) + '...':value.title;
            let img = value.img===''?{backgroundImage: `url(${require('./images/newsPicture1.png')}`}:
                {backgroundImage: "url(http://admin.klimatkomplect.com.ua/image/news/"+value.img+")"};
            return(
                <div className="col newsBlock"  onClick={()=>this.props.history.push('/Paper/'+ value.id)}>
                    <div className="newsPicture d-flex justify-content-center align-items-center"
                         style={img}>
                        <div className="pictureTitle"> </div>
                    </div>
                    <div className="newsTitle d-flex justify-content-center">{title}</div>
                    <div className="newsDescription" style={{height:90}}>
                        {value.text}
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div style={{position:"absolute", zIndex:100, width:"100%", background:"#fff"}}>
                <Header/>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active  slider" >
                            <div className="container_wrap " style={{paddingTop:150}}>
                            <div className="carousel-caption d-md-block slid">
                                <div className="row">
                                <div className="textInSlider col-lg-5 col-sm-12 text-justify">
                                    КліматКомплект - офіційний та ексклюзивний постачальник вентиляційного обладнання передових брендів з країн Європи.
                                    <br/>
                                    Ми пропонуємо високоякісні вентиляційні установки усіх типів.
                                </div>
                                <div className="graf_1 col-6">
                                    <div className="text-center">
                                        {/*<CustomChart/>*/}
                                    </div>
                                </div>
                                </div>
                                <div className='icon-scroll'></div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item  slider" >
                            <div className="container_wrap " style={{paddingTop:150}}>
                                <div className="carousel-caption d-md-block slid">
                                    <div className="row">
                                        <div className="textInSlider col-lg-5 col-sm-12 text-justify">
                                            Нас обирають вже понад 15 років, досвідчені професіонали в Україні та за її межами, що бажають впроваджувати найновіші енергозберігаючі технології у свій доробок та дбати про навколишнє середовище.
                                        </div>
                                        <div className="graf_1 col-6">
                                            <div className="text-center">
                                                {/*<CustomChart/>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='icon-scroll'></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  slider" >
                            <div className="container_wrap " style={{paddingTop:150}}>
                                <div className="carousel-caption d-md-block slid">
                                    <div className="row">
                                        <div className="textInSlider col-lg-5 col-sm-12 text-justify">
                                            Автоматизований Підбір Обладнання - програма, розроблена у співпраці с провідними німецькими інженерами. Обере та чітко прорахує оптимальний варіант обладнання для ваших потреб та скерує у подальших діях.
                                        </div>
                                        <div className="graf_1 col-6">
                                            <div className="text-center">
                                                {/*<CustomChart/>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='icon-scroll'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="achievement">Наші досягнення</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-12 row" style={{display:"flex", justifyContent:"space-around"}}>
                            <div className="achievementBlock col-sm-12 col-lg-5">
                                <div className="achievementBlockTitle toptitle" >ЗБЕРЕЖЕННОЇ електроенергії</div>
                                <img className="achievementBlockImage" src={require("./images/roket.png")} alt="roket"/>
                                    <div className="achievementBlockTitle">Вистачить для ЗАПУСКУ РАКЕТИ</div>
                            </div>
                            <div className="achievementBlock col-sm-12 col-lg-5">
                                <div className="achievementBlockTitle toptitle">Наші вентилятори заробляють БІТКОЇНИ</div>
                                <img className="achievementBlockImage" src={require("./images/bitcoin.png")} alt="bitcoin"/>
                                <div className="achievementBlockTitle">Їх встановлюють для ОХОЛОДЖЕННЯ БІТКОЇН ФЕРМ</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 row" style={{display:"flex", justifyContent:"space-around"}}>
                            <div className="achievementBlock col-sm-12 col-lg-5">
                                <div className="achievementBlockTitle toptitle">НАЙБІЛЬШИЙ ВЕНТИЛЯТОР у зібраному стані</div>
                                <img className="achievementBlockImage" src={require("./images/vandamm.png")} alt="vandamm"/>
                                    <div className="achievementBlockTitle">Займав цілий ГРУЗОВИЙ АВТОМОБІЛЬ</div>
                            </div>
                            <div className="achievementBlock col-sm-12 col-lg-5">
                                <div className="achievementBlockTitle toptitle">Неймовірний Об‘єм ОЧИЩЕНОГО ПОВІТРЯ</div>
                                <img className="achievementBlockImage" src={require("./images/air.png")} alt="air"/>
                                    <div className="achievementBlockTitle">Можна СТВОРИТИ АТМОСФЕРУ на Місяці</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid aboutUs">
                    <div className="container_wrap">
                    <div className="row d-flex justify-content-center">
                        <div className="about">Про нас</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12" >
                            <Slider {...settings}>
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <YouTube
                                        videoId="o0DduApDpCI"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <YouTube
                                        videoId="GNrkDOlU6Eg"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="col">
                            <div className="aboutUsText">
                                Сьогодні будівельний ринок України <br/>
                                пропонує досить значний асортимент <br/>
                                вентиляційного обладнання. <br/><br/>

                                Опираючись на 15-річний досвід, ми <br/>
                                обираємо та успішно реалізуємо <br/>
                                надійні бренди вентиляційного <br/>
                                обладнання та на 100% відповідаємо <br/>
                                за його технічні характеристики.
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center" style={{paddingTop:20}}>
                        <div className="aboutButton">
                            Підібрати вентилятор
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="achievement">Новини та статті</div>
                    </div>
                    <div className="row">
                        <div className="col mr-lg-5">
                            <div className="row mb-4">
                                {newsFirst}
                            </div>
                            <div className="d-flex justify-content-center">
                                <span  onClick={()=>this.props.history.push('/AllNews')} className="allNews">Всі новини</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row mb-4">
                                {newsSecond}
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="allNews"  onClick={()=>this.props.history.push('/AllPaper')}>Всі статті</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid advantageSection">
                    <div className="container_wrap">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="advantage">
                                Головна перевага нашого обладнання
                                - саме енергоефективність, що
                                досягається завдяки передовим
                                технологіям та стандартам якості.
                                <br/><br/>
                                Сучасні енергозберігаючі та екологічні
                                технології виробництва, досвід,
                                злагодженість та професійний підхід –
                                це те, що дозволяє нашому
                                обладнанню досягти принципово
                                нового рівня якості.
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container whatYouGet">
                    <div className="row d-flex justify-content-center">
                        <span className="sectionTitles">Що ви отримаєте?</span>
                    </div>
                    <div className="text-center mb-5">
                <span className="whatYouGetText">
                    Великий досвід на ринку України та інших країн дозволив нам
                    створити професійну команду, що складається з провідних
                    технічних спеціалістів з вищою інженерною освітою, налагодити
                    систему логістики, а також надійну сервісну команду з
                    обслуговування обладнання.
                </span>
                    </div>
                    <div className="row d-flex justify-content-center mb-5">
                        <div className="row" style={{margin:0}}>
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/architect.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Проектування вентиляційних
                                            систем насправді є
                                            творчим процесом, а наші
                                            продукти дозволяють більш
                                            досконало реалізувати
                                            побажання Вашого замовника.
                                        </div>
                                </div>
                            </div>
                            <div className="col block_1" >
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/advantage_.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Запропоноване нами обладнання
                                            заощаджуватиме електроенергію
                                            інвестору, що має в першу
                                            чергу враховуватись при
                                            виборі вентиляційного обладнання.
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="row"  style={{margin:0}}>
                            <div className="col block_2">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/podium.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Крім того,  ми добре орієнтуємось
                                            у вартості обладнання, тому
                                            пропонуємо вигідні ціни на ринку України.
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="whatYouGetBlock">
                                    <img className="whatYouGetBlockImage" src={require("./images/customer-service.png")} alt=""/><br/>
                                        <div className="whatYouGetBlockText">
                                            Ми надаємо повну технічну
                                            підтримку та плануємо повний
                                            цикл робіт: від підбору
                                            обладнання, розрахунків
                                            та доставки, до подальшої
                                            його експлуатації.
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5">
                <span className="whatYouGetText col-12" style={{fontSize:20}}>
                    Головне правило нашої компанії: для успішного ведення бізнесу<br/>
                    НЕОБХІДНО ПЕРЕДБАЧАТИ ТЕНДЕНЦІЇ ТА ЗАВЖДИ БУТИ НА КРОК
                    ПОПЕРЕДУ ІНШИХ.
                </span>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default connect(state => ({state:state}))(withRouter(MainPage))