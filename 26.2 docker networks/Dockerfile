# docker run --name mongo-container -p 27017:27017 -v db_volume:/data/db  mongo
# this mongo container running separately and we will connect to it from our node app container using the network we will create


FROM node:22-alpine3.19

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

# docker build -t user-app .
# docker run -p 3000:3000 user-app      this is second container which will connect to mongo container using network we will create

############################################# for creating network
# docker network create my-network
# docker network ps
# docker run --name mongo-container -p 27017:27017 --network my-network -v db_volume:/data/db  mongo
# change mongoUrl in db.ts to 'mongodb://mongo-container:27017/myDatabase' because we will connect to mongo container using network and mongo-container is the name of the container, by default docker will use the container name as hostname to connect to it from other container in the same network

# docker build -t user-app .
# docker run --network my-network -p 3000:3000 user-app
# now our node app container can connect to mongo container using the network we created and we can perform CRUD operations on the database from our node app container