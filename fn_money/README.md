# fn_money

`fn_money` is an assignment project that demonstrates a responsive web application using React. It features a responsive navbar, landing page, about page, and implemented login and registration functionalities. The application uses an SQLite3 database to manage user data.

## Features

- **Responsive Design**: Built using Tailwind CSS for styling, ensuring a consistent look and feel across different devices.
- **Pages**:
  - **Landing Page**: The main entry point of the application.
  - **About Page**: Provides information about the application.
  - **Assignment Tasks Page**: Displays tasks or assignments.
  - **Login Page**: Allows users to log in. Authentication is handled with `localStorage` to remember users.
  - **Register Page**: Allows users to register for the application.
- **Authentication**:
  - Users are redirected to the login page if they are not logged in. This is managed using `localStorage` to store and check the presence of the `userEmail` value.
- **Database**:
  - SQLite3 is used for data persistence.
  - **Table name**: `user_data`
  - **Columns**: `email`, `password`, `name`, `phone`

## Installation

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd fn_money
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

## Usage

1. **Run the Application**

    Start the application with:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

2. **Accessing Pages**
    - **Landing Page**: Accessible at `/`
    - **About Page**: Accessible at `/about`
    - **Assignment Tasks Page**: Accessible at `/assessenttasks`
    - **Login Page**: Accessible at `/login`
    - **Register Page**: Accessible at `/register`

    If a user is not logged in (i.e., `userEmail` is not found in `localStorage`), they will be redirected to the `/login` page.

## Authentication Flow

- Upon login, the application stores the `userEmail` in `localStorage`.
- Users who are logged in can access protected routes such as the landing page, about page, and assignment tasks page.
- Users who are not logged in will be redirected to the login page.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **SQLite3**: For database management.
