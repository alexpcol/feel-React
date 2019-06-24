import Http from '../../lib/http';
import { search } from '../../config/endpoints';

function searchPlaylist(text) {
  return Http.get(`${search}?q=${text}&type=playlist`);
}

export default {
  searchPlaylist,
}
