import { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'projeto-liver',
  location: 'us-south1'
};
export const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
export const getUserPlaylistsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserPlaylists', inputVars);
}
getUserPlaylistsRef.operationName = 'GetUserPlaylists';

export function getUserPlaylists(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserPlaylistsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const addSongToPlaylistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSongToPlaylist', inputVars);
}
addSongToPlaylistRef.operationName = 'AddSongToPlaylist';

export function addSongToPlaylist(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addSongToPlaylistRef(dcInstance, inputVars));
}

export const getSongsByArtistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSongsByArtist', inputVars);
}
getSongsByArtistRef.operationName = 'GetSongsByArtist';

export function getSongsByArtist(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getSongsByArtistRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const recordListenEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordListenEvent', inputVars);
}
recordListenEventRef.operationName = 'RecordListenEvent';

export function recordListenEvent(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(recordListenEventRef(dcInstance, inputVars));
}

