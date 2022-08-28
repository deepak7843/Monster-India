import React from 'react'
import Ps_searchItem from './Ps_searchItem'
import styles from '../Ps_style/Ps_style.module.css';

const Ps_jobSearchDetails = ({ele}) => {
  return (
    <div className={styles.searchBlock}>
        <div className={styles.searchName}>
            {ele.name}
        </div>
        <div>
            :&nbsp;
        </div>
        <div>
            {
            ele.arr.map(item=>{return <Ps_searchItem key={item} name={item}/>})
            }
        </div>
    </div>
  )
}

export default Ps_jobSearchDetails