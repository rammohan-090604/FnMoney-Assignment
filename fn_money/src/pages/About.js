import React, { Component } from 'react';

class About extends Component {

    render() {

        return (
            <section className="bg-white text-gray-800 mt-4">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 text-red-600">About Us</h1>
                        <p className="text-lg text-gray-600">
                            Welcome to our application! We are dedicated to providing the best services for our users. Our team works tirelessly to ensure your satisfaction and success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Teamwork"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 rounded-lg"></div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-xl font-semibold">Our Team in Action</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Innovation"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 rounded-lg"></div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-xl font-semibold">Innovative Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            Our mission is to empower our users with innovative tools and solutions that enhance their lives and drive their success. We strive to be the leading platform for all your needs.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
