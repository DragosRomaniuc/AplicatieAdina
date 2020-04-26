import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nume: 'asd'
        }
    }




    render() {
        console.log(this.props, 'Proprietatile din Header primite de la App')
        return (
            <div>
              blabla
            </div>
        )
    }
}

// this.props.proprietatileMele.auth 
// {
//     authSession: null,
//     isAuth: true
// };

const mapStateToProps = rootReducer => ({
   proprietatileMele: rootReducer.auth
 })
 
 
 export default connect(
     mapStateToProps
 )(Header);







// this.props.state.auth
//                 .user
//                 lectii
// echiv
// const mapStateToProps = rootReducer => ({
//    state: rootReducer
// })


// this.props.auth
// this.props.autentificare : {
//     authSession: null,
//     isAuth: false
// }


