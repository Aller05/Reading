/**
 * Created by Administrator on 2017/5/9.
 */
import React,{Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Util from './../Util/Util'

export default class extends Component{
    static propTypes={
        btnStyle:View.propTypes.style,
        innerTextStyle:Text.propTypes.style,
        title:PropTypes.string,
        btnClick:PropTypes.func
    };
    static defaultProps={
        btnClick(){}
    };
    render(){
        return(
            <TouchableOpacity
                style={[styles.container,this.props.btnStyle]}
                onPress={()=>this.props.btnClick()}
            >
                <Text
                    style={[styles.TextStyle,this.props.innerTextStyle]}
                >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:Util.screen.width*0.4,
        height:40,
        borderRadius:5,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    TextStyle:{
        color:'#fff',
        fontSize:16,

    }
});