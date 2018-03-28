const getBadWord = `
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

const createBadWord = `
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

module.exports = {
  getBadWord,
  createBadWord,
};
