module.exports = {
  HEADER: {
    AUTHORIZATION: 'Authorization',
  },
  KIYO_IMAGE_URL: 'https://k-sequencing.datawow.io/api/',
  KIYO_TEXT_URL: 'https://kiyo-text.datawow.io/api/v1/',
  ENDPOINT: {
    IMAGES: {
      PHOTO_TAGS: 'images/photo_tags',
      CHOICES: 'images/choices',
      CLOSED_QUESTIONS: 'images/closed_questions',
      MESSAGES: 'images/messages',
      PREDICTIONS: 'prime/predictions',
      IMAGE: 'projects/images',
    },
    TEXT: {
      CATEGORIES: 'text/text_categories',
      PROFANITY: {
        FILTERS: 'text/profanity/filters',
        TASKS: 'text/profanity/tasks',
      },
      CLOSED_QUESTIONS: 'text/text_closed_questions',
    },
  },
};
