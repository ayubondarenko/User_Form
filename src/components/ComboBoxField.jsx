/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class ComboBoxField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false
        };
    }

    onEnter = (evt) => {
        if (event.keyCode == 13) {
            this.setState(...this.state, {showOptions: false});
        }
    };

    onChange = (evt) => {
        const value = evt.target.value;
        this.state.showOptions = !(!value );
        this.props.onChange(value);
    };

    onBlur = evt => {
        this.props.onBlur(this.props.fieldName, this.props.value);
        if (this.state.showOptions) {
            setTimeout(() => {
                this.setState(...this.state, {showOptions: false});
            }, 1000)
        }
    };

    onFocus = evt => {
        this.props.onFocus(this.props.fieldName, evt.target.value);
    };

    onSelect = (evt) => {
        this.setState(...this.state, {showOptions: false});
        this.props.onSelect(evt.target.value);
    };

    render() {
        const optionStyle = {cursor: 'pointer'};
        const optionsClass = "dropdown-menu " + (this.state.showOptions ? "d-block" : "d-none");

        return (

            <div onBlur={(e) => this.onBlur(e)}
                 className="col text-field dropdown">
                <label className="label">{this.props.label}</label>
                <input type='text'
                       disabled={this.props.disabled}
                       className={"form-control" + (this.props.error ? " error-fame" : "")}
                       data-toggle="dropdown"
                       onKeyPress={this.onEnter}
                       value={this.props.value}
                       placeholder={this.props.label}
                       onChange={(e) => this.onChange(e)}

                       onFocus={(e) => this.onFocus(e)}
                />
                {/**/}
                <div className={optionsClass}>
                    {this.state.showOptions ? this.props.options.map(o => (
                            <option class="pointer-cursor"
                                    key={o.id}
                                    value={o.name}
                                    onClick={(e) => this.onSelect(e)}
                                    style={optionStyle}>
                                {o.name}
                            </option>
                        )) : ""}
                </div>
                {this.props.error ?
                    <div class="flex error-field" role="alert">
                        {this.props.error}
                    </div> : "" }
            </div>
        )
    }
}
