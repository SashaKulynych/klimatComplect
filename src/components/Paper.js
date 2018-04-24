import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './styles/item.css'
import { css, StyleSheet } from 'aphrodite'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as API from '../actions/api'


class Paper extends Component {
    constructor(props){
        super(props)
        this.state={
            News:{
            }
        }


    }
    async componentDidMount(){
        await API.getOneNews(this.props.match.params.id).then((value)=>{
            console.log('getNews',value)
            this.setState({News:value})
        });
    }

    render() {
        let img = this.state.News.img===''?{backgroundImage: `url(${require('./images/newsPicture1.png')}`}:
            {backgroundImage: "url(http://admin.klimatkomplect.com.ua/image/news/"+this.state.News.img+")"};
        return (
            <div>
                <Header/>
                <div className="afterHeader">
                    <img style={{width:"100%"}} src={require('./images/pictureCategory.png')} alt=""/>
                </div>
                <div className="col-lg-12  mt-5" >
                    <div className="newsTitle d-flex justify-content-center mb-3">{this.state.News.title}</div>
                    <div className="newsPicture d-flex justify-content-center align-items-center col-12"
                         style={img}>
                    </div>

                    <div   className="newsDescription col-md-10 col-sm-12 container_wrap" style={{color:"#000",padding:"20px 30px 0 30px" ,fontSize:24, textAlign:"justify"}}>
                        {this.state.News.text}
                    </div>
                </div>}
                {console.log(this.state)}
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Paper))