# Consoles
Gaming consoles are a territory difficult to grasp, especially for smaller, community projects like SimpliPlay, which is currently in need of a proper development team. To support SimpliPlay, consider contributing or become a GitHub Contributor.

## For Xbox
We currently have an experimental [BlazorWASM](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) port of SimpliPlay.
:::warning
This BlazorWASM port is stale and won't be maintained further. Any bugs you encounter in the port will be ignored.
:::
Since BlazorWASM is not supported
on Xbox, this can be ported to a [UWP (Universal Windows Platform)](https://learn.microsoft.com/en-us/windows/uwp/) application which will
embed the web app with [WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/) (the web view used in legacy Microsoft Edge, before it migrated to Chromium).

:::important
**UWP apps require Windows (even for creation of a project), but most other .NET frameworks work on macOS and Linux as well**.
:::

[You may download the port here](https://www.dropbox.com/scl/fi/gt9errf3b6kk6nzcaedzu/wwwroot.zip?rlkey=5gktt0fydaa6zca43zojdntoz&st=x1pk2qon&dl=1).
Note that this port is only the contents of a regular `wwwroot` folder in a Blazor project. Copy these contents into your Blazor project's `wwwroot` folder.

You can create a Blazor project with .NET like this:

1. Install .NET if you haven't. `dotnet` is cross-platform (UWP apps require Windows however). (You may use Chocolatey, Microsoft installers for Windows, or Homebrew for macOS and Linux).
2. Create a BlazorWASM project like this:
   
   `
   dotnet new blazorwasm -n MediaPlayerApp && cd MediaPlayerApp
   `
   
4. After copying the contents of the port you downloaded into `MediaPlayerApp`'s `wwwroot` folder, publish a release with:
   
   `
   dotnet publish -c Release 
   `
   
   (This process can take 15 seconds or more to complete).

6. To test your output in a web browser, start an HTTP server of your choice (in this case Python 3) with:
   
   `
   cd ~/MediaPlayerApp/bin/Release/net9.0/publish/wwwroot
   &&
   python3 -m http.server 8080
   `
   :::important
   In order to perform other .NET related actions, make sure to change the current working directory back to `~/MediaPlayerApp`.
   Then, to test, visit [http://localhost:8080](http://localhost:8080) in your browser (or a custom port number if you chose one).
   :::

## Other Consoles
We have no ports available for consoles other than Xbox. You can try making one yourself.
