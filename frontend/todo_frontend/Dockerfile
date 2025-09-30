FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json from current folder
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start dev server and bind to all network interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
