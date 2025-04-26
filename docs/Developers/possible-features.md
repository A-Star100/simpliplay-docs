# Possible Features

## Media Share (Proto 1)
We've been thinking about introducing a new feature to all versions of the app called Media Share. The device which Media Share was started on will act as a server (most likely
a static server that shares the timestamps of media and the link to it).

The person who started Media Share will receive a notification to share a link with other users. Other users can simply copy-paste the link and the app will automatically keep
FETCH'ing the data with some sort of interval (Clock component in App Inventor for Android, setInterval in desktop and web apps). 

To avoid issues with CORS disabling proper FETCH requests, CORS will be disabled (although it reduces security).

This feature is a good idea but can compromise users' security by starting a CORS-disabled server, and accessibility will be limited depending on what Wi-Fi you use, because the server
will be stuck to LAN.

## Media Share (Proto 2)
We've been thinking about introducing a new feature to all versions of the app called Media Share. The device which Media Share was started on will contact a cloud server that will
create an API endpoint that serves text data of the timestamps of media and the link to it.

Users could then join Media Share anywhere on any Wi-Fi using the cloud service's API endpoint. Although this is much safer and better than the previous approach,
**it would be quite expensive on our end**.

## Watch Party
Watch Party is like the Media Share feature, but no syncing is involved. We've also created [MovieServer](https://aboutmovieserver.netlify.app), which has a watch party feature built-in.
We could modify the existing chat server/watch party within MovieServer so that it works with SimpliPlay's Watch Party feature.

It wouldn't cost anything because the server would still be LAN-based, *and* it would be much safer because CORS is disabled; it would be perfect. But it seems like too much of a
**distracting feature**. Users can always set up Watch Party themselves instead of using SimpliPlay, it could be its own thing.
