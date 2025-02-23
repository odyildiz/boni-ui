FROM node:18-alpine

RUN apk add --no-cache git

WORKDIR /app

ARG GITHUB_TOKEN
RUN git config --global url."https://$GITHUB_TOKEN@github.com/".insteadOf "https://github.com/"

COPY package*.json ./

RUN npm install

COPY . .

CMD ["tail", "-f", "/dev/null"]