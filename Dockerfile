FROM node:14

WORKDIR /vote

COPY ./ ./

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]