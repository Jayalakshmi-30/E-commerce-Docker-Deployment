
# E-Commerce Docker Services

This project provides a microservices-based e-commerce platform with two services, User Service and Product Service, running in a Dockerized environment. The services use .NET 6 with PostgreSQL and Node.js with MongoDB, respectively.

## Available Services

**User Service**  
- Technology: .NET 6 + PostgreSQL  
- Description: Manages user accounts and authentication.  
- API Documentation: [Swagger UI](http://localhost:5004/swagger)  
- URL: [http://localhost:5004](http://localhost:5004)

**Product Service**  
- Technology: Node.js + MongoDB  
- Description: Handles product and category management.  
- URL: [http://localhost:3000](http://localhost:3000)

## Prerequisites

Ensure the following are installed on your machine:  
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)

## Quick Start

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Start all services:  
   ```bash
   docker-compose up -d
   ```

3. Verify running containers:  
   ```bash
   docker-compose ps
   ```

## Service URLs

- **User Service**: [http://localhost:5004](http://localhost:5004)  
- **User Service API Docs**: [http://localhost:5004/swagger](http://localhost:5004/swagger)  
- **Product Service**: [http://localhost:3000](http://localhost:3000)  
- **MongoDB**: `mongodb://localhost:27017`  
- **PostgreSQL**: `localhost:5432`

## Database Credentials

**PostgreSQL (User Service)**  
- Database: `userservice`  
- Username: `postgres`  
- Password: `root`

**MongoDB (Product Service)**  
- Database: `product-catalog`  
- Authentication: Not required  

## Container Management

Stop all services:  
```bash
docker-compose down
```

View logs:  
```bash
docker-compose logs -f
```

Rebuild services:  
```bash
docker-compose build
```

Rebuild and start a specific service:  
```bash
docker-compose up -d --build <service-name>
```

## Data Persistence

Data is persisted using Docker volumes:  
- MongoDB: `mongodb_data`  
- PostgreSQL: `postgres_data`

```yaml
volumes:
  mongodb_data:
  postgres_data:
```
