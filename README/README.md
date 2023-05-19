Bump is a corporate app designed to facilitate effective communication between managers and their reports. It provides a platform for managers and employees to discuss topics such as job performance, workplace concerns, and general well-being through mood logging. With Bump, teams can enhance their communication, leading to better collaboration and a healthier work environment.

=================
Technologies Used
=================
React: Bump utilizes the React JavaScript library for building user interfaces, enabling a fast and responsive application.

Express.js: The server-side of Bump is built with Express.js, a flexible web application framework for Node.js, which provides a robust and scalable backend infrastructure.

Node.js: Bump is powered by Node.js, a runtime environment that allows running JavaScript on the server-side, facilitating seamless communication between the frontend and backend.

MongoDB: Bump leverages MongoDB, a NoSQL database, to store user data, mood logs, and messages. MongoDB offers scalability and flexibility in handling data storage needs.

Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and serves as the communication layer between the application and the database. It simplifies data manipulation and provides an easy-to-use API.

Material-UI: Bump utilizes the Material-UI library for building a visually appealing and user-friendly interface. Material-UI provides pre-designed components and styling options that enhance the overall look and feel of the application.

============
Installation
============
To run Bump locally on your machine, follow these steps:

1. Clone the repository: git clone <repository-url>
2. Install dependencies: npm install
3. Set up the environment variables: Create a .env file and fill in with the appropriate variables.
4. Start the development server: npm run dev
5. Open your browser and access Bump on localhost

=====
Usage
=====

Personal View: Each user, whether a manager or an employee, has their personal view to log their moods throughout the week. This feature encourages self-reflection and helps users track their emotional state over time.

Example:

![Mood Select](./Screenshots/MoodSelect.png)

![MoodSelectedAndPrevMoods](./Screenshots/MoodSelectedAndPrevMoods.png)

Dashboard View: Managers have access to a comprehensive dashboard that displays the historical mood logs of their direct reports. This view allows managers to gain insights into the emotional well-being of their team members over time.

Example:

![ManagerView](./Screenshots/ManagerView.png)
