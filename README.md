## JS Assignment

### YouTube Search Dashboard

You're assigned to build a web application that will enable our users to search for YouTube Channels,
and display relevant information about them. The search should return YouTube channels based on the keyword provided by the user and also display details about any selected channel.

> The API endpoints that will be required for this application, are listed in the end of this document,
> and the access key will be provided separately in a secure way.

#### 1. Summary

The application should allow users to search for YouTube channels by keyword, and return a list of channels sorted by relevance.
By clicking in one of the resulting items, the user is presented with the details of the channel.

#### 2. Product Requirements

- **Search field**

  Where the user can input the search keyword

- **List of channels**

  The result of the search

- **Channel details**

  After the user selected a channel, the App should display the following details:

  - View count
  - Subscription count
  - Video count

- **Routing**
  Your app should be structured in at least two pages.
  The first should contain the search field and results, and the second showing the selected channel's data.

- **Tests**
  Implement some unit tests.
- **Extra**
  You can add functionalities like sorting, additional channel data and search possibilities, it is up to you.

#### 3. Technical requirements

- JavaScript or Typescript
- You're free to use the libraries or frameworks of your choice
- [Official YouTube API](https://developers.google.com/youtube/v3/docs/channels)

#### 4. Deployment

No deployment is needed. You can either send the code in a ZIP file via e-mail or create a private Github repository and add us as contributors.

#### 5. Remarks

- Send your code in a structured Git repository.
- If you feel adventurous, feel free to increment the assignment with more data, but don't stress it.

#### 6. Resources

Search for YouTube channels API endpoint:

```
GET https://www.googleapis.com/youtube/v3/search?key=[api_key]&part=snippet&q=[search_term]
```

Get details for channel API endpoint:

```
GET https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=[channel_id]&key=[api_key]
```

The full YouTube API reference can be found [here](https://developers.google.com/youtube/v3/docs/).

The API key will be provided securely.
