ARG NODE_VERSION=21.7.3

FROM node:${NODE_VERSION} as development

# Use production node environment by default.
ENV NODE_ENV development

WORKDIR /app/backend

# install nodemon globally
RUN npm install nodemon -g

# Install dependencies
COPY /backend/package*.json ./
RUN npm install

# Bundle app source
COPY . /app/backend

# Exports
EXPOSE 3000

CMD npm run dev

