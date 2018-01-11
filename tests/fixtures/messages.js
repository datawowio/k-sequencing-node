const createMessage = `
{
  "data": {
    "id": "5a56e1d488762f276a28280f",
    "answer": null,
    "credit_charged": 0,
    "custom_id": null,
    "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    "instruction": "instruction",
    "postback_url": "https://9e90ac61.ngrok.io/contacts",
    "processed_at": null,
    "project_id": 109,
    "status": "unprocess"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const listMessage = `
{
  "data": {
    "images": [
      {
        "id": "5a56e1d488762f276a28280f",
        "answer": null,
        "credit_charged": 0,
        "custom_id": null,
        "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
        "instruction": "instruction",
        "postback_url": "https://9e90ac61.ngrok.io/contacts",
        "processed_at": null,
        "project_id": 109,
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
    listMessage,
    createMessage,
};
