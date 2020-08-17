import { Component } from "react";

class Userinput extends Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const username = e.target.elements.username.value.trim();
        const error = this.props.handleAddOption(username);

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.username.value = ""
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <div className="username-input">
                        <div className="at-box">
                            <label>@</label>
                        </div>
                        <input placeholder="Username" name="username" />
                    </div>
                    <div className="button-wrapper">
                        <button className="button-black">
                            {this.props.label}
                            <img src="./assets/search.png" />
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Userinput;