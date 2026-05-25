import { GetUserPlaylistsData, GetUserPlaylistsVariables, AddSongToPlaylistData, AddSongToPlaylistVariables, GetSongsByArtistData, GetSongsByArtistVariables, RecordListenEventData, RecordListenEventVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetUserPlaylists(vars: GetUserPlaylistsVariables, options?: useDataConnectQueryOptions<GetUserPlaylistsData>): UseDataConnectQueryResult<GetUserPlaylistsData, GetUserPlaylistsVariables>;
export function useGetUserPlaylists(dc: DataConnect, vars: GetUserPlaylistsVariables, options?: useDataConnectQueryOptions<GetUserPlaylistsData>): UseDataConnectQueryResult<GetUserPlaylistsData, GetUserPlaylistsVariables>;

export function useAddSongToPlaylist(options?: useDataConnectMutationOptions<AddSongToPlaylistData, FirebaseError, AddSongToPlaylistVariables>): UseDataConnectMutationResult<AddSongToPlaylistData, AddSongToPlaylistVariables>;
export function useAddSongToPlaylist(dc: DataConnect, options?: useDataConnectMutationOptions<AddSongToPlaylistData, FirebaseError, AddSongToPlaylistVariables>): UseDataConnectMutationResult<AddSongToPlaylistData, AddSongToPlaylistVariables>;

export function useGetSongsByArtist(vars: GetSongsByArtistVariables, options?: useDataConnectQueryOptions<GetSongsByArtistData>): UseDataConnectQueryResult<GetSongsByArtistData, GetSongsByArtistVariables>;
export function useGetSongsByArtist(dc: DataConnect, vars: GetSongsByArtistVariables, options?: useDataConnectQueryOptions<GetSongsByArtistData>): UseDataConnectQueryResult<GetSongsByArtistData, GetSongsByArtistVariables>;

export function useRecordListenEvent(options?: useDataConnectMutationOptions<RecordListenEventData, FirebaseError, RecordListenEventVariables>): UseDataConnectMutationResult<RecordListenEventData, RecordListenEventVariables>;
export function useRecordListenEvent(dc: DataConnect, options?: useDataConnectMutationOptions<RecordListenEventData, FirebaseError, RecordListenEventVariables>): UseDataConnectMutationResult<RecordListenEventData, RecordListenEventVariables>;
