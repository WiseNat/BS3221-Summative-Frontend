FROM node:latest

WORKDIR /web

COPY . ./

RUN npm install
RUN npm run build

ENTRYPOINT [ "node", "build" ]
