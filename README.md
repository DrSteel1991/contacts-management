## Instructions to build and run this application

After cloning this repository please run these following commands to start the node application

### `docker build -t partners-management .`

Then

### `docker run -d -p 4000:4000 partners-management`

This will create and run the docker container. After that, the server will run at port 4000 and you can access the api with the following url: `localhost:4000/partners/:range`
