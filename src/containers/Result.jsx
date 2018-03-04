import React, {Component} from "react";
import {connect} from "react-redux";
import "../css/UserForm.css";
class Result extends Component {

    render() {

        const user = JSON.stringify(this.props.user, undefined, 4);

        return (
            <div class="result">
                {this.props.user.registered ?
                    <pre>Результат:
                        Зарегистрированный пользователь: =<br/> {user}
                    </pre>
                    : ""}
            </div>
        );
    }
}

export default connect(state => ({
    user: state.userForm.user
}))(Result)