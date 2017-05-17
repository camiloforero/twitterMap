# twitterStreamerMeteor

A simple application that overlays the location of all tweets in Colombia (and some parts of Venezuela, Ecuador, Brazil and Panamá that fall within the bounding box) on a map of the country. It requires you to setup your credentials on the server using environment variables:

```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"

meteor npm install
meteor
```

HOW TO USE

Just click on "Start!". The tweets will start coming. There is no search box, because:

"Bounding boxes do not act as filters for other filter parameters. For example track=twitter&locations=-122.75,36.8,-121.75,37.8 would match any Tweets containing the term Twitter (even non-geo Tweets) OR coming from the San Francisco area."

So it would be useless to add a search term, it will simply show *all* tweets made in Colombia.

MY SPECIAL TOUCH:

For this one I had to sacrifice the Colombian states changing color when hovering over them. But when you click on one of the dots that represent a tweet, an embedded version of the tweet will appear at the bottom of the page.
