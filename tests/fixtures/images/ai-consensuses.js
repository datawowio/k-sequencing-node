const createAiConsensus = `
{
  "data": {
    "id": "5c762bb81eda3f3c328d2eb6",
    "custom_id": null,
    "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
    "credit_charged": 0,
    "created_at": "2019-02-27T13:18:32.331+07:00",
    "postback_url": "https://datawow.io",
    "processed_at": null,
    "project_id": 199,
    "status": "unprocess",
    "answer": null,
    "contributors": [],
    "min_unit_confidence": 2
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
    "jobs": [
      {
        "id": "5c1a14061eda3f2588f48204",
        "custom_id": "5c1a13d01eda3f2588f48203",
        "data": "https://s3.ap-southeast-1.amazonaws.com/k-sequencing/2018/12/14/declined/5c138840724d553491072b18.jpg",
        "credit_charged": 3,
        "created_at": "2018-12-19T16:48:54.372+07:00",
        "postback_url": "https://datawow.io",
        "processed_at": "2018-12-19T17:12:18.030+07:00",
        "project_id": 199,
        "status": "processed",
        "answer": "approved",
        "contributors": [
          49,
          53051090,
          null
        ],
        "min_unit_confidence": 2
      }
    ]
  },
  "meta": {
    "code": 200,
    "message": "success",
    "current_page": 1,
    "next_page": 2,
    "prev_page": -1,
    "total_pages": 243,
    "total_count": 4841
  }
}
`;

module.exports = {
  listAiConsensus,
  createAiConsensus,
};
