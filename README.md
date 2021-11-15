# Node App with a loadbalancer

docker-compose.yml
```yaml
version: "3.6"

services:
  webserver:
    build: nginx
    restart: always
    ports:
      - 80:80
    depends_on:
      - app
  app:
    build: node
    restart: always
    ports:
      - 5001:5001
      - 5002:5002
      - 5003:5003
```

To run apps. Use command
```bash
docker-compose up -d --build
```