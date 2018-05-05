import { css, StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
    borderYellow:{
        borderLeft: '5px solid #ffea00'
    },
    li_docm:{
        display:"flex",
        cursor:"pointer",
        justifyContent:"center",
        ':nth-child(1n) > p':{
            marginTop:5,
            marginBottom:0,
            padding:"3px 50px 0 50px",
            fontSize:"30px",
            fontFamily:"Arial",
        }
    },
    li_docm_1:{
        display:"flex",
        cursor:"pointer",
        justifyContent:"center",
        ':nth-child(1n) > p':{
            padding:"3px 50px 0px 50px",
            background:"#4b9bff",
            fontSize:"30px",
            color:"white",
            marginTop:5,
            marginBottom:0,
            fontFamily:"Arial",
        }
    }
})