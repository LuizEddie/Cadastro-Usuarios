FROM node:alpine

WORKDIR /app

COPY ./backend/package.json /app/
COPY ./backend/package-lock.json /app/

RUN npm i --force --verbose

COPY ./backend/ /app/

EXPOSE 3001