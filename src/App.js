import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
          <Footer />
        </Router>
        <body>

          <header>
            <h1>Cigi Maria Tipton</h1>
            <nav>
              <a href="#about">About Me</a>
              <a href="#work">Work</a>
              <a href="#contact">Let's Connect</a>
              <a href="CigiTiptonWebDevResume.html">Resume</a>
            </nav>
          </header>

          <section className="hero-banner" id="description">
            <div className="hero-text" id="hero text">
              <h2>Art+Coding</h2>
            </div>
          </section>

          <main className="page-wrapper">

            <section className="page-section" id="about">
              <h2>Details</h2>
              <div>
                <p>
                  Leveraging an ad agency background with my artistic passions, programming has become my direction for my passion.
                </p>
                <p>
                  Currently enrolled in SMU's Full Stack Web Developer course loving the challenges that it has presented me. This journey makes me appreciate the knowledge
                  and skills that I gained both at the ad agency and by owning my own photography business.
                </p>
              </div>
            </section>

            <section className="page-section" id="work">
              <h2>Work</h2>
              <div className="flex-container">

                <a href="http://podshack.herokuapp.com" className="flex-item lets-code">
                  <div>
                    <h3> Pod Shack </h3>
                    <span>JS, CSS, HTML, Passport, MySQL</span>
                  </div>
                </a>
                <a href="https://mirrorlessmind.github.io/WeatherFlix/" className="flex-item weather-flix">
                  <div>
                    <h3>Weather Flix</h3>
                    <span>Bulma, Java, JQuery, CSS, HTML</span>
                  </div>
                </a>

                <a href="https://mirrorlessmind.github.io/GitPassword/" className="flex-item git-password">
                  <div>
                    <h3>Password Generator</h3>
                    <span>Java, CSS, HTML</span>
                  </div>
                </a>


                <a href="https://mirrorlessmind.github.io/BeautifulDay/" className="flex-item beautiful-day">
                  <div>
                    <h3>Beautiful Day</h3>
                    <span>Java, JQuery, CSS, HTML</span>
                  </div>
                </a>
              </div>
            </section>

            <section className="page-section contact" id="contact">
              <h2>Let's Connect</h2>
              <div>
                <address>

                  <a href="https://www.mirrorlessmind.com/"> Website: MMS</a>
                  <a href="mailto:cigi@mirrorlessmind.com">cigi@mirrorlessmind.com</a>
                  <a href="https://github.com/mirrorlessmind">GitHub</a>
                  <a href="https://twitter.com/mirrorlessmind">Twitter</a>
                  <a href="https://www.linkedin.com/in/mirrorlessmind/">LinkedIN</a>
                </address>
              </div>
            </section>
          </main>
          <footer>
            <h4> Cigi Maria Tipton Spring 2021</h4>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
