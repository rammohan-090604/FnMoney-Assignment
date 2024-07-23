import React, { Component } from "react";

class AssignmentTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            projectName: "",
            githubUrl: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
                <h1 className="text-center text-4xl font-bold mb-4">Assessment Tasks</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-bold mb-2">Name:</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg p-2 w-full" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-bold mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg p-2 w-full" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="projectName" className="block text-lg font-bold mb-2">Project Name:</label>
                        <input type="text" id="projectName" name="projectName" className="border border-gray-300 rounded-lg p-2 w-full" value={this.state.projectName} onChange={this.handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="githubUrl" className="block text-lg font-bold mb-2">GitHub URL:</label>
                        <input type="text" id="githubUrl" name="githubUrl" className="border border-gray-300 rounded-lg p-2 w-full" value={this.state.githubUrl} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        );
    }
}

export default AssignmentTasks;