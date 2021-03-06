module.exports = {
  HEADER: {
    AUTHORIZATION: 'Authorization',
  },
  BASE_IMAGE_URL: 'https://image.datawow.io/api/v1/',
  BASE_TEXT_URL: 'https://text.datawow.io/api/v1/',
  ENDPOINT: {
    IMAGES: {
      PHOTO_TAGS: 'images/photo_tags',
      CHOICES: 'images/choices',
      CLOSED_QUESTIONS: 'images/closed_questions',
      MESSAGES: 'images/messages',
      PREDICTIONS: 'prime/predictions',
      IMAGE: 'projects/images',
      KYC_CUSTOMER: 'kyc/customers',
      KYC_DOCUMENT: 'kyc/documents',
      AI_CONSENSUS: 'jobs/ai/consensuses',
      DOCUMENT_VERIFICATION: 'images/document_verifications',
    },
    TEXT: {
      CATEGORIES: 'text/text_categories',
      PROFANITY: {
        FILTERS: 'text/profanity/filters',
        TASKS: 'text/profanity/tasks',
      },
      CLOSED_QUESTIONS: 'text/text_closed_questions',
      CONVERSATIONS: 'text/text_conversations',
      FACEBOOK_PAGES: 'facebook/pages',
      FACEBOOK_FEED_HISTORIES: 'facebook/feed_histories',
    },
    VIDEO: {
      CLOSED_QUESTIONS: 'videos/closed_questions',
    },
  },
};
