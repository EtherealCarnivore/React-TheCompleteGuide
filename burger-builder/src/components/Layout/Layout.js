import React, {Fragment} from 'react';

const layout = (props) => (
 <Fragment>
 <div>Toolbar, SideDrawer, Backdroup</div>
 <main>
     {props.children}
 </main>
 </Fragment>
);

export default layout;