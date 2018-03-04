import React, {Component} from "react";
import UserForm from "./UserForm";
import Result from "./Result";
import {connect} from "react-redux";
import "../css/UserForm.css";


class App extends Component {

    render() {

        return (
            <div class="container">
                <div class="row flex-nowrap">
                    <div calss="col-5">
                        <UserForm/>
                    </div>
                    <div class="col-7">
                        <Result/>
                    </div>
                </div>

            </div>
        )
    }
}
export default App;
