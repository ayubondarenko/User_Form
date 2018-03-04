/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class StringField extends Component {
    onChange = evt => {
        this.props.onChange(this.props.fieldName, evt.target.value,this.props.error );
    };
    onBlur = evt => {
        if (this.props.onBlur)
            this.props.onBlur(this.props.fieldName, evt.target.value);
    };

    onFocus = evt => {
        if (this.props.onFocus)
            this.props.onFocus(this.props.fieldName, evt.target.value);
    };

    render() {
        return (
            <div className="col text-field">
                <label class="label">{this.props.label}</label>
                <input type='text'
                       onBlur={(e) => this.onBlur(e)}
                       onFocus={(e) => this.onFocus(e)}
                       disabled={this.props.disabled}
                       className={"form-control" + (this.props.error ? " error-fame":"")}
                       value={this.value}
                       placeholder={this.props.label}
                       onChange={(e) => this.onChange(e)}/>
                {this.props.error ?
                    <div class="flex error-field" role="alert">
                        {this.props.error}
                    </div> : "" }
            </div>

        )
    }
}