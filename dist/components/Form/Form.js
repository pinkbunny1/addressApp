var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        // static propTypes = {
        // }
        //  why use static propTypes ????
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            firstname: _this.props.firstname ? _this.props.firstname : '',
            lastname: _this.props.lastname ? _this.props.lastname : '',
        };
        _this.onDelete = function () {
            _this.props.onDelete();
            _this.props.history.push('/');
        };
        _this.onFormSubmit = function (e) {
            e.preventDefault();
            _this.props.onSubmit({
                firstname: _this.state.firstname,
                lastname: _this.state.lastname,
            });
            _this.props.history.push('/');
        };
        _this.onNameChange = function (e) {
            var _a;
            var name = e.target.name;
            var value = e.target.value;
            _this.setState((_a = {}, _a[name] = value, _a));
        };
        return _this;
    }
    Form.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, firstname = _a.firstname, lastname = _a.lastname;
        if (prevProps.firstname !== firstname || prevProps.lastname !== lastname) {
            this.setState({ firstname: firstname });
            this.setState({ lastname: lastname });
        }
    };
    Form.prototype.render = function () {
        var _a = this.state, firstname = _a.firstname, lastname = _a.lastname;
        var btnName = this.props.btnName;
        return (React.createElement("form", { className: "addressForm", onSubmit: this.onFormSubmit },
            React.createElement("div", null,
                React.createElement("label", null, "First name: "),
                ' ',
                React.createElement("input", { type: "text", name: "firstname", value: firstname, onChange: this.onNameChange })),
            React.createElement("div", null,
                React.createElement("label", null, "Last name: "),
                React.createElement("input", { type: "text", name: "lastname", value: lastname, onChange: this.onNameChange })),
            React.createElement("div", null,
                React.createElement("button", { type: "submit" }, btnName),
                btnName === 'Update' && (React.createElement("button", { type: "button", onClick: this.onDelete }, "Delete")))));
    };
    return Form;
}(React.Component));
export default Form;
//# sourceMappingURL=Form.js.map