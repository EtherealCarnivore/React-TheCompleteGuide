import React from 'react';

import styles from './NavigationItem.module.css';

const navigationItem  = (props) => {
    return <li className={styles.NavigationItem}>
        <a 
        href={props.destination}
        className={props.active ? styles.active : null}
        >{props.children}</a>
        </li>
};


export default navigationItem;