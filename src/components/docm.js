import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import {styles} from './styles/styles'
import {css, StyleSheet} from 'aphrodite'
import {host} from '../actions/const'
import {connect} from 'react-redux'
import './styles/category.css'
import {withRouter} from 'react-router'
import * as API from "../actions/api";
import Loader from 'react-loader-spinner'
// import * as API from '../actions/api'


const categories_2 = [
    {id: 6, name: "Механічні аксесуари"},
]
const categories = [
    {id: 1, name: "Вентиляційні установки"},
    {id: 2, name: "Дахові вентилятори"},
    {id: 3, name: "Електричні аксесуари"},
    {id: 4, name: "Канальні вентилятори"},
    {id: 5, name: "Кухонні вентилятори"},
    {id: 6, name: "Механічні аксесуари"},
]


class products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabb: 2,
            loading: true,
            allSubCategories: [],
            allProducts: [],
            products: [],
            categories: [],
            manufacts: []
        }
    }

    async componentDidMount() {
    }


    render() {
        let cat = this.state.tabb === 2 ? categories : categories_2;
        console.log(cat)
        let categoriess = cat.map((value, i) => {
            return (
                <div style={{margin: "auto"}}>
                    <a style={{paddingRight: 10}} href={"/documentation/" + value.id}>
                        <li key={i}
                            style={{width: 300, border: "1px solid #acacac", background: "#fff", listStyle: "none"}}>
                            <div className="itemTop">
                                {value.name}
                            </div>
                            <div className="item_2" style={{background: "#fff"}}>
                                <img className="DocmPicture"
                                     src={require('./images/Вентиляційні установки/ACCUFLOW.png')} alt=""/>
                            </div>
                        </li>
                    </a>
                </div>
            )
        })

        return (

            <div>
                <Header/>
                <div>
                    {console.log(this.state.categories)}
                    <div className="title_docm">
                        ТЕХНІЧНА ДОКУМЕНТАЦІЯ
                    </div>
                </div>
                <div>
                    <div className="row col-12 container_wrap">
                        <div onClick={() => this.setState({tabb: 2})}
                             className={`col-lg-6 col-sm-12 ${this.state.tabb === 2 ? css(styles.li_docm_1) : css(styles.li_docm)}`}>
                            <p><img style={{width: "85px"}} src={require('./images/ruck.png')}/></p></div>
                        <div onClick={() => this.setState({tabb: 1})}
                             className={`col-lg-6 col-sm-12 ${this.state.tabb === 1 ? css(styles.li_docm_1) : css(styles.li_docm)}`}>
                            <p><img style={{width: "85px"}} src={require('./images/Logo_Sodeca_black.png')}/></p></div>
                    </div>
                    <div className="docm_div_1">
                        {this.state.tabb === 2 ? (<span>RUCK</span>) : (<span>SODEKA</span>)}
                    </div>
                    <div className="row col-12 doc_text">
                        <img className="col-3" src={require('./images/icon/401.png')} />
                        <p className="col-9" style={{fontSize:17}}>
                            Ruck Ventilatoren GmbH - сімейне підприємство, яке спеціалізується на виробництві високоякісних систем кондиціонування і вентиляції. Компанія поставляє на ринок широкий спектр стандартних виробів, таких як канальні вентилятори для круглих і прямокутних повітроводів, а також приділяє велику увагу розробці нової продукції і пошуку індивідуальних рішень.
                            <br/> <br />
                            З моменту заснування всі зусилля сімейного підприємства спрямовані на постійне вдосконалення продукції. Всі співробітники працюють в невимушеній сімейній обстановці, намагаючись досліджувати межі технічних можливостей і реалізувати їх на практиці з використанням сучасних засобів.
                        </p>
                    </div>
                    <div className="row col-12 container_wrap" style={{paddingTop: 25}}>
                        {categoriess}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(state => ({state: state}))(withRouter(products))