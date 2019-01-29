import React from 'react';

type Props = {
	firstname: string,
	lastname: string,
	onDelete(): void,
	history: any,
	onSubmit({firstname, lastname}:State): void,
	btnName: string
}

type State = {
	firstname:string,
	lastname:string 
}
class Form extends React.Component<Props, State> {
	// static propTypes = {
	// }
	//  why use static propTypes ????

	state = {
		firstname: this.props.firstname ? this.props.firstname : '',
		lastname: this.props.lastname ? this.props.lastname : '',
	};

	componentDidUpdate(prevProps:Props) {
		const { firstname, lastname } = this.props;
		if (prevProps.firstname !== firstname || prevProps.lastname !== lastname) {
			this.setState({ firstname });
			this.setState({ lastname });
		}
	}

	onDelete = () => {
		this.props.onDelete();
		this.props.history.push('/');
	};

	onFormSubmit = (e:any)=> {
		e.preventDefault();
		this.props.onSubmit({
			firstname: this.state.firstname,
			lastname: this.state.lastname,
		});
		this.props.history.push('/');
	};

	onNameChange = (e: any)=> {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value } as any);
	};

	render() {
		const { firstname, lastname } = this.state;
		const { btnName } = this.props;

		return (
			<form className="addressForm" onSubmit={this.onFormSubmit}>
				<div>
					<label>First name: </label>{' '}
					<input type="text" name="firstname" value={firstname} onChange={this.onNameChange} />
				</div>

				<div>
					<label>Last name: </label>
					<input type="text" name="lastname" value={lastname} onChange={this.onNameChange} />
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

export default Form;
