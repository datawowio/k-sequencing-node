const choice = require('./src/operations/images/choices');
const closedQuestion = require('./src/operations/images/closedQuestions');
const message = require('./src/operations/images/messages');
const photoTag = require('./src/operations/images/photoTags');
const prediction = require('./src/operations/images/predictions');
const image = require('./src/operations/images/images');
const kyc = require('./src/operations/images/kyc');
const documentVerification = require('./src/operations/images/documentVerification');

const category = require('./src/operations/texts/categories');
const profanity = require('./src/operations/texts/profanities');
const textClosedQuestion = require('./src/operations/texts/closedQuestions');
const conversation = require('./src/operations/texts/conversations');
const facebookPage = require('./src/operations/texts/facebookPages');

const video = require('./src/operations/videos/closedQuestions');

module.exports = {
  choice,
  closedQuestion,
  message,
  photoTag,
  prediction,
  image,
  kyc,
  documentVerification,

  category,
  profanity,
  textClosedQuestion,
  conversation,
  facebookPage,

  video,
};
