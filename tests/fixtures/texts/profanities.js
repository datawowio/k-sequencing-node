const retrieveFilter = `
{
  "data": {
    "id": "5aaf6fec6e1157cad6d66b50",
    "project_id": 0,
    "filter_set": [
      "foo",
      "bar",
      "baz"
    ],
    "use_default": true
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createFilter = `
{
  "data": {
    "id": "5aaf72006e1157cad6d66b51",
    "project_id": 114,
    "filter_set": [
      "foo",
      "bar",
      "baz"
    ],
    "use_default": false
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const moderationResult = `
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

const sanitize = `
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
  retrieveFilter,
  createFilter,
  moderationResult,
  sanitize,
};
