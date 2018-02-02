const getListChoice = `
{
    "data": {
        "images": [
            {
                "id": "5a54954588762f3e7e6415bf",
                "allow_empty": false,
                "answer": [],
                "categories": [
                  "foo"
                ],
                "credit_charged": 0,
                "custom_id": "1",
                "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
                "instruction": "instruction",
                "multiple": false,
                "postback_url": "https://9e90ac61.ngrok.io/contacts",
                "processed_at": null,
                "project_id": 103,
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

const createChoice = `
{
    "data": {
        "id": "5a54954588762f3e7e6415bf",
        "allow_empty": false,
        "answer": [],
        "categories": [ "foo" ],
        "credit_charged": 0,
        "custom_id": "1",
        "data": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png",
        "instruction": "instruction",
        "multiple": false,
        "postback_url": "https://9e90ac61.ngrok.io/contacts",
        "processed_at": null,
        "project_id": 103,
        "status": "unprocess"
    },
    "meta": {
        "code": 200,
        "message": "success"
    }
}
`;

module.exports = {
  getListChoice,
  createChoice,
};
