import React from 'react';

class AddressForm extends React.Component {
    state = {
        firstname: this.props.firstname ? this.props.firstname : '',
        lastname: this.props.lastname ? this.props.lastname : ''
    };

    componentDidUpdate(prevProps) {
        const { firstname, lastname } = this.props;
        if (
            prevProps.firstname !== firstname ||
            prevProps.lastname !== lastname
        ) {
            this.setState({ firstname });
            this.setState({ lastname });
        }
    }

    onDelete = () => {
        this.props.onDelete();
        this.props.history.push('/');
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({
            firstname: this.state.firstname,
            lastname: this.state.lastname
        });
        this.props.history.push('/');
    };

    onNameChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    render() {
        const { firstname, lastname } = this.state;
        const { btnName } = this.props;

        return (
            <form className="addressForm" onSubmit={this.onFormSubmit}>
                <div>
                    <label>First name: </label>{' '}
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={this.onNameChange}
                    />
                </div>

                <div>
                    <label>Last name: </label>
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={this.onNameChange}
                    />
                </div>

                <div>
                    <button type="submit">{btnName}</button>

                    {btnName === 'Update' && (
                        <button type="button" onClick={this.onDelete}>
                            Delete
                        </button>
                    )}
                </div>
            </form>
        );
    }
}

export default AddressForm;
