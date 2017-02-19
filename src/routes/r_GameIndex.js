import React, { PropTypes } from 'react';
import styles from './r_GameStyle.css';
import C_textBox from '../components/C_textBox/C_textBox';
import C_choiceBranch from '../components/C_choiceBranch/C_choiceBranch';
import {connect} from 'dva';

const GameIndex = ({dispatch,CurrentStoryIndex}) => {
    function nextSentence(text){
        dispatch({
            type:'m_nextSentence/showNext',
        })
    }


var text = "阿斯顿发";
console.log(CurrentStoryIndex)
    return (
        <div>
            <C_choiceBranch/>
            <C_textBox text={text} onClick={nextSentence}/>
        </div>
    );/* onClick={nextSentence}*/
};

export default connect(({m_nextSentence})=>({
    m_nextSentence
}))(GameIndex);
