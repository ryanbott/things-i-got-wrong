const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://itunes.apple.com/us/podcast/things-i-got-wrong/id1435155571?mt=2"
        >
          iTunes
        </a>
      </li>
      <li className="subscribe__link subscribe__link--overcast">
        <a
          target="_blank"
          href="https://overcast.fm/itunes1435155571/things-i-got-wrong"
        >
          Overcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--google">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82OThlZTA0L3BvZGNhc3QvcnNz"
        >
          Google Podcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--stitcher">
        <a target="_blank" href="https://www.stitcher.com/podcast/anchor-podcasts/things-i-got-wrong">
          Stitcher
        </a>
      </li>
      <li className="subscribe__link subscribe__link--pocketcasts">
        <a target="_blank" href="https://pca.st/cx6C">
          PocketCasts
        </a>
      </li>
      <li className="subscribe__link subscribe__link--googleplay">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82OThlZTA0L3BvZGNhc3QvcnNz"
        >
          Google Play
        </a>
      </li>
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/5Doljom3qx2GCxqlQGRtgV"
        >
          Spotify
        </a>
      </li>
      <li className="subscribe__link subscribe__link--rss">
        <a target="_blank" href="https://anchor.fm/s/698ee04/podcast/rss">
          RSS
        </a>
      </li>
    </ul>
  </div>
);

export default Subscribe;
