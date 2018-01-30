## Project 2 - Instanews App

One-page, responsive website that allows a user to filter top news story categories via the New York Times API.

## Code Example
```
  var picStories = result.results.filter(function (article) {
          return article.multimedia.length;
        }).slice(0, 12);
```

        This is the jquery script that used to filter out the articles that doesn't have images and also limited the max articles return to 12 items.

## Development

To fix a bug or enhance an existing module, follow these steps:

<ul>
<li>Fork the repo </li>
<li>Create a new branch (git checkout -b improve-feature)</li>
<li>Make the appropriate changes in the files</li>
<li>Add changes to reflect the changes made</li>
<li>Commit your changes (git commit -am 'Improve feature')</li>
<li>Push to the branch (git push origin improve-feature)</li>
<li>Create a Pull Request</li>
</ul>

## Built with

<ul>
<li> jQuery - Ajax - jQuery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.</li>
<li> The New York Times Developer Network - The Times Developer Network is our API clearinghouse and community. Get the latest news about New York Times APIs, read the API documentation, browse the application gallery and connect with other developers in the forum.</li>
</ul>


## Contributors

sslnyx

## License

The NYT APIs are owned by NYT and are licensed to you on a worldwide (except as limited below), non-exclusive, non-sublicenseable basis on the terms and conditions set forth herein. These Terms of Use define legal use of the NYT APIs, all updates, revisions, substitutions, and any copies of the NYT APIs made by or for you. All rights not expressly granted to you are reserved by NYT.