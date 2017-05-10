/**
 * Created by Administrator on 2017/5/10.
 */
import React, {Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    Switch,
} from 'react-native';

import Util from './../Util/Util';

export default class extends Component {
    static propTypes = {
        dataArr : PropTypes.array,
        cellClick : PropTypes.func,
        headerView : PropTypes.object,
        footerView : PropTypes.object,
    };
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob,sectionID)=>{
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob,sectionID,rowID)=>{
            return dataBlob[sectionID +':'+ rowID];
        };
        this.state = {
            dataSource : new ListView.DataSource({
                getSectionData : getSectionData,
                getRowData : getRowData,
                rowHasChanged : (r1,r2)=>r1 !== r2,
                sectionHeaderHasChanged : (s1,s2)=>s1 !== s2,
            }),
            switchSelected:true,
        };
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                renderRow={this._renderRow.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
                renderFooter={this._renderFooter.bind(this)}
            />
        )
    }

    componentDidMount(){
        const dataArr = this.props.dataArr;
        var dataBlob = [], sectionIDs = [], rowIDs = [], rowArr = [];

        dataArr.forEach((value,index)=>{
            //1.放入组号
            sectionIDs.push(index);
            //2.放入组内容
            dataBlob[index] = value.sData;
            //3.取出每组的行内容
            rowArr = value.rData;
            rowIDs[index] = [];
            //4.遍历行内容数组
            rowArr.forEach((item,i)=>{
                //4.1放入行号
                rowIDs[index].push(i);
                //放入行内容
                dataBlob[index +':'+i] = item;
            })
        });
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });
    }
    _renderHeader(){
        if(this.props.headerView !== ''){
            return this.props.headerView;
        }else{
            return <View/>
        }
    }
    _renderSectionHeader(sectionData){
        if(sectionData.title !== ''){
            return(
                <View>
                    <Text>{sectionData.title}</Text>
                </View>
            )
        }else{
            return(
                <View style={{height:sectionData.height}}/>
            )
        }
    }
    _renderRow(rowData,sectionID,rowID){
        return(
            <TouchableOpacity style={styles.rowStyle} onPress={()=>this.props.cellClick(sectionID,rowID)}>
                {/*左侧视图*/}
                {this._LeftRenderRow(rowData)}
                {/*右侧视图*/}
                {this._RightRenderRow(rowData)}
            </TouchableOpacity>
        )
    }
    _LeftRenderRow(rowData){
        let temp;
        if(rowData.leftIcon !== ''){//有图片
            if(rowData.name !== ''){//有图片也有文字
                temp = (
                    <View style={styles.betweenRowStyle}>
                        <Image source={{uri:rowData.leftIcon}} style={styles.imgStyle}/>
                        <Text style={{fontSize:12,marginLeft:8}}>{rowData.name}</Text>
                    </View>
                )
            }else{//没有文字只有图片
                temp = (
                    <View style={styles.betweenRowStyle}>
                        <Image source={{uri:rowData.leftIcon}} style={styles.imgStyle}/>
                    </View>
                )
            }
        }else if((rowData.leftIcon == ''|| rowData.leftIcon == 'undefined') && rowData.name !== ''){//没有图片有文字
            temp = (
                <View style={styles.betweenRowStyle}>
                    <Text style={{fontSize:12,marginLeft:8}}>{rowData.name}</Text>
                </View>
            )
        }else{//没有图片也没有文字
            temp = <View/>
        }
        return temp;
    }
    _RightRenderRow(rowData){
        let temp;
        if(rowData.disc !==''){
            if(rowData.disc == 'switch'){//开关
                temp = (
                    <View style={styles.betweenRowStyle}>
                        <Switch
                            value= {this.state.switchSelected}
                            onValueChange={()=>this.setState({
                               switchSelected: !this.state.switchSelected
                            })}
                        />
                    </View>
                )
            }else{//不是开关
                temp = (
                    <View style={styles.betweenRowStyle}>
                        <Text style={{fontSize:12}}>{rowData.disc}</Text>
                        <Image
                            source={require('./../../images/icon_shike_arrow.jpg')}
                            style={[styles.imgStyle,{width:7,height:12,marginRight:8}]}
                        />
                    </View>
                )
            }
        }else{
            temp = (
                <View style={styles.betweenRowStyle}>
                    <Image
                        source={require('./../../images/icon_shike_arrow.jpg')}
                        style={[styles.imgStyle,{width:7,height:12,marginRight:8}]}
                    />
                </View>
            )
        }
        return temp;
    }
    _renderFooter(){
        if(this.props.footerView !== ''){
            return this.props.footerView;
        }else{
            return <View/>
        }
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Util.bgColor
    },
    rowStyle:{
        width:Util.screen.width,
        height:44,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    },
    imgStyle:{
        width:17,
        height:17,
        marginLeft:8,
    },
    betweenRowStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});