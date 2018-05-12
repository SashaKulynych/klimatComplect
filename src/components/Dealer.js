import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import './styles/dealer.css'
import {styles} from './styles/styles'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as API from "../actions/api";

class Dealer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab:1,
            add:[]
        };
        this.changeTab = this.changeTab.bind(this);
        this.Status =this.Status.bind(this)
    }
    changeTab(index){
        this.setState({tab:index})
    }

    async componentDidMount(){
        let userInfo = await JSON.parse(localStorage.getItem('userInfo'));
        await API.getShop(userInfo.id).then((value)=>{
            console.log('userInfo',value)
            this.setState({add:value})
        });
    }

    Status(value){
        if(value.status == 1 ){
            return(
            <tb style={{padding:15, color:"red"}}>Обробка</tb>
            )
        } else if (value.status == 2){
            return(
                <tb style={{padding:15, color:"yellow"}}>Готовий до видачі</tb>
            )
        }else if (value.status == 3){
            return(
                <tb style={{padding:15, color:"green"}}>Відправлено</tb>
            )
    }
    }

    render() {
        let model = this.state.add.map((value, index)=>{

            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.model_name}</td>
                    <td>{value.count}</td>
                    <td>{value.model_price}</td>
                    {this.Status(value)}
                </tr>
            )
        });
        return (
            <div>
                <Header/>
                <div className="dealer">
                    <div className="d-flex row container_wrap">
                        <p className="col-12 title mt-2 text-center">Корзина</p>
                        <div className="col-sm-12 col-lg-3 categoryMenu">
                            <ul className="list_del">
                                <li onClick={()=> this.setState({tab:1})}>
                                    <span className={this.state.tab===1?css(styles.borderYellow):null}>Історія покупок (звіт)</span>
                                </li>
                                <li  onClick={()=> this.setState({tab:2})}>
                                    <span className={this.state.tab===2?css(styles.borderYellow):null}>Семінари</span>
                                </li>
                                <li  onClick={()=> this.setState({tab:3})}>
                                    <span className={this.state.tab===3?css(styles.borderYellow):null}>Конференції</span>
                                </li>
                                <li  onClick={()=> this.setState({tab:4})}>
                                    <span className={this.state.tab===4?css(styles.borderYellow):null}>Інформація</span>
                                </li>
                                <li  onClick={()=> this.setState({tab:5})}>
                                    <span className={this.state.tab===5?css(styles.borderYellow):null}>Документація</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-lg-9 categoryView">
                            <table className="col-12 ">
                                <tr className="col-1">
                                    <th>№</th>
                                    <th>Назва</th>
                                    <th>Кількість</th>
                                    <th>Вартість</th>
                                    <th>Статус</th>
                                </tr>
                                {model}
                            </table>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}

export default connect(state => ({state:state}))(withRouter(Dealer))