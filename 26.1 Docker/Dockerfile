FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# cmd runs when the container starts not while building the image
CMD ["node", "index.js"]


# docker build -t your_username/hello-world .
# docker run -p 3000:3000 your_username/hello-world

# hub.docker.com - create an account
# Create a new repository
# Login to docker cli - docker login
# you might have to create an access token - https://docs.docker.com/security/for-developers/access-tokens/
# Push to the repository - docker push your_username/your_reponame:tagname

 