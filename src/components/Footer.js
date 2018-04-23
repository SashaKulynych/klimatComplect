import React, { Component } from 'react';
import './styles/footer.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid  footerContainer">
                    <div className=" container_wrap">
                    <div className="row ml-0 mr-0">
                        <div className="col-lg-3 col-sm-12 footerBlockLeft d-flex justify-content-center align-items-center">
                            <div className="footerLogoTextLeft">Клімат</div>
                            <img className="footerLogoImage" src={require("./images/logo.png")} alt="Logo"/>
                            <div className="footerLogoTextRight">Комплект</div>
                        </div>
                        <div style={{margin:"auto"}} className="col-lg-6 col-sm-12  row d-flex justify-content-center footerCenter">
                            <div className="col-sm-12 col-lg-6 ">
                                <ul className="footerList">
                                    <li onClick={()=>this.props.history.push('/about')}>Про нас</li>
                                    <li onClick={()=>this.props.history.push('/Docm')}>Обладнання</li>
                                    <li onClick={()=>this.props.history.push('/reference')}>Референс</li>
                                    <li onClick={()=>this.props.history.push('/contacts')}>Контакти</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-lg-6 ">
                                <ul className="contacts">
                                    <li style={{fontSize:20}} >Контакти</li>
                                    <li><i className="fas fa-envelope contactIcons"/>info@klimatkomplect.com.ua</li>
                                    <li><i className="fas fa-phone-volume contactIcons"/>+38 (044) 379 10 90</li>
                                </ul>
                                <div className="row footer_icon col-lg-12 col-sm-11 " >
                                    <div className="fb">
                                        <a href="https://www.facebook.com/klimatkomplekt/"><i className="fab fa-facebook-f"/></a>
                                    </div>
                                    <div className="tw">
                                        <a href="https://plus.google.com/u/4/110288975361999381293?hl=ru"><i className="fab fa-google-plus-g"> </i></a>
                                    </div>
                                    <div className="ig">
                                        <a href="https://www.instagram.com/klimatkomplekt.com.ua/"><i className="fab fa-instagram"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{margin:0}} className="col-lg-3 col-sm-12 row align-items-center justify-content-center">
                            <div className="delivery">
                                <img  src={require("./images/truck.png")} style={{width:150}} alt=""/>
                                <div className="deliveryText">Доставка 24 години</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div  className='col-12 text-center row' style={{position:"absolute", bottom:1, display:'flex', justifyContent:"center" }}>
                       <a href="https://www.patprofi.com/"><img src={require('./images/logo_com.png')} style={{height:45}} /></a>
                        <div>
                        <a href="https://www.patprofi.com/" style={{color:"#fff",fontFamily:"Open Sans", textAlign:'left', display:"flex", paddingLeft:5}}> Розробка сайту <br/> компанія P.A.T.Profi</a>
                        </div>
                    </div>
                </div>
                </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Footer))