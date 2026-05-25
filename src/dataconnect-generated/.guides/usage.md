# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useGetUserPlaylists, useAddSongToPlaylist, useGetSongsByArtist, useRecordListenEvent } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useGetUserPlaylists(getUserPlaylistsVars);

const { data, isPending, isSuccess, isError, error } = useAddSongToPlaylist(addSongToPlaylistVars);

const { data, isPending, isSuccess, isError, error } = useGetSongsByArtist(getSongsByArtistVars);

const { data, isPending, isSuccess, isError, error } = useRecordListenEvent(recordListenEventVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getUserPlaylists, addSongToPlaylist, getSongsByArtist, recordListenEvent } from '@dataconnect/generated';


// Operation GetUserPlaylists:  For variables, look at type GetUserPlaylistsVars in ../index.d.ts
const { data } = await GetUserPlaylists(dataConnect, getUserPlaylistsVars);

// Operation AddSongToPlaylist:  For variables, look at type AddSongToPlaylistVars in ../index.d.ts
const { data } = await AddSongToPlaylist(dataConnect, addSongToPlaylistVars);

// Operation GetSongsByArtist:  For variables, look at type GetSongsByArtistVars in ../index.d.ts
const { data } = await GetSongsByArtist(dataConnect, getSongsByArtistVars);

// Operation RecordListenEvent:  For variables, look at type RecordListenEventVars in ../index.d.ts
const { data } = await RecordListenEvent(dataConnect, recordListenEventVars);


```