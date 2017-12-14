import React, { Component } from 'react';

class ProductLines extends Component{

	render(){
		console.log(this.props);
		console.log(this.props.pl)
		
		return(
			<h1>Welcome to the {this.props.match.params.productLine} page</h1>
		)
	}
}

function mapStateToProps(state) {
	return{
		pl: state.pl
	}
}

export default ProductLines;