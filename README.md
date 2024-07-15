To run the services in your GitHub repository using the provided Dockerfiles and docker-compose file, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/muzafferjoya/shop-cart.git
   ```

2. Navigate to the root directory of the cloned repository:
   ```
   cd shop-cart
   ```

3. Build the Docker images for each service:
   ```
   docker-compose up --build
   ```

4. Start the containers for all services:
   ```
   docker-compose up
   ```

5. Verify that all services are running:
   ```
   docker ps
   ```

You have now successfully spun up all the containers for the user-service, order-service, and product-service using the docker-compose file in your GitHub repository.
