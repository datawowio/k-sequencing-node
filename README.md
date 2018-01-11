# K-Sequencing for NodeJS 

[![CircleCI Build Status](https://circleci.com/gh/datawowio/k-sequencing-node.svg?style=shield)](https://circleci.com/gh/datawowio/k-sequencing-node)

support or question support@datawow.io

# Installation 

NPM 
```js
npm install k-sequencing
```

Import 
```js
var kseq = require('k-sequencing');
```

## Usage example 

###### Promise with then()


```js
var kseq = require('k-sequencing');

var data = {
    instruction: 'face',
    categories: 'face ear eye',
    data: 'www.your-image.url',
    postback_url: 'www.your-callback.url', multiple: false
};

var projectToken = "your project token"

kseq.choice.create({ token: projectToken, data }).then(result => {
    console.log(result.data);
}).catch(err => {
    console.error(err);
});
```
## List API Provider 

#### Image Choices

##### Get list
```js 
choice.list({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *id* **(string, optional)**
> - *page* **(string, optional)**: Default 0
> - *per_page* **(string, optional)**: Default 20


 
##### Create
```js
choice.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *instruction* **(string, required)**
> - *categories* **(string group, required)**: separate group by space ``` name1 name2 name3 ```
> - *data* **(string URL, required)**
> - *allow_empty* **(boolean, optional)**: Default is ``` false ```
> - *postback_url* **(string URL, optional)**
> - *multiple* **(boolean, optional)**: Default is ``` false ```
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row
> - *staff_id* **(string, optional)**

----------
#### Image Closed Question

##### Get list
```js 
closedQuestion.list({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *id* **(string, optional)**
> - *page* **(string, optional)**: Default 0
> - *per_page* **(string, optional)**: Default 20

 
##### Create
```js
closedQuestion.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *data* **(string URL, required)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row
> - *staff_id* **(string, optional)**


----------
#### Image Messages

##### Get list
```js 
message.list({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *id* **(string, optional)**
> - *page* **(string, optional)**: Default 0
> - *per_page* **(string, optional)**: Default 20


##### Create
```js
message.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *instruction* **(string, required)**
> - *data* **(string URL, required)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row
> - *staff_id* **(string, optional)**


----------
#### Photo Tags

##### Get list
```js 
photoTag.list({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *id* **(string, optional)**
> - *page* **(string, optional)**: Default 0
> - *per_page* **(string, optional)**: Default 20


 
##### Create
```js
photoTag.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *instruction* **(string, required)**
> - *data* **(string URL, required)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row
> - *staff_id* **(string, optional)**

----------
#### Predictions

##### Get list
  ```js 
prediction.list({ token: <authorization>, data: <params> })
  ```

##### Authorization
  > - *authorization* **(string, header, required)**: Token of your project
##### params object
  > - *id* **(string, optional)**
  > - *page* **(int, optional)**: Default 0
  > - *per_page* **(int, optional)**: Default 20


##### Create
  ```js
prediction.create({ token: <authorization>, data: <params> })
  ```
##### Authorization
  > - *authorization* **(string, header, required)**: Token of your project
##### params object
  > - *data* **(string URL, required)**
  > - *postback_url* **(string URL, optional)**
  > - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
  > - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row

----------
#### Dynamically get image from project token
```js
image.get({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### params object
> - *id* **(string URL, required)**: Image ID or Client's image ID.
