ARG NODE_VERSION=19.8
ARG NGINX_VERSION=1.18.0

FROM node:${NODE_VERSION}-alpine as dev



WORKDIR /usr/src/admin

COPY package.json .
COPY package-lock.json .

RUN set -eux npm install


COPY public ./public
COPY src ./src
COPY index.html .
COPY README.md .
COPY vite.config.js .

VOLUME "/usr/src/admin/node_modules"

CMD ["package.json", "npm start"]

FROM dev as build

ARG REACT_APP_API_ENTRYPOINT="https://127.0.0.1:8000/api"

RUN -set eux npm build


FROM nginx:${NGINX_VERSION}-alpine AS web

WORKDIR ./index.html

COPY --from=dev . .




