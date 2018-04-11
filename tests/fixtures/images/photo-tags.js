const createPhotoTag = `
{
  "data": {
    "id": "5a56e3bb88762f276a282847",
    "answer": [],
    "credit_charged": 0,
    "custom_id": null,
    "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    "instruction": "instruction",
    "postback_url": "https://9e90ac61.ngrok.io/contacts",
    "processed_at": null,
    "project_id": 104,
    "status": "unprocess"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const listPhotoTag = `
{
  "data": {
    "images": [
      {
        "id": "5a56e3bb88762f276a282847",
        "answer": [],
        "credit_charged": 0,
        "custom_id": null,
        "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
        "instruction": "instruction",
        "postback_url": "https://9e90ac61.ngrok.io/contacts",
        "processed_at": null,
        "project_id": 104,
        "status": "unprocess"
      }
    ]
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

module.exports = {
  createPhotoTag,
  listPhotoTag,
};
