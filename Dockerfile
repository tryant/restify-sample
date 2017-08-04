FROM node:boron

# Create app directory
WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
