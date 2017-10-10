# K-Sequencing for NodeJS 
support or question support@datawow.io


# Installation 

NPM 
```js
npm install k-sequencing
```

Import 
```js
var kseq = require('k-sequencing')();
```

## Usage example 

###### Promise with then()


```js
'use strict';
var kseq = require('k-sequencing')();

var data = {
  instruction: 'face',
  categories: 'face ear eye',
  data: 'www.your-image.url',
  postback_url: 'www.your-callbak.url', multiple: false
};

var projectToken = "your project token"

kseq.choice.create({token: projectToken, data: data})
  .then(function(res){
    return kseq.choice.find({token: projectToken, data: {id: res.data.id}})  
})
  .then(function(res){
	//... do process
});
```
###### Original Style (Hell callback)

```js
'use strict';
var kseq = require('k-sequencing')();

var data = {
  instruction: 'face',
  categories: 'face ear eye',
  data: 'www.your-image.url',
  postback_url: 'www.your-callbak.url', multiple: false
};

var projectToken = "your project token"

kseq.choice.create({token: projectToken, data: data}, function(res) {
	kseq.choice.find({token: projectToken, data: {id: res.data.id}}, function(){
		//... do process
	});
});
```

## List API Provider 

#### Image Choices

##### Get list
```js 
choice.list(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *page* **(string, optional)**: Default 0
> - *limit* **(string, optional)**: Default 20


 
##### Create
```js
choice.create(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *instruction* **(string, require)**
> - *categories* **(string group, require)**: separate group by space ``` name1 name2 name3 ```
> - *data* **(string URL, require, optional)**
> - *postback_url* **(string URL, optional)**
> - *multiple* **(boolean, optional)**: Default is ``` false ```
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


##### Find by ID 

```js
choice.find(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *id* **(string, optional)**: Default 0


----------
#### Image Closed Question

##### Get list
```js 
closedQuestion.list(params, callback)
```
##### params
> - *page* **(string, optional)**: Default 0
> - *limit* **(string, optional)**: Default 20


 
##### Create
```js
closedQuestion.create(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *data* **(string URL, require, optional)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


##### Find by ID 

```js
closedQuestion.find(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *id* **(string, optional)**: Default 0

----------
#### Image Messages

##### Get list
```js 
message.list(params, callback)
```
##### params
> - *page* **(string, optional)**: Default 0
> - *limit* **(string, optional)**: Default 20


 
##### Create
```js
message.create(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *instruction* **(string, require)**
> - *data* **(string URL, require, optional)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


##### Find by ID 

```js
message.find(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *id* **(string, optional)**: Default 0

----------
#### Photo tags

##### Get list
```js 
message.list(params, callback)
```
##### params
> - *page* **(string, optional)**: Default 0
> - *limit* **(string, optional)**: Default 20


 
##### Create
```js
message.create(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *instruction* **(string, require)**
> - *data* **(string URL, require, optional)**
> - *postback_url* **(string URL, optional)**
> - *postback_method* **(string, optional)**: Default with your project setting. if you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


##### Find by ID 

```js
message.find(params, callback)
```
##### params
> - *Authorization* **(string, header, require)**: Token of your project
> - *id* **(string, optional)**: Default 0



