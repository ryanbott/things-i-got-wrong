import Subscribe from './Subscribe';

// const showHosts = [
//   {
//     name: 'Ryan Bott',
//     photo: '',
//     bio: 'Web Developer in Chicago. Music Maker. Food Crafter. Board Gamer.',
//     social: 'https://instagram.com/ryanbott',
//     socialType: 'instagram',
//     link: 'https://ryanbott.com'
//   }, {
//     name: 'Rachel Miller',
//     photo: '',
//     bio: '',
//     social: '',
//     socialType: '',
//     link: '/work',
//     linkType: 'instagram'
//   }, {
//     name: 'Stuart Hopkins',
//     photo: '',
//     bio: '',
//     social: '',
//     socialType: '',
//     link: '/work',
//     linkType: 'instagram'
//   },{
//     name: 'Mark Spirek',
//     photo: '',
//     bio: '',
//     social: '',
//     socialType: '',
//     link: '/work',
//     linkType: 'instagram'
//   },
// ]


const Header = () => (
  <header className="header">
    <div className="header__left">
      <img className="header__logo" src="/static/tigw-logo.png" alt="Syntax" />
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">Your favorite general trivia podcast with a healthy dose of internet and media things.</h2>
        {/* <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQlAo1wXHiJMySdU-h8QMtfoz92aMS9eycEHXB6eRCLh8KHA/viewform"
          className="title__potluck-btn"
        >
          Submit a Question →
        </a> */}
      </div>




      <div className="people">
        <div className="person">
          <img
            src="/static/ryan_400.jpg"
            alt="headshot of Ryan Bott"
            className="avatar"
          />
          <h3>Ryan Bott</h3>
          <a
            target="_blank"
            href="https://instagram.com/ryanbott"
            className="person__social person__social--twitter"
          >
            @ryanbott
          </a>
          <p>
            Web Developer in Chicago. Music Maker. Food Crafter. Board Gamer. {' '}
            <a target="_blank" href="https://ryanbott.com/">
              ryanbott.com
            </a>
          </p>
        </div>



        <div className="person">
          <img
            src="/static/rachel_400.jpg"
            alt="Headshot of Rachel Miller"
            className="avatar"
          />
          <h3>Rachel Miller</h3>
          <a
            target="_blank"
            href="https://instagram.com/rachelsmfr"
            className="person__social person__social--instagram"
          > @rachelsmfr
          </a>
          <p>
            Lover of French and Netflix Binging. Avid Traveler and Fried Chicken Eater. {' '}
            <a target="_blank" href="https://rsmfr.com">
              rsmfr.com
            </a>
          </p>
        </div>


        {/* <div className="person">
          <img
            src="/static/ryan_400.jpg"
            alt="Headshot of Stu Hopkins"
            className="avatar"
          />
          <h3>Stuart Hopkins</h3>
          <a
            target="_blank"
            href="https://twitter.com/#"
            className="person__social person__social--instagram"
          >
            @stu
          </a>
          <p>
            Stu Bio {' '}
            <a target="_blank" href="#">
              #
            </a>
          </p>
        </div> */}

        <div className="person">
          <img
            src="/static/mark_400.jpg"
            alt="Headshot of Mark Spirek"
            className="avatar"
          />
          <h3>Mark Spirek</h3>
          <a
            target="_blank"
            href="https://twitter.com/mspirek/"
            className="person__social person__social--twitter"
          >
            @mspirek
          </a>
          <p>
            Web Developer, UI/UX expert, with a passion for product. {' '}
            <a target="_blank" href="https://markspirek.com">
              markspirek.com
            </a>
          </p>
        </div>

      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
