FROM node

WORKDIR /work/waiton_todolist

COPY package*.json ./

RUN npm install

# COPY 