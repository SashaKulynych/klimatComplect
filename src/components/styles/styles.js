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
            ':nth-child(1n) > img':{
                width:85
            }
        }
    },
    li_docm_1:{
        display:"flex",
        cursor:"pointer",
        justifyContent:"center",
        ':nth-child(1n) > p':{
            padding:"3px 10px 0px 10px",
            background:"#fdbb1d",
            fontSize:"30px",
            color:"white",
            marginTop:5,
            marginBottom:-40,
            fontFamily:"Arial",
            ':nth-child(1n) > img':{
                width:181,
                position:'relative',
                zIndex:1
            }

        }
    },
    items:{
        width:80,
        height:80,
        cursor:"pointer",
        borderRadius:50,
        background:"#dcdcdc",
    },
    itemsActve:{
        width:80,
        height:80,
        cursor:"pointer",
        borderRadius:50,
        border:"2px solid #e18c44",
        background:"#dcdcdc",
    }
})