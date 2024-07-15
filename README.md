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

4. Verify that all services are running:
   ```
   docker ps
   ```

You have now successfully spun up all the containers for the user-service, order-service, and product-service using the docker-compose file in your GitHub repository.

## Here are the service endpoints:

**User Service:** http://user-service:3001/users

Register: POST /register

Login: POST /login

Get Profile: GET /profile/:id


**Product Service:** http://product-service:3002/products

Add Product: POST /

Get Products: GET /

Get Product by ID: GET /:id

Update Product: PUT /:id

Delete Product: DELETE /:id

**Order Service:** http://order-service:3003/orders

Create Order: POST /

Get Order by ID: GET /:id

Get All Orders: GET /

Update Order Status: PUT /:id/status


## How to use these Endpoint

**Creating a user**:

```
curl -X POST http://localhost:3001/users/register -H "Content-Type: application/json" -d '{"username": "abc", "password": "abc", "email": "abc@gmail.com"}'
```

**Creating an Order**:

```
curl -X POST http://localhost:3002/products -H "Content-Type: application/json" -d '{"name": "Samsung", "description": "A51", "price": 23000, "stock": 10}'
```

**Place an roduct**:

```
curl -X POST http://localhost:3003/orders -H "Content-Type: application/json" -d '{"userId": "6694c6cc8ddb2*****", "products": [{"productId": "6694c6e379e******", "quantity": 2}], "totalAmount": 200}'
```
