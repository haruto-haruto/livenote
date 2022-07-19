FROM node:16

WORKDIR /app

COPY . /app

ENV HOST 0.0.0.0

CMD [ "npm", "run", "dev" ]