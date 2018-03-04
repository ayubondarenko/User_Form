/**
 * Created by alexander on 23.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

class Profession extends Component {

    onChange = evt => {
        this.props.onChangePhone(this.props.field.name, evt.target.value);
    };
    onBlur = evt => {
        this.props.checkError(this.props.field.name, evt.target.value);
    };
    onFocus = evt => {
        this.props.cleanError(this.props.field.name, evt.target.value);
    };
    selectFlag = evt => {
        const value = evt.target.getAttribute("value")
        this.props.onChangeCountry(value);
    };


    render() {

        const country = this.props.country.code ? this.props.country :
            this.props.countries ? this.props.countries[0] : {code: "", name: ""};

        return (
            <div className="col flex text-field">
                <label className="label">Телефон</label>
                <div class="d-flex p-2 input-group mb-3 flex-nowrap ">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary dropdown-toggle"
                                disabled={this.props.disabled}
                                type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            {country.code ? <img src={'pic/countries/' + country.flag}/> : ""}
                        </button>
                        <div class="dropdown-menu">
                            {this.props.countries ?
                                this.props.countries.map((c, i) => (
                                    <div
                                        onClick={(e) => this.selectFlag(e)}
                                        key={i}
                                        value={i}
                                        class="dropdown-item pointer-cursor">
                                        <img value={i}
                                             class="pointer-cursor"
                                             src={'pic/countries/' + c.flag}/>
                                        &nbsp; {c.name}
                                    </div>)
                                ) : ""}
                        </div>
                    </div>
                    <div className={"d-flex flex-nowrap form-control"+ (this.props.field.error ? " error-fame":"")}>
                        <div class="phone-code p-2 "><b >{this.props.country.code}</b></div>
                        <input
                            class="input-text flex "
                            disabled={this.props.disabled}
                            placeHolder={this.props.country.placeHolder ? this.props.country.placeHolder : ""}
                            value={this.props.field.phone}
                            onChange={(e) => this.onChange(e)}
                            onBlur={(e) => this.onBlur(e)}
                            onFocus={(e) => this.onFocus(e)}
                            aria-label="phone"/>
                    </div>
                </div>
                {this.props.field.error ?
                    <div class="flex error-field" role="alert">
                        {this.props.field.error}
                    </div> : "" }
            </div>
        )
    }
}

export default connect(state => ({
        countries: state.userForm.countries,
        country: state.userForm.user.country
    }),
    dispatch => ({

        onChangeCountry: (countryIndex) => {
            dispatch({
                type: 'CHANGE_PHONE_COUNTRY', payload: countryIndex
            });

        },

        // onChangePhone1: (value) => {
        //     dispatch({
        //         type: 'CHANGE_PHONE', payload: value
        //     });
        // },
        onChangePhone: (fieldName, value) => {
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
)(Profession)