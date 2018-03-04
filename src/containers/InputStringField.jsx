import React, {Component} from "react";
import {connect} from "react-redux";
import "../css/UserForm.css";
import StringField from "../components/StringField";
class InputStringField extends Component {

    onChange = (fieldName, value) => {
        this.props.onChangeField(fieldName, value);
        if (this.error) this.props.checkError(fieldName, value);
    };

    render() {
        return (
            <StringField
                onChange={this.onChange}
                onBlur={this.props.checkError}
                onFocus={this.props.cleanError}
                label={this.props.field.title}
                disabled={this.props.disabled}
                fieldName={this.props.field.name}
                error={this.props.field.error}
                value={this.props.field.value}
            />
        );
    }
}

export default connect(state => ({}),
    dispatch => ({
        onChangeField: (fieldName, value) => {
            dispatch({
                type: 'CHANGE_FIELD', payload: {fieldName: fieldName, value: value}
            });


        },
        checkError: (fieldName, value) => {
            dispatch({
                type: 'CHECK_ERROR', payload: {fieldName: fieldName, value: value}
            });
        },
        cleanError: (fieldName, value) => {
            dispatch({
                type: 'CLEAN_ERROR', payload: {fieldName: fieldName, value: value}
            });
        }


    })
)(InputStringField)