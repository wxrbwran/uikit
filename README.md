docker build -t uikit .

docker run -d --name uikit-demo -p 8888:80  -v /Users/wxr/sites/uikit/storybook-static:/usr/share/nginx/html uikit