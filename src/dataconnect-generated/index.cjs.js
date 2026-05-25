const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'projeto-liver',
  location: 'us-south1'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const getUserPlaylistsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserPlaylists', inputVars);
}
getUserPlaylistsRef.operationName = 'GetUserPlaylists';
exports.getUserPlaylistsRef = getUserPlaylistsRef;

exports.getUserPlaylists = function getUserPlaylists(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserPlaylistsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const addSongToPlaylistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSongToPlaylist', inputVars);
}
addSongToPlaylistRef.operationName = 'AddSongToPlaylist';
exports.addSongToPlaylistRef = addSongToPlaylistRef;

exports.addSongToPlaylist = function addSongToPlaylist(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addSongToPlaylistRef(dcInstance, inputVars));
}
;

const getSongsByArtistRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSongsByArtist', inputVars);
}
getSongsByArtistRef.operationName = 'GetSongsByArtist';
exports.getSongsByArtistRef = getSongsByArtistRef;

exports.getSongsByArtist = function getSongsByArtist(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getSongsByArtistRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const recordListenEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordListenEvent', inputVars);
}
recordListenEventRef.operationName = 'RecordListenEvent';
exports.recordListenEventRef = recordListenEventRef;

exports.recordListenEvent = function recordListenEvent(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(recordListenEventRef(dcInstance, inputVars));
}
;
