const getConversation = `
{
  "data": {
    "id": "5b69671a6e11575ebb5c5620",
    "answers": [
      ""
    ],
    "custom_id": null,
    "custom_conversation_ids": [
      "888",
      "7656"
    ],
    "status": "unprocessed",
    "conversation": [
      "foo",
      "bar"
    ],
    "staff_id": null,
    "postback_url": null,
    "postback_method": "GET",
    "project_id": 1090,
    "created_at": "2018-08-07T16:32:10.533+07:00",
    "processed_at": "null"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createConversation = `
{ 
  "data": {
    "id": "5b751d846e11570ba6b31b26",
    "custom_id": null,
    "custom_conversation_ids": [ "1", "2", "3" ],
    "status": "unprocessed",
    "conversation": [ "foo", "bar", "baz" ],
    "staff_id": null,
    "postback_url": "http://localhost:3000/foo",
    "postback_method": "POST",
    "project_id": 1090,
    "created_at": "2018-08-16T13:45:24.634+07:00",
    "processed_at": "null" 
  },
  "meta": {
    "code": 201,
    "message": "success" 
  } 
}
`;

module.exports = {
  getConversation,
  createConversation,
};
