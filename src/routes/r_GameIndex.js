import React, { PropTypes } from 'react';
import {connect} from 'dva';
import styles from './r_GameStyle.css';
import C_textBox from '../components/C_textBox/C_textBox';
import C_choiceBranch from '../components/C_choiceBranch/C_choiceBranch';

const GameIndex = ({dispatch,m_nextSentence}) => {
    
    const {CurrentStoryIndex,CurrentSentenceIndex,storyObj0} = m_nextSentence


    function nextSentence(text){
        dispatch({
            type:'m_nextSentence/showNext',
        })
    }

console.log(CurrentSentenceIndex)
var text = storyObj0[CurrentSentenceIndex].title;
// console.log(this.state)
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
