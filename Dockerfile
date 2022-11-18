FROM node:18.12.1-alpine3.16 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:1.23.2
COPY --from=build /usr/local/app/dist/daiq-ui /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
