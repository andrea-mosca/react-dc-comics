export default function Footer() {
  return (
    <footer>
      <section id="footer-link">
        <div className="container d-flex flex-row justify-content-between py-4">
            <div className="d-flex flex-row">
                <div>
                <div className="d-flex flex-column">
                    <h3>DC COMICS</h3>
                    <div>
                    <ul>
                        <li>
                        <a href="#">Characters</a>
                        </li>
                        <li>
                        <a href="#">TComics</a>
                        </li>
                        <li>
                        <a href="#">Movies</a>
                        </li>
                        <li>
                        <a href="#">TV</a>
                        </li>
                        <li>
                        <a href="#">Games</a>
                        </li>
                        <li>
                        <a href="#">Videos</a>
                        </li>
                        <li>
                        <a href="#">News</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <div>
                    <ul>
                        <li>
                        <a href="#">Shop DC</a>
                        </li>
                        <li>
                        <a href="#">Shop DC Collectibles</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div>
                <h3>DC</h3>
                <div>
                    <ul>
                    <li>
                        <a href="#">Terms Of Us</a>
                    </li>
                    <li>
                        <a href="#">Privacy policy</a>
                    </li>
                    <li>
                        <a href="#">Ad Choices</a>
                    </li>
                    <li>
                        <a href="#">Advertising</a>
                    </li>
                    <li>
                        <a href="#">Jobs</a>
                    </li>
                    <li>
                        <a href="#">Subscruptions</a>
                    </li>
                    <li>
                        <a href="#">Talent Workshops</a>
                    </li>
                    <li>
                        <a href="#">CPSC Certificates</a>
                    </li>
                    <li>
                        <a href="#">Ratings</a>
                    </li>
                    <li>
                        <a href="#">Shop Help</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div>
                <h3>SITES</h3>
                <div>
                    <ul>
                    <li>
                        <a href="#">DC</a>
                    </li>
                    <li>
                        <a href="#">MAD Magazine</a>
                    </li>
                    <li>
                        <a href="#">DC Kids</a>
                    </li>
                    <li>
                        <a href="#">DC Universe</a>
                    </li>
                    <li>
                        <a href="#">DC Power Visa</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div>
                <img src="dc-logo-bg.png" alt="" />
            </div>
        </div>
      </section>

      <section id="footer-social">
        <div className="container d-flex flex-row justify-content-between py-4">
          <div>
            <button type="button" className="btn btn-outline-light border border-primary">
              SIGN-UP NOW!
            </button>
          </div>
          <div>
            <span className="text-primary px-3">FOLLOW US</span>
            <img src="footer-facebook.png" alt="" className="px-3" />
            <img src="footer-periscope.png" alt="" className="px-3" />
            <img src="footer-youtube.png" alt="" className="px-3" />
            <img src="footer-pinterest.png" alt="" className="px-3" />
            <img src="footer-twitter.png" alt="" className="px-3" />
          </div>
        </div>
      </section>
    </footer>
  );
}
