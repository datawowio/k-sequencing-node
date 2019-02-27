const getListDocumentVerification = `
{
  "data": [
    {
      "id": "5c6e7c1a1eda3f13ce8fa075",
      "custom_id": null,
      "status": "unprocess",
      "postback_url": "https://datawow.io",
      "postback": false,
      "postback_method": "GET",
      "project_id": 208,
      "created_at": "2019-02-21T17:23:22.524+07:00",
      "processed_at": null,
      "data": "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
      "info": {
        "type": {
          "value": "driver_license"
        },
        "dob": {
          "value": "1991/11/28"
        }
      },
      "contributors": []
    }
  ],
  "meta": {
    "code": 200,
    "message": "success",
    "current_page": 1,
    "next_page": -1,
    "prev_page": -1,
    "total_pages": 1,
    "total_count": 1
  }
}
`;

const createDocumentVerification = `
{
    "data": {
        "id": "5c6fc4b26e11574c8c064720",
        "custom_id": null,
        "status": "unprocess",
        "postback_url": "https://460ad164.ap.ngrok.io/api/v1/moderate/images/closed_questions",
        "postback": false,
        "postback_method": "GET",
        "project_id": 192,
        "created_at": "2019-02-22T16:45:22.473+07:00",
        "processed_at": null,
        "data": "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        "info": {
            "type": {
                "value": "driver_license"
            },
            "dob": {
                "value": "1991/11/28"
            }
        },
        "contributors": []
    },
    "meta": {
        "code": 201,
        "message": "created success"
    }
}
`;

module.exports = {
  getListDocumentVerification,
  createDocumentVerification,
};
