import Http from '../../lib/http';
import { emotion } from '../../config/endpoints';

function getEmotion(text) {
  return Http.post(
    emotion,
    {
      content: text,
    },
    {
      emotion: true,
      apiKey: 'b8JPL87330rx1hsLackt0zUZ6jvmD2MT'
    },
  );
}

export default {
  getEmotion,
}
