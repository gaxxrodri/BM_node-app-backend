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

# API Usage

This section covers the available endpoints within the API, including details on their usage and the data they expect or return.

## Authentication

- **Endpoint**: `POST /api/auth`
- **Description**: This endpoint is used to obtain a JWT (JSON Web Token) for authenticating subsequent requests to the API.
- **Payload**: None required.
- **Returns**: A JWT token that should be included in the header of subsequent requests.

## Order History

- **Endpoint**: `POST /api/orders/history`
- **Description**: Save a list of order histories. This endpoint expects a JSON payload with a specific structure.
- **Payload**:
  ```json
  {
    "sequence": [1, 2, 3]
  }
  ```

## Order Recommendations

- **Endpoint**: `GET /api/orders/recommendations`
- **Description**: Retrieve product recommendations based on the user's order history and the original order history lis.
- **Payload**: None required.
- **Returns**: A list of product recommendations and the original order history list.
   

## Test coverage

<img width="1439" alt="Captura de Pantalla 2024-04-07 a las 11 19 35 p  m" src="https://github.com/gaxxrodri/BM_node-app-backend/assets/76969924/6c749cd2-d487-46d8-80c5-59d555121b6d">

   

