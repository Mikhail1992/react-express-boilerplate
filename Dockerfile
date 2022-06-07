FROM node:alpine as client
ADD client /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:alpine as server
ADD server /app
WORKDIR /app
RUN npm install
COPY --from=client /app/build ./public
CMD ["npm", "run", "start"]

FROM nginx as nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
