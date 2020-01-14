# AWS Lambda with Express.js

This is a boiler plate code to deploy Express.js in AWS Lambda. Using this you can built Express APIs in your local machine and deploy them in AWS lambda.

Run and test the application on localhost

```
npm install
npm start
```

## File structure

- lambda.js - File which is called by AWS lambda
- local.js - Run the app on localhost
- src/app.js - App entry point
- serverless.yml - Lambda function configration

## How to use

- Both the lambda.js and local.js calls the express **app** in the src/app.js
- Write your business logic (Express API) inside the **src** folder
- npm start runs the local.js file to test the app in your local machine
- serverless.yml file contains your details about your AWS region and name of your Lambda function, they are self-explanatory edit them to your needs

### Deploy in AWS manually

- Create Lambda function
- Move node_modules folder into nodejs folder, zip it and setup the layer
- Upload codes to the Lambda function
- Create API in API Gateway
- Create Method "ANY" and asign to Lambda function
- Create Resource "ANY" with "proxy resource" and asign to Lambda function
- Deploy API

### Deploy in AWS using serverless

- An AWS account
- AWS CLI installed in your machine

### AWS Configrations

Download and install AWS CLI. After installing run the following command in the terminal to configure your AWS account.

```
aws configure
```

it will ask for Access Key and Secret key, you can find them in your AWS online console.

## Deployment

Run the following command to deploy the app as AWS Lambda function

```
npm run deploy
```
