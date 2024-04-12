# Use a lightweight web server container
FROM nginx:alpine

# Copy the built files into the web server's public directory
COPY dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to allow outside access
EXPOSE 80

# Command to start the nginx server
CMD ["nginx", "-g", "daemon off;"]