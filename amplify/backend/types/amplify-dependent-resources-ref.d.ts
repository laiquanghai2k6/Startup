export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "Startup": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "api": {
        "Startup": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3startupstorage80414412": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "startup": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    },
    "function": {
        "DailyReminderNotification": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "CloudWatchEventRule": "string"
        }
    }
}