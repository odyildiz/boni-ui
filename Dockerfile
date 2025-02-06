# Build the application
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for development server
EXPOSE 3000

# Start development server with host set to 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]