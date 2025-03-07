# Use the official Node.js 20.16 image as a base
FROM node:20.16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Define the command to run the application
CMD [ "yarn", "start" ]
