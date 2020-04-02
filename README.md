<p align="center">
  <a href="http://gcorp.cc/">
    <img src="springDay.png" alt="GCORP logo" width="72" height="72">
  </a>
</p>

<h3 align="center">SpringDay</h3>

<p align="center">
  Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br>
  <a href=""><strong>Explore SpringDay docs »</strong></a>
  <br>
  <br>
  <a href="">Report bug</a>
  ·
  <a href="">Request feature</a>
  ·
  <a href="/">Themes</a>
  ·
  <a href="http://gcorp.cc/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:



Read the [Getting started page](https://getspring-day.com/docs/4.4/getting-started/introduction/) for information on the framework contents, templates and examples, and more.


## Status



## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
spring-day/
└── dist/
    ├── css/
    │   
    └── js/
        
```

We provide compiled CSS and JS (`spring-day.*`), as well as compiled and minified CSS and JS (`spring-day.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`spring-day.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`spring-day.bundle.js` and minified `spring-day.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/spring-day/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/spring-day/issues/new).


## Documentation

spring-day's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getspring-day.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/4.4/assets/js/src/search.js` file.

### Running documentation locally

1. Run through the [tooling setup](https://getspring-day.com/docs/4.4/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

### Documentation for previous releases

You can find all our previous releases docs on <https://getspring-day.com/docs/versions/>.

[Previous releases](https://github.com/twbs/spring-day/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/spring-day/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/spring-day/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/twbs/spring-day/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Get updates on spring-day's development and chat with the project maintainers and community members.

- Follow [@getspring-day on Twitter](https://twitter.com/getspring-day).
- Read and subscribe to [The Official spring-day Blog](https://blog.getspring-day.com/).
- Join [the official Slack room](https://spring-day-slack.herokuapp.com/).
- Chat with fellow spring-daypers in IRC. On the `irc.freenode.net` server, in the `##spring-day` channel.
- Implementation help may be found at Stack Overflow (tagged [`spring-day-4`](https://stackoverflow.com/questions/tagged/spring-day-4)).
- Developers should use the keyword `spring-day` on packages which modify or add to the functionality of spring-day when distributing through [npm](https://www.npmjs.com/browse/keyword/spring-day) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, spring-day is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/spring-day/releases) for changelogs for each release version of spring-day. Release announcement posts on [the official spring-day blog](https://blog.getspring-day.com/) contain summaries of the most noteworthy changes made in each release.


## Creators

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>


## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="192" height="42">
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!


## Backers


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/spring-day#sponsor)]



## Copyright and license

Code and documentation copyright 2020-2020 the [GCORP Authors](https://github.com/gcorp-cc/SpringDay) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/spring-day/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
