FROM node:alpine3.10 as build-step

RUN mkdir /app
WORKDIR /app

COPY client/package.json /app
RUN npm install
COPY client /app

RUN npm run build

#Run Steps
FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html