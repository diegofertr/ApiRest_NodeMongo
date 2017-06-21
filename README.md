# ApiRest Node&Mongo

### Description
An apiRestful with Nodejs and Mongodb

```
This is a basic example of an api-rest
```

### Database
First we create a container with mongo
```
docker run -itd -p 27017:27017 -v ~/mongodb:/data/db --name mongo-database -d mongo
```

For start a shell interactive with docker type the next code
The container must be running
```
docker exec -it mongo-database mongo
```