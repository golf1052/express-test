FROM node:argon

RUN npm --silent install -g typescript@beta

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
COPY tsconfig.json /app/
RUN npm --silent install
ADD src /app/src
ADD test /app/test
RUN tsc
EXPOSE 3000

CMD ["npm", "start"]
