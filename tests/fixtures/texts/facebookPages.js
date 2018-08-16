const getFacebookPage = `
{
  "data": {
    "id": "5b74d55f6e1157942f1b7941",
    "project_id": 176,
    "actions": [
      {
        "word": "foo",
        "action": "removed"
      }
    ],
    "page_id": "245473502860590",
    "custom_id": null,
    "created_at": "2018-08-16T08:37:35.375+07:00"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createFacebookPage = `
{
  "data": {
    "id": "5b74d55f6e1157942f1b7941",
    "project_id": 176,
    "actions": [
      {
        "word": "foo",
        "action": "removed"
      }
    ],
    "page_id": "245473502860590",
    "custom_id": null,
    "created_at": "2018-08-16T08:37:35.375+07:00",
    "updated_at": "2018-08-16T14:14:28.286+07:00"
  },
  "meta": {
    "code": 201,
    "message": "success"
  }
}
`;

module.exports = {
  getFacebookPage,
  createFacebookPage,
};
