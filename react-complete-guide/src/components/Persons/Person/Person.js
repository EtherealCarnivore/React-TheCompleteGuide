import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../HOC/withClass'
import './Person.css';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props){
        super(props);
     this.inputElement = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElement.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...')
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {(context) => 
                        context.authenticated ? <p>Authenticated!</p> : <p>Please, log in!!</p>}
                </AuthContext.Consumer>
                {}
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>
            <input
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElement} 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
            </Fragment>
        );
    }
   
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, 'Person');
