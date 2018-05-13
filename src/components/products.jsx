import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { css, StyleSheet } from 'aphrodite'
import { connect } from 'react-redux'
import './styles/category.css'
import { withRouter } from 'react-router'
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,Legend,ResponsiveContainer } from 'recharts';
// import * as API from '../actions/api'



const Ventilation =[
    {id:14590, name:"ROTO K...H", img:'./images/Вентиляційні установки/RLI.png'},
    {id:12470, name:"ROTO RLI", img:'./images/Вентиляційні установки/ROTO K H.png'},
    {id:8925, name:"SL...E J",img:'./images/Вентиляційні установки/SL.png'},
    {id:7440, name:"SL...E", img:'./images/Вентиляційні установки/SL E S.png'},
    {id:6310, name:"ROTO K...V", img:'./images/Вентиляційні установки/ROTO K...V.png'},
    {id:3390, name:"ETA K...F", img:'./images/Вентиляційні установки/ETA K...F.png'},
    {id:3210, name:"ETA K...H", img:'./images/Вентиляційні установки/ETA K...H.png'},
    {id:3165, name:"ETA K...V", img:'./images/Вентиляційні установки/ETA K...V.png'},
    {id:2780, name:"ACCUFLOW", img:'./images/Вентиляційні установки/ACCUFLOW.png'},
    {id:1270, name:"FFH...EC", img:'./images/Вентиляційні установки/FFH.png'},




]
const Roof =[
    {id:16280, name:"DHA...ECP", img:'./images/Дахові вентилятори/DHA...ECP.png'},
    {id:16280, name:"DHA...EC", img:'./images/Дахові вентилятори/DHA...EC.png'},
    {id:15300, name:"DVN", img:'./images/Дахові вентилятори/DVN.png'},
    {id:15300, name:"DVNI", img:'./images/Дахові вентилятори/DVNI.png'},
    {id:14115, name:"DVA...EC", img:'./images/Дахові вентилятори/DVA...EC.png'},
    {id:14115, name:"DVA...ECC", img:'./images/Дахові вентилятори/DVA...ECC.png'},
    {id:14115, name:"DVA...ECCP", img:'./images/Дахові вентилятори/DVA...ECCP.png'},
    {id:14115, name:"DVA...ECP", img:'./images/Дахові вентилятори/DVA...ECP.png'},
    {id:11950, name:"DHA", img:'./images/Дахові вентилятори/DHA.png'},
    {id:11950, name:"DHA...P", img:'./images/Дахові вентилятори/DHA...P.png'},
    {id:10960, name:"DVA", img:'./images/Дахові вентилятори/DVA.png'},
    {id:10960, name:"DVA...P", img:'./images/Дахові вентилятори/DVA...P.png'},
    {id:1370, name:"DHA...ECCP", img:'./images/Дахові вентилятори/DHA...ECCP.png'},
    {id:1370, name:"DHA...ECP_20", img:'./images/Дахові вентилятори/DHA...ECP 20.png'},
    {id:1270, name:"DHA Kunststoff", img:'./images/Дахові вентилятори/DHA...KUSNSTSTOFF.png'},
    {id:900, name:"DHA...P Kunststoff", img:'./images/Дахові вентилятори/DHA...P Kunststoff.png'},
]

const Channel =[
    {id:20760, name:"ETALINE...EC", img:'./images/Канальні вентилятори/EL...EС.png'},
    {id:20220, name:"ETALINE...D", img:'./images/Канальні вентилятори/EL...D 1.png'},
    {id:17410, name:"MPC", img:'./images/Канальні вентилятори/MPC.png'},
    {id:16300, name:"MPC...EC", img:'./images/Канальні вентилятори/MPC EC.png'},
    {id:13940, name:"ETALINE...E", img:'./images/Канальні вентилятори/EL...E 1.png'},
    {id:12460, name:"KVR...EC", img:'./images/Канальні вентилятори/KVR...EC.png'},
    {id:11505, name:"KVRI...EC", img:'./images/Канальні вентилятори/KVRI...EC.png'},
    {id:11460, name:"KVR", img:'./images/Канальні вентилятори/KVR.png'},
    {id:10610, name:"KVRI", img:'./images/Канальні вентилятори/KVRI.png'},
    {id:10050, name:"ELKI", img:'./images/Канальні вентилятори/ELKI.png'},
    {id:10410, name:"EMKI...EC", img:'./images/Канальні вентилятори/EMKI...EC.png'},
    {id:9640, name:"KVT", img:'./images/Канальні вентилятори/KVT.png'},
    {id:5700, name:"ETAMASTER...EC", img:'./images/Канальні вентилятори/EM...EC.png'},
    {id:4480, name:"ISOR...EC", img:'./images/Канальні вентилятори/ISOR...EC.png'},
    {id:3870, name:"ISOR", img:'./images/Канальні вентилятори/ISOR.png'},
    {id:3300, name:"ETAMASTER...M", img:'./images/Канальні вентилятори/EM...M.png'},
    {id:3240, name:"EMIX...M", img:'./images/Канальні вентилятори/EMIX...M.png'},
    {id:3230, name:"EMIX...EC", img:'./images/Канальні вентилятори/EMKI...EC.png'},
    {id:1990, name:"RS...EC", img:'./images/Канальні вентилятори/RS...EC.png'},
    {id:1760, name:"RS", img:'./images/Канальні вентилятори/RS.png'},
    {id:1710, name:"ETALINE...M", img:'./images/Канальні вентилятори/EL...M.png'},
    {id:810, name:"ISORX...S", img:'./images/Канальні вентилятори/ISORX...S.png'},
    {id:315, name:"ETAMASTER...E", img:'./images/Канальні вентилятори/EM...E.png'},
]

const Kitchen=[
    {id:17540, name:"MPC...T", img:'./images/Кухонні вентилятори/MPC T.png'},
    {id:15300, name:"DVN", img:'./images/Кухонні вентилятори/DVN.png'},
    {id:15300, name:"DVNI", img:'./images/Кухонні вентилятори/DVNI.png'},
    {id:11840, name:"MPS", img:'./images/Кухонні вентилятори/MPS.png'},
    {id:6710, name:"MPC...EC T", img:'./images/Кухонні вентилятори/MPC EC T.png'},
    {id:6690, name:"MPX", img:'./images/Кухонні вентилятори/MPX.png'},
    {id:6245, name:"MPS...EC", img:'./images/Кухонні вентилятори/MPS EC.png'},
]



class Docm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            categories:[],
        }
    }


    async componentDidMount() {
        if(this.props.match.params.id == 1){
            this.setState({categories:Ventilation}
            )
            this.setState({name:"ВЕНТИЛЯЦІЙНІ УСТАНОВКИ"})
        }else if (this.props.match.params.id == 2){
            this.setState({categories:Roof})
            this.setState({name:"ДАХОВІ ВЕНТИЛЯТОРИ"})
        }else if (this.props.match.params.id == 3){
            this.setState({categories:[]})
            this.setState({name:"ЕЛЕКТРИЧНІ АКСЕСУАРИ"})
        }else if (this.props.match.params.id == 4){
            this.setState({categories:Channel})
            this.setState({name:"КАНАЛЬНІ ВЕНТИЛЯТОРИ"})
        }else if (this.props.match.params.id == 5){
            this.setState({categories:Kitchen})
            this.setState({name:"КУХОННІ ВЕНТИЛЯТОРИ"})
        }else if (this.props.match.params.id == 6){
            this.setState({categories:[]})
            this.setState({name:"МЕХАНІЧНІ АКСЕСУАРИ"})
        }
    }

    handleClick(value) {
        window.open('http://admin.klimatkomplect.com.ua/api/get-techdata?name='+value.activeLabel);
        console.log(value.activeLabel)
    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div className="title_docm">
                        {this.state.name}
                    </div>
                </div>
                <div>
                    <div className="row col-12 container_wrap" >
                        <div  style={{margin:"auto", height:"100%"}} className="row">
                            <BarChart
                                    onClick={(e)=>this.handleClick(e)}
                                    width={1000}
                                    height={600}
                                    data={this.state.categories}
                                    layout="vertical"
                                    margin={{top: 60, right: 30, left: 20, bottom: 40}}
                                >
                                    <XAxis type="number" dataKey="id"/>
                                    <YAxis width={100}  type="category" dataKey="name"  />
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend height={550} />
                                    <Bar name='Vmax (m3/h)' dataKey="id" fill="#ffd75f"  />
                                    </BarChart>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}
export default connect(state => ({state:state}))(withRouter(Docm))