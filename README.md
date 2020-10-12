# Simple chat-app based on MERN stack

## Install

    yarn install

    Add constants to local .env for example

    MONGODB_URI='mongodb+srv://user:pass@cluster_mongodb/database?retryWrites=true&w=majority'
    PORT=3000
    LOG_LEVEL='debug'

## Run the server app

    yarn start

# REST API

## Get messages

### Request

`GET /messages`

    curl -i -H 'Accept: application/json' http://localhost:3000/messages

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

## Create message

### Request

`POST /messages`

    curl --location --request POST 'localhost:3000/messages' --header 'Content-Type: application/json' --data-raw '{"name": "Pete", "message": "Hello!"}'

### Response

    HTTP/1.1 201 OK
    Status: 201 Created
