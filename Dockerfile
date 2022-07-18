FROM node:16

WORKDIR /app

# タイムゾーンを東京に固定したい場合はこれを記述【★】
# RUN apk --no-cache add tzdata && \
#   cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
#   apk del tzdata
COPY . /app

ENV HOST 0.0.0.0

CMD [ "npm", "run", "preview" ]