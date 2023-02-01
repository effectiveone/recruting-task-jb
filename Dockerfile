FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/
RUN npm install -g npm@latest

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]