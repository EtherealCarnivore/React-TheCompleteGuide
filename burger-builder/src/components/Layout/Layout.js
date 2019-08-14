import React, {Fragment} from 'react';

import styles from '../Layout/Layout.module.css'

const layout = (props) => (
 <Fragment>
 <div>Toolbar, SideDrawer, Backdroup</div>
 <main className={styles.Content}>
     {props.children}
 </main>
 </Fragment>
);

export default layout;