
export async function getSession() {
  console.log('[Auth] getSession');
  const session = JSON.parse(storedSession);
  console.log('[Auth] getSession session is', session);
  return session;
}

export async function getAuthorizationToken() {
  console.log('[Auth] getAuthorizationToken');
  const { accessToken } = await getSession();
  return `Bearer ${accessToken}`;
}

export function hasPreviousSession() {
  return getSession().then(session => (session || false));
}

export function authenticateUserWithBiometrics() {
  return new Promise((resolve, reject) => {
    console.log('[Auth] authenticateUserWithBiometrics');
  });
}

export function setSessionExpiry(expiresIn, cb) {
  console.log('[Auth] setSessionExpiry');
  setTimeout(cb, (expiresIn * 100) - 180000);
}

export function storeCredentials(data) {
  console.log('[Auth] Credentials stored');
  return session;
}

export function updateCredentials(credentials) {
  return storeCredentials(credentials, true);
}

export async function destroyCredentials() {
  console.log('[Auth] destroyCredentials');
  console.log('[Auth] destroyCredentials: credentials destroyed');
  return true;
}
