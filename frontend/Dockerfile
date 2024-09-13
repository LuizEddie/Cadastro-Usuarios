FROM node:alpine

WORKDIR /app

COPY ./frontend/package.json /app/
COPY ./frontend/package-lock.json /app/

RUN npm i --force --verbose

COPY ./frontend/ /app/

EXPOSE 3000