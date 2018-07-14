FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install yarn
RUN yarn install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN yarn build

