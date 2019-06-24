import Http from '../../lib/http';
import { search } from '../../config/endpoints';

function searchPlaylist(text, token) {
  return Http.get(`${search}?q=${text}&type=playlist`, { token, withToken: true });
}

export default {
  searchPlaylist,
}
