# Node.js app - Product Recommendations Service

This project is a backend service designed to provide personalized product recommendations for an online retail store. The service is built with Node.js and leverages MongoDB for data storage.

## Features

- RESTful API for product recommendations.
- Integration with MongoDB to store and retrieve product data.
- Dockerized environment for easy setup and deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/).
- You have installed [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).
- You have a basic understanding of Docker and containerization.

## Setting Up for Development

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/yourusername/BM_node-app-backend.git
   ```

2. Navigate to the project directory:

   ```sh
   cd BM_node-app-backend
   ```

3. Build and run the Docker containers:

   ```sh
    docker-compose up --build
   ```

4. The server should now be running on `http://localhost:3000`.

5. Stop the server:

   ```sh
    docker-compose down
   ```

