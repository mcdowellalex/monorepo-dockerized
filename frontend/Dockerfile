ARG NODE_VERSION=21.7.3

FROM node:${NODE_VERSION}

WORKDIR /app/frontend

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
