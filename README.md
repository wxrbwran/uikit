docker build -t uikit .

docker run -d --name xr-uikit -p 8888:80  uikit
