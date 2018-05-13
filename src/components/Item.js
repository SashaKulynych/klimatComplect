import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './styles/item.css'
import { css, StyleSheet } from 'aphrodite'
import * as user from '../actions/user'
import Notifications, {notify} from 'react-notify-toast';

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as API from '../actions/api'
import {styles} from "./styles/styles";
import CustomChart from "./CustomChart"


let toast = { background: '#fed328', text: "#5f5f5f" };
class Item extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [
                {name: 20, total: 8, lol:10},
                {name: '15.02.18', total: 9, lol:10},
                {name: '16.02.18', total: 8, lol:10},
                {name: '17.02.18', total: 9, lol:10},
                {name: '18.02.18', total: 10, lol:10},
                {name: '19.02.18', total: 10, lol:10},
                {name: '20.02.18', total: 9, lol:10}
            ],
            product:{
                name:'',
                desc:''
            },
            model:[],
            shop:{
                user_id:0,
                model_id:0
            },
            add:[],
            article:'',
            img:[],
            activeImg:"",
            noimg:"no-photo.jpg",
        }
    }
    async componentDidMount() {

        let userInfo = await JSON.parse(localStorage.getItem('userInfo'));
        await API.getProduct(this.props.match.params.id).then((value) => {
            this.setState({product: value})
        });
        await API.getProductPhotos(this.props.match.params.id).then((response) => {
            console.log(response)
            if(response == 0){
                this.setState({activeImg:this.state.noimg})
            }else {
                this.setState({img: response, activeImg:response[0].img})

            }
        });

        await API.getModels(this.props.match.params.id).then((value) => {
            console.log('getModels', value)
            this.setState({model: value})
        });

        await this.state.model.map(value => {
            if(value.article !== 0){
                return (
                    API.getArticle(value.article).then((response) => {
                        this.setState({article:response})
                    })
                )
            }
        })


        if (userInfo !== null) {
            let shop = Object.assign({}, this.state.shop);
            shop.user_id = userInfo.id;
            this.setState({shop});
        }
        API.getArticle_3().then((response) =>{
            console.log(response)
        })
        console.log(this.state)
    }


    graf(dataa){
        let  data = dataa !== ""?(
            API.getArticle_2(dataa).then((response) => {
                console.log("res", response.fiveDutyPoints)
            })): null
    }
    async shopId(id){
        let shop = await Object.assign({}, this.state.shop);
        shop.model_id = id;
        await this.setState({shop});
        try{
            await API.shopAdd(this.state.shop).then((response)=>{
                if(response.status === 204) throw new Error('Товару немає в наявності');
                if(response.status !== 200 && response.status !==204) throw new Error('Проблема з відправкою');
                else API.getShop();
                return response.json();

            }).then(()=>{
                return notify.show("Товар доданий", "custom", 3000, toast);
            });
        }
        catch (e){notify.show(e.message, "error", 3000);}
    }



    render() {
        let img = this.state.img.map((value,index) =>{
            return(
                <div onClick={()=>this.setState({activeImg:value.img})} className={this.state.activeImg===value.img?css(styles.itemsActve):css(styles.items)} key={index}><img className="itemImage" src={`http://admin.klimatkomplect.com.ua/image/products/${value.img}`} alt=""/></div>
            )
        })
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let model = this.state.model.map((value, index)=>{
            return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.name}</td>
                            <td>{value.Qmax}</td>
                            <td>{value.p}</td>
                            <td>{value.u}</td>
                            <td>{value.w}</td>
                            <td>{value.w}</td>
                            <td>{value.Nt}</td>
                            <td>{value.Nst}</td>
                            <td>{value.Lwa}</td>
                            <td>{value.Lpa}</td>
                            <td>{value.Tmax}</td>
                            <td>{value.m}</td>
                            <td>{value.balance}</td>
                            <td>{value.price}</td>
                            {userInfo !==  null ?(<td style={{padding:0}}>
                                <div>
                                    <div style={{width:195, marginRight:3}} className="row addButtonStyle">
                                        <div className="circle">
                                            <i className="fas fa-check"/>
                                        </div>
                                        <span onClick={()=> this.shopId(value.id)}>додати в кошик</span>

                                    </div>
                                </div>
                            </td>): null
                            }
                        </tr>
            )
        });
        return (
            <div>
                <Header/>
                <div className="item container_wrap">
                    <div className="row itemContainer">
                        <div className="col-sm-12 col-lg-6 row" style={{borderRight:"1px solid black"}}>
                            <div className=" col-2 d-flex justify-content-between row">
                                {img}
                            </div>
                            <img className="col-10 itemImage" src={`http://admin.klimatkomplect.com.ua/image/products/${this.state.activeImg}`} alt=""/>

                        </div>
                        <div className="col d-flex flex-column justify-content-center rightPart">
                            {/*<div className="subTitle">*/}
                            {/*Lorem ipsum dolor*/}
                            {/*</div>*/}
                            <div className="title">
                                {this.state.product.name}
                            </div>
                            <div className="description">
                                {this.state.product.desc}
                            </div>
                            <div className="row col-12">
                                <div className="col-lg-4 rightButtonStyle col-sm-12">
                                    <span>Опис</span>
                                </div>
                                <div className="col-lg-4 rightButtonStyle col-sm-12">
                                    <span onClick={()=>this.props.history.push('/Docm')}>Технічні дані</span>
                                </div>
                                <div  className="col-lg-4 rightButtonStyle col-sm-12">
                                    <span >Характеристики</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="graf_1">
                            <CustomChart
                                height={300}
                                width={300}
                                innerRadius={100}
                                outerRadius={110}
                                id="d3-arc"
                                backgroundColor="#e6e6e6"
                                foregroundColor="#00ff00"
                                percentComplete={50}
                                article={[122228]}
                            />
                    </div>
                    <div className="col-sm-12 col-lg-12 categoryView">
                        <table className="col-12 ">
                            <tr className="col-1">
                                <th>№</th>
                                <th>Назва</th>
                                <th>Qmax<br/>[m3/h]</th>
                                <th>Pmax<br/>[m3/h]</th>
                                <th>U<br/>[V]</th>
                                <th>P<br/>[W]</th>
                                <th>I<br/>[A]</th>
                                <th>Nt<br/>[%]</th>
                                <th>Nst<br/>[%]</th>
                                <th>Lwa<br/>[dB(A)]</th>
                                <th>Lpa<br/>[dB(A)]</th>
                                <th>Tmax[<br/>[°С]</th>
                                <th>m[<br/>[kg]</th>
                                <th>Кількість</th>
                                <th>Вартість</th>
                                {userInfo !==null ?(<th>Замовити</th>):null}
                            </tr>
                    {model}
                        </table>
                    </div>
                </div>
                <Footer/>
                <Notifications options={{zIndex: 5000}} />
            </div>
        )
    }}
export default connect(state => ({state:state,userInfo:state.user}))(withRouter(Item))