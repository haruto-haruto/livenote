FROM node:16

WORKDIR /app

# タイムゾーンを東京に固定したい場合はこれを記述【★】
# RUN apk --no-cache add tzdata && \
#   cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
#   apk del tzdata
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# EXPOSE 命令はコンテナの実行時に、所定ネットワーク上のどのポートをリッスンするかを指定
EXPOSE 3000 
ENV HOST 0.0.0.0
ENV PORT=8080

RUN npm run build
CMD [ "npm", "run", "preview" ]