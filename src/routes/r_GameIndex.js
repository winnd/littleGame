import React, { PropTypes } from 'react';
import styles from './r_GameStyle.css';
import C_textBox from '../components/C_textBox/C_textBox';
import C_choiceBranch from '../components/C_choiceBranch/C_choiceBranch';
import {connect} from 'dva';

const GameIndex = ({}) => {
    function nextSentence(targetJson){
        dispatch({
            type:'m_nextSentence/nextSentence',
            r_try:targetJson,
        })
    }


    return (
        <div>
            <C_choiceBranch/>
            <C_textBox onClick={nextSentence}/>
        </div>
    );
};

export default connect(({m_nextSentence})=>({
    m_nextSentence
}))(GameIndex);
