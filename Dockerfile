FROM node:10.16.3-alpine
RUN apk add --update --no-cache \
    ca-certificates \
    openssl \
    g++ \
    gcc \
    libc-dev \
    make \
    patch \
    imagemagick \
    git \
  && rm -rf /var/cache/apk/* \
  && npm install -g yarn
ADD . /app
WORKDIR /app

USER node
