import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import React, {Component} from "react";
import {connect} from "react-redux";
import "../css/UserForm.css";
import InputStringField from "../containers/InputStringField";
import Profession from "./Profession";
import Phone from "./Phone";

class userForm extends Component {

    render() {
    return (<div class=" col ">
                <div class="text-center ">
                    <h5><b>Зарегистрируйтесь</b> и начните продавать
                        услуги через интернет уже сегодня
                    </h5>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="p-2">
                        <InputStringField
                            field= {this.props.user.firstName}
                            disabled = {this.props.user.registered}
                        />
                    </div>
                    <div class="p-2">
                        <InputStringField
                            field= {this.props.user.lastName}
                            disabled = {this.props.user.registered}
                        />
                    </div>
                </div>
            <div class="col">
                <Profession
                    field={this.props.user.profession}
                    disabled={this.props.user.registered}
                />
                <Phone
                    field={this.props.user.phone}
                    disabled={this.props.user.registered}
                />
            </div >
                <div class="d-flex justify-content-center reg-button ">
                    <button type="button" onClick={e => this.props.onRegister(e)} class="btn btn-primary btn-lg">
                        Зарегистрироватся
                    </button>
                </div>
            </div>
        );
    }
}
// export default userForm;


export default connect(state => ({user: state.userForm.user}),
    dispatch => ({
        onRegister: () => {
            dispatch({
                type: 'REGISTER_USER', payload: {}
            });
        }
    })
)(userForm)
