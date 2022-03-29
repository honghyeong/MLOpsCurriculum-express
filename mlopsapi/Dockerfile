FROM node:14-alpine

WORKDIR /usr/src/app

COPY *.json ./
RUN npm install
RUN apk update && apk add bash

COPY . .

EXPOSE 3000

CMD ["npm", "start" ]