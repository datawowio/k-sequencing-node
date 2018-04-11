const createClosedQuestion = `
{
  "data": {
    "id": "5a56dba788762f276a282735",
    "answer": null,
    "credit_charged": 0,
    "custom_id": null,
    "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    "postback_url": "https://9333bbac.ngrok.io/callbacks",
    "processed_at": null,
    "project_id": 102,
    "status": "unprocess"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const listClosedQuestion = `
{
    "data": {
        "images": [
          {
            "id": "5a56dba788762f276a282735",
            "answer": null,
            "credit_charged": 0,
            "custom_id": null,
            "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
            "postback_url": "https://9333bbac.ngrok.io/callbacks",
            "processed_at": null,
            "project_id": 102,
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
  listClosedQuestion,
  createClosedQuestion,
};
