# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUserPlaylists*](#getuserplaylists)
  - [*GetSongsByArtist*](#getsongsbyartist)
- [**Mutations**](#mutations)
  - [*AddSongToPlaylist*](#addsongtoplaylist)
  - [*RecordListenEvent*](#recordlistenevent)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUserPlaylists
You can execute the `GetUserPlaylists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserPlaylists(vars: GetUserPlaylistsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPlaylistsData, GetUserPlaylistsVariables>;

interface GetUserPlaylistsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserPlaylistsVariables): QueryRef<GetUserPlaylistsData, GetUserPlaylistsVariables>;
}
export const getUserPlaylistsRef: GetUserPlaylistsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserPlaylists(dc: DataConnect, vars: GetUserPlaylistsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserPlaylistsData, GetUserPlaylistsVariables>;

interface GetUserPlaylistsRef {
  ...
  (dc: DataConnect, vars: GetUserPlaylistsVariables): QueryRef<GetUserPlaylistsData, GetUserPlaylistsVariables>;
}
export const getUserPlaylistsRef: GetUserPlaylistsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserPlaylistsRef:
```typescript
const name = getUserPlaylistsRef.operationName;
console.log(name);
```

### Variables
The `GetUserPlaylists` query requires an argument of type `GetUserPlaylistsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserPlaylistsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserPlaylists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserPlaylistsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserPlaylistsData {
  playlists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Playlist_Key)[];
}
```
### Using `GetUserPlaylists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserPlaylists, GetUserPlaylistsVariables } from '@dataconnect/generated';

// The `GetUserPlaylists` query requires an argument of type `GetUserPlaylistsVariables`:
const getUserPlaylistsVars: GetUserPlaylistsVariables = {
  userId: ..., 
};

// Call the `getUserPlaylists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserPlaylists(getUserPlaylistsVars);
// Variables can be defined inline as well.
const { data } = await getUserPlaylists({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserPlaylists(dataConnect, getUserPlaylistsVars);

console.log(data.playlists);

// Or, you can use the `Promise` API.
getUserPlaylists(getUserPlaylistsVars).then((response) => {
  const data = response.data;
  console.log(data.playlists);
});
```

### Using `GetUserPlaylists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserPlaylistsRef, GetUserPlaylistsVariables } from '@dataconnect/generated';

// The `GetUserPlaylists` query requires an argument of type `GetUserPlaylistsVariables`:
const getUserPlaylistsVars: GetUserPlaylistsVariables = {
  userId: ..., 
};

// Call the `getUserPlaylistsRef()` function to get a reference to the query.
const ref = getUserPlaylistsRef(getUserPlaylistsVars);
// Variables can be defined inline as well.
const ref = getUserPlaylistsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserPlaylistsRef(dataConnect, getUserPlaylistsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playlists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playlists);
});
```

## GetSongsByArtist
You can execute the `GetSongsByArtist` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSongsByArtist(vars: GetSongsByArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongsByArtistData, GetSongsByArtistVariables>;

interface GetSongsByArtistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSongsByArtistVariables): QueryRef<GetSongsByArtistData, GetSongsByArtistVariables>;
}
export const getSongsByArtistRef: GetSongsByArtistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSongsByArtist(dc: DataConnect, vars: GetSongsByArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongsByArtistData, GetSongsByArtistVariables>;

interface GetSongsByArtistRef {
  ...
  (dc: DataConnect, vars: GetSongsByArtistVariables): QueryRef<GetSongsByArtistData, GetSongsByArtistVariables>;
}
export const getSongsByArtistRef: GetSongsByArtistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSongsByArtistRef:
```typescript
const name = getSongsByArtistRef.operationName;
console.log(name);
```

### Variables
The `GetSongsByArtist` query requires an argument of type `GetSongsByArtistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSongsByArtistVariables {
  artistName: string;
}
```
### Return Type
Recall that executing the `GetSongsByArtist` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSongsByArtistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetSongsByArtist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSongsByArtist, GetSongsByArtistVariables } from '@dataconnect/generated';

// The `GetSongsByArtist` query requires an argument of type `GetSongsByArtistVariables`:
const getSongsByArtistVars: GetSongsByArtistVariables = {
  artistName: ..., 
};

// Call the `getSongsByArtist()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSongsByArtist(getSongsByArtistVars);
// Variables can be defined inline as well.
const { data } = await getSongsByArtist({ artistName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSongsByArtist(dataConnect, getSongsByArtistVars);

console.log(data.songs);

// Or, you can use the `Promise` API.
getSongsByArtist(getSongsByArtistVars).then((response) => {
  const data = response.data;
  console.log(data.songs);
});
```

### Using `GetSongsByArtist`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSongsByArtistRef, GetSongsByArtistVariables } from '@dataconnect/generated';

// The `GetSongsByArtist` query requires an argument of type `GetSongsByArtistVariables`:
const getSongsByArtistVars: GetSongsByArtistVariables = {
  artistName: ..., 
};

// Call the `getSongsByArtistRef()` function to get a reference to the query.
const ref = getSongsByArtistRef(getSongsByArtistVars);
// Variables can be defined inline as well.
const ref = getSongsByArtistRef({ artistName: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSongsByArtistRef(dataConnect, getSongsByArtistVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.songs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.songs);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddSongToPlaylist
You can execute the `AddSongToPlaylist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addSongToPlaylist(vars: AddSongToPlaylistVariables): MutationPromise<AddSongToPlaylistData, AddSongToPlaylistVariables>;

interface AddSongToPlaylistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddSongToPlaylistVariables): MutationRef<AddSongToPlaylistData, AddSongToPlaylistVariables>;
}
export const addSongToPlaylistRef: AddSongToPlaylistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addSongToPlaylist(dc: DataConnect, vars: AddSongToPlaylistVariables): MutationPromise<AddSongToPlaylistData, AddSongToPlaylistVariables>;

interface AddSongToPlaylistRef {
  ...
  (dc: DataConnect, vars: AddSongToPlaylistVariables): MutationRef<AddSongToPlaylistData, AddSongToPlaylistVariables>;
}
export const addSongToPlaylistRef: AddSongToPlaylistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addSongToPlaylistRef:
```typescript
const name = addSongToPlaylistRef.operationName;
console.log(name);
```

### Variables
The `AddSongToPlaylist` mutation requires an argument of type `AddSongToPlaylistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddSongToPlaylistVariables {
  playlistId: UUIDString;
  songId: UUIDString;
  position: number;
  addedAt: TimestampString;
}
```
### Return Type
Recall that executing the `AddSongToPlaylist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddSongToPlaylistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddSongToPlaylistData {
  playlistSong_insert: PlaylistSong_Key;
}
```
### Using `AddSongToPlaylist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addSongToPlaylist, AddSongToPlaylistVariables } from '@dataconnect/generated';

// The `AddSongToPlaylist` mutation requires an argument of type `AddSongToPlaylistVariables`:
const addSongToPlaylistVars: AddSongToPlaylistVariables = {
  playlistId: ..., 
  songId: ..., 
  position: ..., 
  addedAt: ..., 
};

// Call the `addSongToPlaylist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addSongToPlaylist(addSongToPlaylistVars);
// Variables can be defined inline as well.
const { data } = await addSongToPlaylist({ playlistId: ..., songId: ..., position: ..., addedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addSongToPlaylist(dataConnect, addSongToPlaylistVars);

console.log(data.playlistSong_insert);

// Or, you can use the `Promise` API.
addSongToPlaylist(addSongToPlaylistVars).then((response) => {
  const data = response.data;
  console.log(data.playlistSong_insert);
});
```

### Using `AddSongToPlaylist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addSongToPlaylistRef, AddSongToPlaylistVariables } from '@dataconnect/generated';

// The `AddSongToPlaylist` mutation requires an argument of type `AddSongToPlaylistVariables`:
const addSongToPlaylistVars: AddSongToPlaylistVariables = {
  playlistId: ..., 
  songId: ..., 
  position: ..., 
  addedAt: ..., 
};

// Call the `addSongToPlaylistRef()` function to get a reference to the mutation.
const ref = addSongToPlaylistRef(addSongToPlaylistVars);
// Variables can be defined inline as well.
const ref = addSongToPlaylistRef({ playlistId: ..., songId: ..., position: ..., addedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addSongToPlaylistRef(dataConnect, addSongToPlaylistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlistSong_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistSong_insert);
});
```

## RecordListenEvent
You can execute the `RecordListenEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
recordListenEvent(vars: RecordListenEventVariables): MutationPromise<RecordListenEventData, RecordListenEventVariables>;

interface RecordListenEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordListenEventVariables): MutationRef<RecordListenEventData, RecordListenEventVariables>;
}
export const recordListenEventRef: RecordListenEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
recordListenEvent(dc: DataConnect, vars: RecordListenEventVariables): MutationPromise<RecordListenEventData, RecordListenEventVariables>;

interface RecordListenEventRef {
  ...
  (dc: DataConnect, vars: RecordListenEventVariables): MutationRef<RecordListenEventData, RecordListenEventVariables>;
}
export const recordListenEventRef: RecordListenEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the recordListenEventRef:
```typescript
const name = recordListenEventRef.operationName;
console.log(name);
```

### Variables
The `RecordListenEvent` mutation requires an argument of type `RecordListenEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RecordListenEventVariables {
  songId: UUIDString;
}
```
### Return Type
Recall that executing the `RecordListenEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RecordListenEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RecordListenEventData {
  listenEvent_insert: ListenEvent_Key;
}
```
### Using `RecordListenEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, recordListenEvent, RecordListenEventVariables } from '@dataconnect/generated';

// The `RecordListenEvent` mutation requires an argument of type `RecordListenEventVariables`:
const recordListenEventVars: RecordListenEventVariables = {
  songId: ..., 
};

// Call the `recordListenEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await recordListenEvent(recordListenEventVars);
// Variables can be defined inline as well.
const { data } = await recordListenEvent({ songId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await recordListenEvent(dataConnect, recordListenEventVars);

console.log(data.listenEvent_insert);

// Or, you can use the `Promise` API.
recordListenEvent(recordListenEventVars).then((response) => {
  const data = response.data;
  console.log(data.listenEvent_insert);
});
```

### Using `RecordListenEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, recordListenEventRef, RecordListenEventVariables } from '@dataconnect/generated';

// The `RecordListenEvent` mutation requires an argument of type `RecordListenEventVariables`:
const recordListenEventVars: RecordListenEventVariables = {
  songId: ..., 
};

// Call the `recordListenEventRef()` function to get a reference to the mutation.
const ref = recordListenEventRef(recordListenEventVars);
// Variables can be defined inline as well.
const ref = recordListenEventRef({ songId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = recordListenEventRef(dataConnect, recordListenEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.listenEvent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.listenEvent_insert);
});
```

