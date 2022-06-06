FROM node:alpine as client
ADD client /app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]


FROM node:alpine as server
ADD server /app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
