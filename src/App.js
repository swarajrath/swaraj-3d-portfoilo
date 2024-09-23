import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://github.com/NathanielBenguira/3d-portfolio" target="_blank" class="github-corner" aria-label="View source on GitHub" rel="noreferrer">
      <svg width="80" height="80" viewBox="0 0 250 250" style="z-index:42;fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
        </a>
        {/* <style>
          .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
        </style> */}
      <canvas class="webgl">
      </canvas>
      <div class="loading-screen">
        <h1 class="loading-screen__title">
          Nathaniel Benguira 
          <span class="loading-screen__title--loader">Swaraj Rath</span>
        </h1>
        <div class="loading-screen__subtitle" style="height: 90px;">
          Welcome to my virtual office
        </div>
        <div class="loading-screen__sound">
          Sound enabled
        </div>
        <div class="loading-screen__button">
          ENTER
        </div>
      </div>
      <div class="details">
        <div class="screen screen--education">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            Education
          </h1>
          <div class="screen__content">
            <div class="education">
              <div class="education__title">
                Software Engineering and Computer Science
              </div>
              <div class="education__subtitle">
                Conservatoire national des arts et métiers (CNAM) PARIS
              </div>
              <div class="date">
                <div class="date__from">
                  2008
                </div>
                <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg> <svg class="date__to-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 0, 16 16" fill="black" />
                  <polygon points="0 32, 16 32, 16 16" fill="black" />
                </svg>
                <div class="date__to">
                  2012
                </div>
              </div>
              <div class="education__content">
                <p>
                </p>
                <ul>
                  <li>
                    Software development (C#, Java, MySQL, Javascript. HTML, CSS)
                  </li>
                  <li>
                    Mobile applications development (Java, UWP)
                  </li>
                  <li>
                    Project management, team work (GIT, Trello, Jira)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="screen screen--skills">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            Skills
          </h1>
          <div class="screen__content">
            <div class="skill-category">
              <div class="skill-category__title">
                Front-End
              </div>
              <div class="skill-category__content">
                Javascript, Vue, React, Redux/Vuex, Web APIs, ThreeJS, Sass, Webpack
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category__title">
                Back-End
              </div>
              <div class="skill-category__content">
                NodeJS, Express (REST API), Lambda (Serverless), CI/CD
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category__title">
                Database
              </div>
              <div class="skill-category__content">
                DynamoDB, Redis, MySQL/PostgreSQL/Aurora
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category__title">
                Cloud
              </div>
              <div class="skill-category__content">
                AWS (Certified AWS Developer Associate), Heroku
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category__title">
                Project & Product Management
              </div>
              <div class="skill-category__content">
                Figma, Lean, Agile, Product vision, Product strategy
              </div>
            </div>
            <div class="skill-category">
              <div class="skill-category__title">
                Languages
              </div>
              <div class="skill-category__content">
                French (native), English (fluent), Hebrew
              </div>
            </div>
          </div>
        </div>
        <div class="screen screen--achievements">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            Achievements
          </h1>
          <div class="screen__content">
            <ul class="achievements">
              <li>
                Participated on a low-code SaaS App Builder with +10 000 apps in production <a href="https://appdrag.com" target="_blank" rel="noreferrer">appdrag.com</a>
              </li>
              <li>
                Technical lead for multiple (very happy) luxury international brands
              </li>
              <li>
                Read +20 books / year (mostly self improvement & technical books)
              </li>
            </ul>
          </div>
        </div>
        <div class="screen screen--contact">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            Contact
          </h1>
          <div class="screen__content">
            <div class="contact">
              <a href="https://www.linkedin.com/in/nathanielbenguira/" target="_blank" rel="noreferrer"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#0077B5" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z" fill="white" />
                </svg></a> 
                <a href="mailto://contact@nathanielbenguira.com" target="_blank" rel="noreferrer"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.9639 26.0193L14.9987 19.5115V33.23H13.5009C12.6664 33.23 12.0031 32.5667 12.0031 31.7322V16.562C12.0031 16.4985 12.007 16.4389 12.0144 16.3831C12.0416 16.1451 12.1284 15.9122 12.2813 15.7061C12.7734 15.0428 13.7363 14.893 14.421 15.3851L23.9853 22.3391L33.6138 15.2996C34.2771 14.8074 35.2186 14.9572 35.7107 15.6419C35.9723 15.9945 36.0525 16.4256 35.9674 16.8261V31.7536C35.9674 32.5667 35.3041 33.23 34.4697 33.23H32.9719V19.4788L23.9639 26.0193Z" fill="black" />
                </svg></a> 
                <a href="tel://+972549395143" target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#ff9a03" r="32" class="fill-77b3d4"></circle><path d="M28.962 25.343c-.417-4.794-5.418-7.146-5.63-7.242a1.063 1.063 0 0 0-.635-.085c-5.774.958-6.642 4.318-6.677 4.458-.048.196-.039.399.022.589 6.886 21.366 21.198 25.327 25.903 26.63.362.1.661.181.888.255a1.088 1.088 0 0 0 .788-.046c.144-.065 3.544-1.667 4.375-6.891.037-.227 0-.463-.105-.668-.074-.144-1.853-3.528-6.784-4.724a1.066 1.066 0 0 0-.964.229c-1.556 1.329-3.705 2.745-4.632 2.891-6.217-3.04-9.688-8.872-9.819-9.978-.076-.622 1.348-2.806 2.987-4.582.207-.225.312-.53.283-.836z" fill="#231F20" opacity=".2" class="fill-231f20"></path><path d="M28.962 23.343c-.417-4.794-5.418-7.146-5.63-7.242a1.063 1.063 0 0 0-.635-.085c-5.774.958-6.642 4.318-6.677 4.458-.048.196-.039.399.022.589 6.886 21.366 21.198 25.327 25.903 26.63.362.1.661.181.888.255a1.088 1.088 0 0 0 .788-.046c.144-.065 3.544-1.667 4.375-6.891.037-.227 0-.463-.105-.668-.074-.144-1.853-3.528-6.784-4.724a1.066 1.066 0 0 0-.964.229c-1.556 1.329-3.705 2.745-4.632 2.891-6.217-3.04-9.688-8.872-9.819-9.978-.076-.622 1.348-2.806 2.987-4.582.207-.225.312-.53.283-.836z" fill="#ffffff" class="fill-ffffff"></path></svg>
                </a>
            </div>
          </div>
        </div>
        <div class="screen screen--about">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            About
          </h1>
          <div class="screen__content">
            <p>
              I am a passionate Full Stack developer with +13 years of hands-on experience developing and delivering applications.
            </p>
            <p>
              I have a great team spirit I use to help, train and lead the development teams.
              As a lifelong learner I am continuously willing to improve and discover new things.
            </p>
          </div>
        </div>
        <div class="screen screen--activities">
          <div class="screen__close">
          </div>
          <h1 class="screen__title">
            Activities
          </h1>
          <div class="screen__content">
            <div class="activity">
              <div class="activity__title">
                Freelance
              </div>
              <div class="activity__position">
                Fullstack Developer
              </div>
              <div class="date activity__date">
                <div class="date__from">
                  2010
                </div>
                <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg> <svg class="date__to-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 0, 16 16" fill="black" />
                  <polygon points="0 32, 16 32, 16 16" fill="black" />
                </svg> <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg> <svg class="date__to-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 0, 16 16" fill="black" />
                  <polygon points="0 32, 16 32, 16 16" fill="black" />
                </svg> <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg> <svg class="date__to-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 0, 16 16" fill="black" />
                  <polygon points="0 32, 16 32, 16 16" fill="black" />
                </svg> <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg>
              </div>
            </div>
            <div class="activity">
              <div class="activity__title">
                Avasten
              </div>
              <div class="activity__position">
                Co-founder / Fullstack Developer
              </div>
              <div class="date activity__date">
                <div class="date__from">
                  2009
                </div>
                <svg class="date__from-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 16, 0 32" fill="black" />
                </svg> <svg class="date__to-icon" viewBox="0 0 16 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0 0, 16 0, 16 16" fill="black" />
                  <polygon points="0 32, 16 32, 16 16" fill="black" />
                </svg>
                <div class="date__to">
                  2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="points">
        <div class="point point--education">
          <div class="point__label">
            Education
          </div>
        </div>
        <div class="point point--about">
          <div class="point__label">
            About
          </div>
        </div>
        <div class="point point--skills"> 
              <div class="point__label">
             Skills
          </div>
        </div>
        <div class="point point--activities">
          <div class="point__label">
            Activities
          </div>
        </div>
        <div class="point point--contact">
          <div class="point__label">
            Contact
          </div>
        </div>
        <div class="point point--achievements">
          <div class="point__label">
            Achievements
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
