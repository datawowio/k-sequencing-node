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

----------

### _Customer Document Verification_

#### Create a customer
```js
kseq.kyc.createCustomer({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *address* **(String, optional)**: The customer's address.
> - *dob* **(DateTime, optional)**: The customer's date of birth.
> - *first_name* **(String, optional)**: The customer's first name.
> - *last_name* **(String, optional)**: The customer's last name.
> - *gender* **(String, optional)**: The customer's gender.
> - *id_card* **(String, optional)**: The customer's ID Card.
> - *email* **(String, optional)**: The customer's email.
> - *custom_id* **(String, optional)**: The customize record ID.

#### Create and upload a document
```js
kseq.kyc.createDocument({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *data* **(Array of hash, required)**: The customer's document images.
> - *type* **(String, required)**: The type of document. e.g. 
```
PASSPORT
DRIVING_LICENSE
SOCIAL_SECURITY_NUMBER
NATIONAL_ID_CARD
NATIONAL_ID_CARD_COMPLETE
VISA
BOOK_BANK
WEBSITE
OTHER
```
> - *customer_id* **(String, required)**: The customer's ID that belongs to document.
> - *custom_id* **(String, optional)**: The customize record ID.

```js
// Example create document
data: {
  customer_id: '5b752f286e11576f13c0324a',
  type: 'PASSPORT',
  data: [
    {
      attr: "front_side",
      url: "front_pic_url"
    },
    {
      attr: "back_side",
      url: "back_pic_url"
    }
  ]
}
```

#### List Customers
```js
kseq.kyc.listCustomer({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *id* **(String, optional)**
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20

#### List Documents
```js
kseq.kyc.listDocument({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *customer_id* **(String, required)**
> - *id* **(String, optional)**
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20

----------

## List of available Text Moderations

### _Profanity Filter_

First, you need to create profanity filter set which is the list of word that you want to
filter out by

#### Create profanity filter set
```js
profanity.createFilter({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *project_type* **(string, required)**: A project type ( for now default is `text_bad_word` )
> - *filter_set* **(array of string, optional)**: List of word you want to filter out
> - *use_default* **(boolean, optional)**: Select whether using predefined filter set or custom by your own

#### Get profanity filter set
```js
profanity.retrieveFilter({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, required)**: Custom filter set ID.

After you have profanity filter set, you can send stream data of text to sanitize by

#### Send text data to sanitize
```js
profanity.sanitize({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *data* **(string, required)**: Stream of text to moderate.
> - *postback_url* **(string URL, optional)**: Where you want us to send result back to
> - *postback_method* **(string, optional)**: Default with your project setting. If you set this parameter that will be override your default setting
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row

####  Get profanity filtered text
```js
profanity.result({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, optional)** Text Bad Word's Custom ID

----------
### _Text Human Categorization_

#### Send text category data to categorize
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
> - *title* **(string, optional)**: Title of conversation
> - *postback_url* **(string URL, optional)**: Where you want us to send result back to
> - *postback_method* **(string, optional)**: Default with your project setting. If you set this parameter that will be override your default setting
> - *allow_empty* **(boolean, optional)**: Default is ``` false ```
> - *custom_id* **(string, optional)**: Use to custom ``` Primary key ``` of data row


#### Get Text Human Categorization
```js
category.get({ token: <authorization>, data: <params> })
```
##### Authorization
> - *authorization* **(string, header, required)**: Token of your project
##### Params payload
> - *id* **(string, optional)** Text Category's ID or Custom ID

----------

### _Text Closed Question_

#### Create a Text Closed Question
```js
kseq.textClosedQuestion.create({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *data* **(String, required)**: The stream of text.
> - *custom_id* **(String, optional)**: The customize record ID.
> - *postback_url* **(String URL, optional)**: Postback's URL.
> - *postback_method* **(String, optional)**: Postback's method.

#### List Text Closed Questions
```js
kseq.textClosedQuestion.list({ token: <project-token>, data: <payload> })
```
> - *id* **(String, optional)**
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20

----------

### _Text Conversation_
#### Create a Text Conversation
```js
kseq.conversation.create({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *conversation* **(Array of String, required)**: The list of conversation.
> - *custom_conversation_ids* **(Array of String, optional)**: The list of customization's conversation ID.
> - *postback_url* **(String URL, optional)**: Postback's URL.
> - *postback_method* **(String, optional)**: Postback's method.

#### List Text Conversations
```js
kseq.conversation.list({ token: <project-token>, data: <payload> })
```
> - *id* **(String, optional)**
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20

----------

### _Facebook Page monitoring_

#### Create predefined keywords and actions
```js
kseq.facebookPage.create({ token: <project-token>, data: <payload> })
```

##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *page_id* **(String, required)**: The Facebook Page ID.
> - *actions* **(Hash, required)**: The hash of keyword and action.

```js
// Example of data's structure.
data: {
  page_id: "245473502860590",
  actions: { word: 'foo', action: 'removed' },
}
```

#### Get keyword and action from Facebook Page's ID
```js
kseq.facebookPage.get({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *page_id* **(String, required)**: The Facebook Page ID.

#### List Facebook's Feed histories
```js
kseq.facebookPage.getFeed({ data: <payload> })
```
##### Payload
> - *page_id* **(String, required)**: The Facebook Page ID.
> - *start_date* **(DateTime, optional)**: The start range of feed date. (Default: Start date of current month)
> - *end_date* **(DateTime, optional)**: The end range of feed date. (Default: End date of current month)

----------

## Video Moderation

### _Video Closed Question_

#### Create a Video Closed Question
```js
kseq.video.create({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *data* **(String, required)**: The video's url.
> - *custom_id* **(String, optional)**: The customize record ID.
> - *postback_url* **(String URL, optional)**: Postback's URL.
> - *postback_method* **(String, optional)**: Postback's method.
> - *muted* **(Boolean, optional)**: Opiton to mute video's sound.
> - *allow_seeking* **(Boolean, optional)**: Option to be able to seek.
> - *play_at* **(Integer, optional)**: The specific video starter point.

#### Get Video Closed Question
```js
kseq.video.get({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *id* **(String, required)**: The Video Closed Question's ID.

#### List Video Closed Questions
```js
kseq.video.list({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *id* **(String, optional)**:
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20

----------

## Document Verification

### _Document Verification_

#### Create Document Verification task
```js
kseq.documentVerification.create({
  token: <project-token>,
  data: {
    data: "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    info: {
      type: {
        value: "driver_license"
      },
      dob: {
        value: "1983/12/26"
      }
    }
  }
}).then(result => {
  console.log(result.data.data);
})
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *data* **(String, required)**: The video's url.
> - *info* **(Hash, required)**: The Document information.
> - *custom_id* **(String, optional)**: The customize record ID.
> - *postback_url* **(String URL, optional)**: Postback's URL.
> - *postback_method* **(String, optional)**: Postback's method.

#### List Document Verification
```js
kseq.documentVerification.list({ token: <project-token>, data: <payload> })
```
##### Authorization
> - *project-token* **(String, header, required)**: The token of your project.
##### Payload
> - *id* **(String, optional)**:
> - *page* **(String, optional)**: Default 0
> - *per_page* **(String, optional)**: Default 20
