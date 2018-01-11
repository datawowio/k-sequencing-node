const createPrediction = `
{
  "data": {
    "id": "5a56e580879a1b58f70be879",
    "answer": null,
    "credit_charged": 0,
    "custom_id": null,
    "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    "postback_url": "https://9e90ac61.ngrok.io/contacts",
    "processed_at": null,
    "project_id": 105,
    "status": "processing"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const listPrediction = `
{
  "data": {
    "image": [
      {
        "id": "5a56e580879a1b58f70be879",
        "answer": "approved",
        "credit_charged": 0,
        "custom_id": null,
        "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
        "postback_url": "https://9e90ac61.ngrok.io/contacts",
        "processed_at": "2018-01-11T11:18:09.863+07:00",
        "project_id": 105,
        "status": "processed"
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
    listPrediction,
    createPrediction,
};
