import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddSongToPlaylistData {
  playlistSong_insert: PlaylistSong_Key;
}

export interface AddSongToPlaylistVariables {
  playlistId: UUIDString;
  songId: UUIDString;
  position: number;
  addedAt: TimestampString;
}

export interface Album_Key {
  id: UUIDString;
  __typename?: 'Album_Key';
}

export interface Artist_Key {
  id: UUIDString;
  __typename?: 'Artist_Key';
}

export interface GetSongsByArtistData {
  songs: ({
    id: UUIDString;
    title: string;
    durationSeconds: number;
    genre?: string | null;
    album?: {
      title: string;
      releaseYear: number;
    };
  } & Song_Key)[];
}

export interface GetSongsByArtistVariables {
  artistName: string;
}

export interface GetUserPlaylistsData {
  playlists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Playlist_Key)[];
}

export interface GetUserPlaylistsVariables {
  userId: UUIDString;
}

export interface ListenEvent_Key {
  id: UUIDString;
  __typename?: 'ListenEvent_Key';
}

export interface PlaylistSong_Key {
  playlistId: UUIDString;
  songId: UUIDString;
  __typename?: 'PlaylistSong_Key';
}

export interface Playlist_Key {
  id: UUIDString;
  __typename?: 'Playlist_Key';
}

export interface RecordListenEventData {
  listenEvent_insert: ListenEvent_Key;
}

export interface RecordListenEventVariables {
  songId: UUIDString;
}

export interface Song_Key {
  id: UUIDString;
  __typename?: 'Song_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface GetUserPlaylistsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserPlaylistsVariables): QueryRef<GetUserPlaylistsData, GetUserPlaylistsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserPlaylistsVariables): QueryRef<GetUserPlaylistsData, GetUserPlaylistsVariables>;
  operationName: string;
}
export const getUserPlaylistsRef: GetUserPlaylistsRef;

export function getUserPlaylists(vars: GetUserPlaylistsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPlaylistsData, GetUserPlaylistsVariables>;
export function getUserPlaylists(dc: DataConnect, vars: GetUserPlaylistsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPlaylistsData, GetUserPlaylistsVariables>;

interface AddSongToPlaylistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddSongToPlaylistVariables): MutationRef<AddSongToPlaylistData, AddSongToPlaylistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddSongToPlaylistVariables): MutationRef<AddSongToPlaylistData, AddSongToPlaylistVariables>;
  operationName: string;
}
export const addSongToPlaylistRef: AddSongToPlaylistRef;

export function addSongToPlaylist(vars: AddSongToPlaylistVariables): MutationPromise<AddSongToPlaylistData, AddSongToPlaylistVariables>;
export function addSongToPlaylist(dc: DataConnect, vars: AddSongToPlaylistVariables): MutationPromise<AddSongToPlaylistData, AddSongToPlaylistVariables>;

interface GetSongsByArtistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSongsByArtistVariables): QueryRef<GetSongsByArtistData, GetSongsByArtistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSongsByArtistVariables): QueryRef<GetSongsByArtistData, GetSongsByArtistVariables>;
  operationName: string;
}
export const getSongsByArtistRef: GetSongsByArtistRef;

export function getSongsByArtist(vars: GetSongsByArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongsByArtistData, GetSongsByArtistVariables>;
export function getSongsByArtist(dc: DataConnect, vars: GetSongsByArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongsByArtistData, GetSongsByArtistVariables>;

interface RecordListenEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordListenEventVariables): MutationRef<RecordListenEventData, RecordListenEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RecordListenEventVariables): MutationRef<RecordListenEventData, RecordListenEventVariables>;
  operationName: string;
}
export const recordListenEventRef: RecordListenEventRef;

export function recordListenEvent(vars: RecordListenEventVariables): MutationPromise<RecordListenEventData, RecordListenEventVariables>;
export function recordListenEvent(dc: DataConnect, vars: RecordListenEventVariables): MutationPromise<RecordListenEventData, RecordListenEventVariables>;

