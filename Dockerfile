FROM node:10.16.3-alpine as builder
RUN apk add --update --no-cache \
    ca-certificates \
    openssl \
    g++ \
    gcc \
    libc-dev \
    make \
    patch \
    imagemagick \
  && rm -rf /var/cache/apk/* \
  && npm install -g yarn
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install
ADD . /app
RUN yarn run build

FROM nginx:1.17.3-alpine
COPY --from=builder /app/build /usr/share/nginx/html
