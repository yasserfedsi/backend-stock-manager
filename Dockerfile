# Use official Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the project
COPY . .

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
