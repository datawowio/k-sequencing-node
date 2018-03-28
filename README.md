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
## List of available Image Moderations

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

## List of available Text Moderations

### _Profanity Filtering_

#### Create filter set
```js
badWord.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *project_type* **(string, required)**: A project type ( for now default is `text_bad_word` )
> - *filter_set* **(string URL, optional)**: List of word you want to filter out
> - *use_default* **(boolean, optional)**: Select whether using our predefined filter set or custom by own

#### Get filtering set
```js
badWord.get({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, required)**: Custom filter set ID.

#### Send stream of text to moderate
```js
textBadWord.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *data* **(string, required)**: Stream of text to moderate.
> - *postback_url* **(string URL, optional)**: Where you want us to send result back to
> - *postback_method* **(string, optional)**: Default with your project setting. If you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row

####  Get Profinity Filtering info object
```js
textBadWord.get({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, optional)** Text Bad Word's Custom ID

----------
### _Text Human Categorization_

#### Send (create) stream of text to moderate
```js
category.create({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *conversation* **(Array of hash, required)**: Stream of text to moderate.
```json
"conversation": [
  {
    "name": "p1",
      "message": "hello p2"
  },
  {
    "name": "p2",
    "message": "hello p1"
  }
]
```
> - *title* **(string URL, optional)**: Title of conversation
> - *postback_url* **(string URL, optional)**: Where you want us to send result back to
> - *postback_method* **(string, optional)**: Default with your project setting. If you set this parameter that will be override your default setting
> - *allow_empty* **(boolean, optional)**: Default is ``` false ```
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


#### Get Text Human Categorization info object
```js
category.get({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, optional)** Text Category's ID or Custom ID
