import React, {Fragment, Component} from 'react';

import styles from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };
 
    render() {
     return ( 
        <Fragment>
            <Toolbar />
            <SideDrawer open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
         <main className={styles.Content}>
            {this.props.children}
        </main>
        </Fragment>
        );
    }
}



export default Layout;