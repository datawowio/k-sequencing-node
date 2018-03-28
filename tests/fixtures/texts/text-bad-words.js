const getTextBadWord = `
{
  "data": [
    {
      "id": "5abb1cea6e1157d322ef7a2a",
      "project_id": 114,
      "data": "test data",
      "status": "processed",
      "postback_url": "http://localhost:3000",
      "postback_method": "GET",
      "custom_id": "123"
    }
  ],
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createTextBadWord = `
{
  "data": {
    "id": "5abb1cea6e1157d322ef7a2a",
    "project_id": 114,
    "data": "test data",
    "status": "processed",
    "postback_url": "http://localhost:3000",
    "postback_method": "GET",
    "custom_id": "123"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

module.exports = {
  getTextBadWord,
  createTextBadWord,
};
