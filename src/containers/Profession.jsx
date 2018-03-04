/**
 * Created by alexander on 23.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import ComboBoxField from "../components/ComboBoxField";

class Profession extends Component {

    render() {
        return (

            <ComboBoxField
                fieldName={this.props.field.name}
                disabled={this.props.disabled}
                error={this.props.field.error}
                options={this.props.professions}
                value={this.props.field.value}
                label={this.props.field.title}
                onSelect={this.props.onSelectProfession}
                onChange={this.props.onChangeProfession}
                onBlur={this.props.checkError}
                onFocus={this.props.cleanError}
            />
        )
    }
}

export default connect(state => ({
        professions: state.userForm.professions,
        profession: state.userForm.user.profession
    }),
    dispatch => ({

        onChangeProfession: (searchTerm) => {
            dispatch({
                type: 'SELECT_PROFESSION', payload: searchTerm
            });

            dispatch({
                type: 'SEARCH_PROFESSION_DATA', payload: searchTerm
            });

        },
        onSelectProfession: (value) => {
            dispatch({
                type: 'SELECT_PROFESSION', payload: value
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
)(Profession)