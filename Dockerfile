FROM node:boron

# Create app directory
WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn install --production

# Bundle app source
COPY dist/ .

EXPOSE 8080
CMD [ "npm", "start" ]
