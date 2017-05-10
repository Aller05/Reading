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
    ListView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Util from './../Util/Util';
import CDMineListView from './CDMineListView';
import CDMineSettingView from './CDMineSettingView';

const dataArr = require('./Mine/listData.json').data;

export default class extends Component{
    render(){
        return(
            <CDMineListView
                dataArr={dataArr}
                cellClick = {this._detailWithCellClick.bind(this)}
                headerView = {this._headerView()}
            />
        )
    }
    _detailWithCellClick(sectionID,rowID){
        switch(sectionID){
            case 0 :
                switch(rowID){
                    case 0 :
                    case 1 :
                    case 2 :
                    case 3 :
                        alert('点击了第'+sectionID+'组,第'+rowID+'行');
                        break;
                }
                break;
            case 1 :
                switch(rowID){
                    case 0 :
                    case 1 :
                    case 2 :
                        alert('点击了第'+sectionID+'组,第'+rowID+'行');
                        break;
                    case 3 :
                        this.props.navigator.push({
                            component:CDMineSettingView
                        });
                        break;
                }
                break;
        }

    }
    _headerView(){
        return(
            <View>
                <Image source={require('./../../images/mine.jpg')} style={styles.bgImgStyle}>
                    <TouchableOpacity style={styles.innerViewStyle}>
                        <Image source={require('./../../images/person.jpg')} style={styles.innerImgStyle}/>
                        <Text style={{fontSize:13,color:'#fff',fontWeight:'bold'}}>未登录用户</Text>
                    </TouchableOpacity>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgImgStyle:{
        width:Util.screen.width,
        height:Util.screen.height*0.4,
        alignItems:'center',
    },

    innerViewStyle: {
        width: 65,
        height: 90,
        position:'absolute',
        bottom:40,

    },
    innerImgStyle:{
        width:65,
        height:65,
        marginBottom:5,
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:32
    },
});