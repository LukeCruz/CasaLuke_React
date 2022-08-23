FROM node:18-alpine3.14
WORKDIR /app
COPY . .
EXPOSE 3004
CMD npm start