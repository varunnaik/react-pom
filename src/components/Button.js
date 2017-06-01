import React from 'react'
import PropTypes from 'prop-types';
import 'skeleton-css/css/skeleton.css'

const Button = (props) => <button className={(props.type === "main")?"button-primary":""} onClick={props.action}>{props.label}</button>

Button.propTypes = {
	type:PropTypes.string,
    label:PropTypes.string.isRequired,
    action:PropTypes.func.isRequired
}
export default Button