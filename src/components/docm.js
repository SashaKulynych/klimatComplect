import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import {styles} from './styles/styles'
import { css, StyleSheet } from 'aphrodite'
import {host} from '../actions/const'
import { connect } from 'react-redux'
import './styles/category.css'
import { withRouter } from 'react-router'
import * as API from "../actions/api";
import Loader from 'react-loader-spinner'
// import * as API from '../actions/api'


class Docm extends Component {
    constructor(props){
        super(props)
        this.state={
            tab:1,
            loading:true,
            allSubCategories:[],
            allProducts:[],
            products:[],
            categories:[],
            manufacts:[]
        }
    }
    async componentDidMount() {
        let categories_id = localStorage.getItem('categories_id');
        await API.getCategories().then(async (value)=> {
            let getManufact = await API.getManufact().then((val) => {
                    console.log('getManufact', val)
                    return val
                }
            )
            let getAllProducts = await API.getAllProducts().then((value)=>{
                console.log('getAllProducts',value)
                return value
            })
            let getAllSubCategories = await API.getAllSubCategories().then((value)=>{
                console.log('getAllSubCategories',value)
                return value
            })
            console.log('getCategories',value)
            this.setState({loading:false,categories: value,allSubCategories:getAllSubCategories,allProducts:getAllProducts,manufacts:getManufact})
            }
        );

    }

    Data(name){
        API.getData(name)
    }
    render() {
        let manufacts = this.state.manufacts.map((value,index)=>{
            return(
                <div key={index} onClick={() => this.setState({tab:value.id})}    className={`col-lg-4 col-sm-12 ${this.state.tab===value.id?css(styles.li_docm_1):css(styles.li_docm)}`}><p>{value.name}</p></div>
            )
        })

        let categories = this.state.categories.map((value,i)=>{
            if(this.state.tab===value.manufact_id){
                let array = []
                this.state.allSubCategories.map((val)=>{
                    if(val.category_id===value.id){
                        let prod = this.state.allProducts.filter((v)=>v.sub_category_id===val.id)
                        array=array.concat(prod)
                    }
                })
                return(
                    <div>
                        <div className="docm_div_1">
                            <span>{value.name}</span>
                        </div>
                        <div className="row" style={{margin:0,paddingLeft:20, position:"relative", zIndex:100, paddingTop:50,display:"flex", justifyContent:"center"}}>
                        {array.length!==0?array.map((val,index)=>{
                            return(
                                <div key={index} style={{marginLeft:20, marginRight:20}}>
                                    <a style={{paddingRight:10}} href={host+"api/get-techdata?name="+value.name}>
                                        <li key={index} style={{width:200,height:200,border:"1px solid #acacac", background:"#fff", listStyle:"none"}}>
                                            <div className="itemTop">
                                                {val.name}
                                            </div>
                                            <div className="item_2" style={{background:"#fff"}}>
                                                <img className="DocmPicture" src={require('./images/cooler.png')} alt=""/>
                                            </div>
                                            <div className="docmBottom">
                                                {val.name}
                                            </div>
                                        </li>
                                    </a>
                                </div>
                            )
                        }):null}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div>
                <Header/>
                <div>
                <div className="afterHeader">
                    <img style={{width:"100%"}} src={require('./images/pictureCategory.png')} alt=""/>
                </div>
                <div className="title_docm">
                    ТЕХНІЧНА ДОКУМЕНТАЦІЯ
                </div>
                {
                    this.state.loading?<div style={{textAlign:"center", padding:20}}><Loader
                        type="TailSpin"
                        color="yellow"
                        height="100"
                        width="100"
                        />
                        </div>:
                        <div>
                            <div className="row col-12 container_wrap">
                                {manufacts}
                            </div>
                            {categories}
                        </div>
                }
                </div>
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Docm))