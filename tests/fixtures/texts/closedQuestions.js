const getTextClosedQuestion = `
{
  "data": {
    "id": "5ad5cb41860780680e9a4b91",
    "custom_id": "6252800",
    "status": "processed",
    "data": "data",
    "answer": "Approved",
    "staff_id": 33,
    "postback_url": null,
    "postback_method": "GET",
    "project_id": 126,
    "processed_at": "2018-04-18T08:32:28.897+07:00",
    "qa_status": "waiting"
  },
  "meta": {
    "code": 200,
    "message": "success"
  }
}
`;

const createTextClosedQuestion = `
{
  "data": {
    "id": "5b7515ce6e11570ba6b31b25",
    "custom_id": "123",
    "status": "unprocessed",
    "data": "foo bar baz",
    "answer": "",
    "postback_url": "http://localhost:3000",
    "postback_method": "GET",
    "project_id": 126,
    "processed_at": null,
    "qa_status": null
  },
  "meta": {
    "code": 201,
    "message": "success"
  }
}
`;

module.exports = {
  getTextClosedQuestion,
  createTextClosedQuestion,
};
