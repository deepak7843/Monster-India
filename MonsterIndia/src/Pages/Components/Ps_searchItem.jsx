import React from 'react';
import styles from '../Ps_style/Ps_style.module.css';

const Ps_searchItem = ({name}) => {
  return (
        <span><a className={styles.item} href="">{name}</a>&nbsp;|&nbsp;</span>
  )
}

export default Ps_searchItem