FROM node

WORKDIR /microservicio

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "start"]