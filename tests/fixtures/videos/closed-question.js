const getVideoClosedQuestion = `
{
  "data": {
    "video": {
      "id": "5b76468f6e115705ef15f65a",
      "answer": null,
      "allow_seeking": true,
      "credit_charged": 0,
      "custom_id": "12312324",
      "data": "video-url",
      "muted": true,
      "play_at": 0,
      "postback_url": "http://localhost:3000/foo",
      "processed_at": null,
      "project_id": 177,
      "status": "unprocess",
      "qa_id": null,
      "qa_status": null,
      "qa_answer": null,
      "qa_processed_at": null
    }
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const listVideoClosedQuestion = `
{
  "data": {
    "videos": [
      {
        "id": "5b76468f6e115705ef15f65a",
        "answer": null,
        "allow_seeking": true,
        "credit_charged": 0,
        "custom_id": "12312324",
        "data": "video-url",
        "muted": true,
        "play_at": 0,
        "postback_url": "http://localhost:3000/foo",
        "processed_at": null,
        "project_id": 177,
        "status": "unprocess",
        "qa_id": null,
        "qa_status": null,
        "qa_answer": null,
        "qa_processed_at": null
      }
    ]
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createVideoClosedQuestion = `
{
  "data": {
    "id": "5b764c666e115705ef15f65b",
    "answer": null,
    "allow_seeking": true,
    "credit_charged": 0,
    "custom_id": null,
    "data": "test-url",
    "muted": true,
    "play_at": 0,
    "postback_url": "https://www.datawow.io",
    "processed_at": null,
    "project_id": 177,
    "status": "unprocess",
    "qa_id": null,
    "qa_status": null,
    "qa_answer": null,
    "qa_processed_at": null
  },
  "meta": {
    "code": 201,
    "message": "created success"
  }
}
`;

module.exports = {
  getVideoClosedQuestion,
  listVideoClosedQuestion,
  createVideoClosedQuestion,
};
