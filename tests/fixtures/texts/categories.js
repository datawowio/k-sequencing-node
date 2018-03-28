const getTextCategory = `
{
  "data": {
    "id": "5abb204b6e1157d322ef7a2c",
    "custom_id": "123456",
    "title": "text category title",
    "status": "unprocessed",
    "conversation": [
      {
        "name": "p1",
        "message": "hello p2"
      },
      {
        "name": "p2",
        "message": "hello p1"
      }
    ],
    "categories": [],
    "staff_id": null,
    "postback_url": "http://localhost:3001",
    "postback_method": "GET",
    "project_id": 120,
    "processed_at": null,
    "allow_empty": false
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}

`;

const createTextCategory = `
{
  "data": {
    "id": "5abb1fd76e1157d322ef7a2b",
    "custom_id": "321",
    "title": "text category title",
    "status": "unprocessed",
    "conversation": [
      {
        "name": "p1",
        "message": "hello p2"
      },
      {
        "name": "p2",
        "message": "hello p1"
      }
    ],
    "categories": [],
    "staff_id": null,
    "postback_url": "http://localhost:3001",
    "postback_method": "GET",
    "project_id": 120,
    "processed_at": null,
    "allow_empty": false
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

module.exports = {
  getTextCategory,
  createTextCategory,
};
