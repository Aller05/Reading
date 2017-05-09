/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
//引入第三方库
import Swiper from 'react-native-swiper';

//引入本地组件
import Util from './../Util/Util'
import CDMain from './CDMain';
import CDButton from './../Util/CDButton'

export default class extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isFirstOpen:true
        };
      }
    render(){
        if(this.state.isFirstOpen){
            return(
                <Swiper style={styles.wrapper}>
                    <View>
                        <Image source={require('./../../images/slider1.jpg')}
                               style={styles.imgStyle}/>
                    </View>
                    <View>
                        <Image source={require('./../../images/slider2.jpg')}
                               style={styles.imgStyle}>
                            <CDButton
                                btnStyle={styles.btnStyle}
                                innerTextStyle={styles.innerTextStyle}
                                title='立即体验'
                                btnClick={()=>this._ToReadView()}
                            />
                        </Image>
                    </View>
                </Swiper>
            )
        }else{
            return(
                <CDMain/>
            )
        }
    }
    _ToReadView(){
        this.props.navigator.replace({
            component:CDMain
        })
    }
}

const styles = StyleSheet.create({
    imgStyle:{
        width:Util.screen.width,
        height:Util.screen.height,
        alignItems: 'center',
    },
    btnStyle:{
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'red',
        position:'absolute',
        bottom:100,
        borderRadius:10,
    },
    innerTextStyle:{
        color:'red',
        fontFamily:'微软雅黑'
    },
});
