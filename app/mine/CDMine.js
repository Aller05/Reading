/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView
} from 'react-native';
import Util from './../Util/Util';
import CDMineListView from './CDMineListView';
const dataArr = require('./Mine/listData.json').data;

export default class extends Component{
    render(){
        return(
            <CDMineListView
                dataArr={dataArr}
                cellClick = {this._detailWithCellClick.bind(this)}
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
                        alert('点击了第'+sectionID+'组,第'+rowID+'行');
                        break;
                }
                break;
        }

    }
}

const styles = StyleSheet.create({

});