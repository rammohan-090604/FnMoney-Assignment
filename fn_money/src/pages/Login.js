import React, { Component } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirectToHome: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        // Check if email or password is empty
        if (!email || !password) {
            this.setState({ error: 'Email and password are required.' });
            return;
        }

        axios.post('http://localhost:3333/login', { email, password })
            .then((response) => {
                const { token } = response.data;

                // Store the token in localStorage
                localStorage.setItem('jwtToken', token);

                // Set redirect flag to true
                this.setState({ redirectToHome: true });
            })
            .catch((error) => {
                this.setState({ error: error.response?.data?.message || error.message });
                console.error(error);
            });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password, error, redirectToHome } = this.state;

        if (redirectToHome) {
            return <Navigate to="/" />;
        }

        return (
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <Link className="underline" to="/register">Sign up</Link>
                        </p>

                        <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
