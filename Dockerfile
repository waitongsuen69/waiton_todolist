FROM node:14

WORKDIR /work/waiton_todolist

COPY package*.json ./

RUN npm install

# COPY 