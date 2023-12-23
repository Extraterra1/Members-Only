# Members Only

Welcome to the Members Only app! This simple message board application is built using Node.js, Express, and MongoDB. Users can register, log in, post messages, and perform other actions based on their role.

Deployed on [https://project-members-only.fly.dev](https://project-members-only.fly.dev/)
![website snapshot](https://raw.githubusercontent.com/Extraterra1/Members-Only/main/website-snapshot.png)

## Table of Contents

- [Features](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#features)
- [Prerequisites](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#prerequisites)
- [Installation](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#installation)
- [Usage](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#usage)
- [Routes](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#routes)
- [Contributing](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#contributing)
- [License](https://chat.openai.com/c/24769bfe-4ace-40b5-9c6d-2ff17d7b3765#license)

## Features

- User authentication (Sign Up, Log In, Log Out)
- Posting and viewing messages
- User roles (guest, member, admin)
- Upgrading user account
- Deleting messages (admin only)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- Internet connection to download dependencies

## Installation

1.  Clone the repository:

    `git clone https://github.com/Extraterra1/Members-Only.git`

2.  Install dependencies:

    `cd Members-Only`
    `npm install`

## Usage

1.  Start the application:

    `npm start`

2.  Open your web browser and navigate to http://localhost:3000.
3.  Explore the features of the Members Only app!

## Routes

- **GET /:** Displays the home page with the latest messages.
- **GET /newMessage:** Allows logged-in users to post new messages.
- **POST /newMessage:** Handles the submission of new messages.
- **GET /login:** Displays the login page.
- **POST /login:** Handles user authentication.
- **GET /logout:** Logs out the user.
- **GET /signUp:** Displays the sign-up page.
- **POST /signUp:** Handles user registration.
- **GET /upgrade:** Displays the page to upgrade the user account.
- **POST /upgrade:** Handles the upgrade of the user account.
- **GET /delete/:id** Deletes a message (admin only).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
