docker build -t uikit .

docker run -d --name uikit-demo -p 8888:80  uikit
