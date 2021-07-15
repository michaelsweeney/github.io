const LinkContainer = (props) => {
  const { title, url } = props;
  return (
    <div className="link-container" onClick={() => window.open(url)}>
      {title}
    </div>
  );
};

const App = () => {
  return (
    <div className="body">
      <div className="main-container">
        <div className="title-container">
          <div className="title-1">Michael Sweeney</div>
          <div className="title-2">Coding, Data, Building Energy Science</div>
        </div>

        <div className="br"></div>

        <LinkContainer
          title="Resume (PDF download)"
          url="https://www.dropbox.com/s/kydr3esaexbe1um/MS%20Resume.pdf?dl=1"
        />
        <LinkContainer
          url="https://be-exchange.org/calculator"
          title="NYC LL97 Carbon Calculator"
        />

        <LinkContainer
          url="https://michaelsweeney.github.io/timestep"
          title="timestep"
        />
        <LinkContainer
          url="https://github.com/michaelsweeney/eqparse"
          title="eqparse"
        />
        <LinkContainer
          url="https://github.com/michaelsweeney/nyserdaproptech"
          title="NYSERDA PropTech Tenant Energy Challenge"
        />

        <div className="br"></div>

        <div className="link-container-multi">
          <div className="link-sm">
            <a target="_blank" href="mailto:michael.samuel.sweeney@gmail.com">
              email
            </a>
          </div>
          <div className="link-sm">
            <a target="_blank" href="https://www.linkedin.com/in/msweeney01/">
              linkedin
            </a>
          </div>
          <div className="link-sm">
            <a target="_blank" href="https://github.com/michaelsweeney">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

let el = document.getElementById("root");

ReactDOM.render(<App />, el);
