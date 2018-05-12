import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import {css, StyleSheet} from 'aphrodite'
import './styles/text.css'

import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class Reference extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="text">
                    <div className="textContainer container_wrap">
                        <div className="col-12 row ">
                            <div className="col-6 text_ser">
                                <p>За 15 років існування, ми сформували та вишколили професійний сервісний відділ, який
                                    досконало знає усі особливості та переваги нашого обладнання, тонкощі його
                                    інсталювання
                                    та експлуатації.</p>
                                <div className="row col-12" style={{margin:0}}>
                                    <img className="col-2" style={{height:"100%",paddingTop:20}} src={require("./images/icon/301.png")}/>
                                    <p className="col-10" style={{padding:10}}>Наші працівники регулярно проходять курси підвищення кваліфікації на
                                        заводах-виробниках в Європі,
                                        щоб завжди бути на хвилі актуальних трендів у своїй професійній сфері.
                                    </p>
                                </div>
                                <p>Ви можете бути впевнені, що буде знайдено варіант рішення для системи будь-якої
                                    складності та полагоджено кожен пошкоджений у процесі експлуатації елемент, якщо
                                    виникне
                                    така необхідність. </p>
                            </div>
                            <img className="col-6" src={require("./images/icon/ser_1.png")}/>
                        </div>
                        <div className="row col-12">
                            <div className="col-lg-6 col-sm-12 ref_bloc_1">
                                <img className="text-center" src={require("./images/icon/302.png")} />
                                <h5>Наш сервісний відділ вповноважений проводити гарантійне та пост-гарантійне обслуговування
                                    об’єктів.Якість наших сервісних послуг – постійний вектор нашого розвитку.</h5>
                            </div>
                            <div className="col-lg-6 col-sm-12 ref_bloc_1" style={{borderLeft:"1px solid #37384d"}}>
                                <img className="text-center" src={require("./images/icon/303.png")} />
                                <h5>Прибрати дефекти,
                                    налаштувати складний пристрій, підібрати параметри для специфічних умов? Наш сервісний
                                    відділ завжди знайде рішення задачі максимально комфортним за найменш затратним можливим
                                    шляхом</h5>
                            </div>
                        </div>
                        <p> .</p>
                        <p className="text-center" style={{fontSize:20}}>Не зволікайте та звертайтеся до нашого сервісного відділу при будь-яких ознаках несправності
                            або якщо виникають питання стосовно особливостей експлуатації обладнання.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(state => ({state: state}))(withRouter(Reference))