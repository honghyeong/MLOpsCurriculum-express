FROM node:14-alpine
WORKDIR /app

COPY *.json ./

RUN npm install
RUN apk update && apk add bash

EXPOSE 3000

COPY . .


# ENV DB_PORT 5432
# ENV DB_USER seokmin
# ENV DB_PASSWORD postgres
# ENV DB_NAME mlops
# ENV DB_HOST db

CMD ["npm", "start" ]