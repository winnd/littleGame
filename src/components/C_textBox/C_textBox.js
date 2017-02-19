import React, { PropTypes } from 'react';
import styles from './C_textBox.less';

const TextBox = ({text,onClick}) => {
    
    return (
        <section className={styles.textBox} onClick={onClick}>
            {text}testsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </section>
    );
    
};

TextBox.propTypes = {
};

export default TextBox;

