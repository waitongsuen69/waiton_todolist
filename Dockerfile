FROM node

WORKDIR /work/waiton_todolist

COPY package*.json ./

RUN npm install

# COPY 
COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]