import { retrieveUser } from '../actions/user';
import Api from './Api';
import { RETRIEVE_USER } from '../actions/types';

// Configure App resources:
// - Onboarding
// - UI libraries initialized
// - Load fonts
// - Etc.

export function getUser(dispatch) {
  return new Promise((resolve, reject) => {
    const retrieveUserAction = retrieveUser();
    retrieveUserAction(dispatch)
      .then(profile => resolve(profile))
      .catch(e => {
        console.log('handled errr', e);
      });
  });
}

export default {
  configure(dispatch, getState) {
    const state = getState();

    // if (state.auth.authorized) getUser(dispatch);
  },
};
