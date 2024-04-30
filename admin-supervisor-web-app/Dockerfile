FROM node

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

ENV LOCALHOST=""

COPY . .
CMD [ "npm","start" ]