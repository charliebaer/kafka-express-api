# kafka-express-api
## Project setup

```
git clone https://github.com/charliebaer/kafka-express-api

npm install
```
## Get Kafka
Download the Apache [Kafka](http://apachemirror.wuchna.com/kafka/2.6.0/kafka_2.13-2.6.0.tgz) and extract it

```
tar -xzf kafka_2.13-2.6.0.tgz
cd kafka_2.13-2.6.0
```


## Start the Zookeeper Server 
```
bin/zookeeper-server-start.sh config/zookeeper.properties
```
## Start the Kafka Server 
```
bin/kafka-server-start.sh config/server.properties
```

## Go to your repository and start the Consumer
```
node consumer-flow.js
```

## start the Express Server
```
node app.js
```
The server will start listening to the port 3000.

Any post request that has an included Query parameter in the Url will be sent as a mesaage in to the Default partition in the Kafka Topic.

any message that is sent to the url will be console logged on the screen first

Open Postman and try out post (configured only to http post requests) 
```
http://localhost:3000/your-message-here
```
your message will be added to the Kafka-Topic 

Front end Extension for this project :

https://github.com/charliebaer/Vue-Kafka-Sample

