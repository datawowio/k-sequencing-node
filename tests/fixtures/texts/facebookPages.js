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

const getFacebookFeed = `
{
  "data": [
    {
      "id": "5b74d5946e1157942f1b7942",
      "message": "foo",
      "comment_id": "319980792076527_319980888743184",
      "page_id": "245473502860590",
      "action": "removed",
      "created_at": "2018-08-16T08:38:28.773+07:00"
    },
    {
      "id": "5b74d6ca6e1157942f1b7943",
      "message": "bar",
      "comment_id": "319980792076527_319984212076185",
      "page_id": "245473502860590",
      "action": "hidden",
      "created_at": "2018-08-16T08:43:38.447+07:00"
    },
    {
      "id": "5b74d7426e1157942f1b7944",
      "message": "bar",
      "comment_id": "319980792076527_319985565409383",
      "page_id": "245473502860590",
      "action": "hidden",
      "created_at": "2018-08-16T08:45:38.245+07:00"
    },
    {
      "id": "5b74db786e1157a0e29d9c99",
      "message": "foo",
      "comment_id": "319980792076527_319996295408310",
      "page_id": "245473502860590",
      "action": "removed",
      "created_at": "2018-08-16T09:03:36.824+07:00"
    }
  ],
  "meta": {
    "code": 200,
    "message": "success",
    "total": 4
  }
}
`;

module.exports = {
  getFacebookPage,
  createFacebookPage,
  getFacebookFeed,
};
