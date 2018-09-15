export default () => (
  <footer className="bottom">
     {/* <p>
       Want to <a href="/sponsor">Sponsor the Podcast?</a>
     </p> */}
    <p>&copy; Things I Got Wrong {new Date().getFullYear()}</p>
    <p>
      Built by forking Wes Bos and Scott Tolinkski&#39;s rad{' '}
      <a href="https://github.com/wesbos/syntax" target="_blank">
       syntax.fm website repo
      </a>.
    </p>
  </footer>
);
