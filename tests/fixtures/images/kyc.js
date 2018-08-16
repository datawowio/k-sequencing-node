const createCustomer = `
{
  "data": {
    "id": "5b752c976e11576f13c03249",
    "address": null,
    "custom_id": null,
    "dob": null,
    "email": "foo@bar.com",
    "first_name": "foo",
    "last_name": "bar",
    "gender": null,
    "processed_at": null,
    "project_id": 169,
    "staff_id": null,
    "status": "unprocess"
  },
  "meta": {
    "code": 201,
    "message": "created success"
  }
}
`;

const createDocument = `
{
  "data": {
    "id": "5b7531436e11576f14c0324a",
    "custom_id": "null",
    "type": "PASSPORT",
    "outcome": [
      {
        "type": "CONSISTENCY_ANALYSIS",
        "breakdown": [
          {
            "type": "CUSTOMER_FIRST_NAME",
            "result": "approved"
          },
          {
            "type": "CUSTOMER_PHOTO",
            "result": "rejected"
          }
        ]
      }
    ],
    "data": [
      {
        "attr": "front_side",
        "url": "front_pic_url"
      },
      {
        "attr": "back_side",
        "url": "back_pic_url"
      }
    ],
    "customer_id": "5b752f286e11576f13c0324a"
  },
  "meta": {
    "code": 201,
    "message": "created success"
  }
}
`;

module.exports = {
  createCustomer,
  createDocument,
};
