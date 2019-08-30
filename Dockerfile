FROM node:8.16-alpine

WORKDIR /home/app

COPY . .

RUN npm install -g yarn && yarn

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]