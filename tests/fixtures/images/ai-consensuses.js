const createAiConsensus = `
{
  "data": {
    "image": {
      "id": "5c7630a81eda3f3c328d2eb8",
      "answer": "approved",
      "credit_charged": 0,
      "custom_id": null,
      "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
      "mode": "ai",
      "created_at": "2019-02-27T13:39:36.903+07:00",
      "postback": false,
      "postback_url": "https://datawow.io",
      "processed_at": "2019-02-27T13:39:36.911+07:00",
      "prediction_at": "2019-02-27T13:39:36.911+07:00",
      "prediction_status": "processed",
      "prediction_result": {
        "kenta": 0.0073,
        "approved": 0.9908,
        "declined": 0.0019
      },
      "project_id": 199,
      "staff_id": null,
      "status": "processed",
      "contributors": null
    }
  },
  "meta": {
    "code": 201,
    "message": "created success"
  }
}
`;

const listAiConsensus = `
{
  "data": {
    "images": [
      {
        "id": "5c7630a81eda3f3c328d2eb8",
        "answer": "approved",
        "credit_charged": 0,
        "custom_id": null,
        "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
        "mode": "ai",
        "created_at": "2019-02-27T13:39:36.903+07:00",
        "postback": true,
        "postback_url": "https://datawow.io",
        "processed_at": "2019-02-27T13:39:36.911+07:00",
        "prediction_at": "2019-02-27T13:39:36.911+07:00",
        "prediction_status": "processed",
        "prediction_result": {
          "kenta": 0.0073,
          "approved": 0.9908,
          "declined": 0.0019
        },
        "project_id": 199,
        "staff_id": null,
        "status": "processed",
        "contributors": null
      }
    ]
  },
  "meta": {
    "code": 200,
    "message": "success",
    "current_page": 1,
    "next_page": 2,
    "prev_page": -1,
    "total_pages": 5,
    "total_count": 86
  }
}
`;

module.exports = {
  listAiConsensus,
  createAiConsensus,
};
