FROM node:16-alpine 
WORKDIR /app


COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000
COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh","/start.sh"]