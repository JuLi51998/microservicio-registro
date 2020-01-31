FROM node

WORKDIR /microservicio

COPY package*.json ./app

RUN npm install

COPY . /app

CMD ["node", "start"]