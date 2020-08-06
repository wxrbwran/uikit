FROM nginx:latest
COPY ./docker/nginx.conf /etc/nginx
COPY --from=builder /storybook-static  /usr/share/nginx/html
