# power-turtle

Interactive turtle power in your browser.

Visit the site to try it out: http://timothypratley.github.io/power-turtle

## Todo

* Allow preferred language in route
* Specify a canvas in freestyle route
* Translate lessons to other languages

## Developing

Pull requests welcome :)

To generate the translations run:

    lein cban

To get an interactive development environment run:

    lein dev

After the first compilation completes, open a new tab and run:

    lein collect-caches

Now open your browser at [localhost:3449](http://localhost:3449/).

## Deploy

    ./deploy.sh

## License

Copyright © 2016 Timothy Pratley

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
