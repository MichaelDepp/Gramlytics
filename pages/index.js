import Indexcontent from "../components/Indexcontent";
import Loader from "../components/Loader";
import Router from "next/router";
import { Component } from "react";

class Index extends Component {

    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            username: "",
            exists: "",
            error: undefined,
            found: undefined,
            loader: true
        }
    }

    handleAddOption(username) {
        this.setState({ error: undefined })
        this.setState.username = username;
        console.log("Searching " + username)
        fetch("/check?user=" + username)
            .then(res => res.json())
            .then(exists => this.setState({ exists }, () => {
                if (exists == "exists") {
                    this.setState({ loader: false})
                    this.setState({ found: "Profile Found!! Fetching Data.." })
                    Router.push('/stats?user=' + username)
                } else {
                    console.log("profile not exist")
                    this.setState({ error: "Username not exist! Try Again!" })
                }
            }))
    }

    render() {
        return (
            <div>
                {this.state.loader ? <Indexcontent error={this.state.error} handleAddOption={this.handleAddOption} /> : <Loader/>}
            </div>
        )
    }
}

export default Index;