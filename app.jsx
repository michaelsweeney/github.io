const colors = {
  primary: "#003f5c",
  secondary: "#bc5090",
};

// others
// #003f5c
// #58508d
// #bc5090
// #ff6361
// #ffa600

const CardContainer = (props) => {
  const { title, url } = props;
  return (
    <div className="link-container" onClick={() => window.open(url)}>
      {title}
    </div>
  );
};

const Footer = () => {
  const links = [
    {
      text: "github",
      url: "https://github.com/michaelsweeney",
    },
    {
      text: "email",
      href: "mailto:michael.samuel.sweeney@gmail.com",
    },
    {
      text: "",
      href: "",
    },
    {
      text: "linkedin",
      href: "https://www.linkedin.com/in/msweeney01/",
    },
  ];

  return (
    <div className="footer">
      Contact
      <div className="contact-container">
        {links.map((d, i) => (
          <div key={i} className="link-sm" target="_blank">
            <a target="_blank" href={d.href}>
              {d.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const styles = {
    headerContainer: {
      padding: 20,
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    title1: {
      fontSize: "42px",
      fontFamily: "Montserrat-Bold",
      marginBottom: 15,
      marginTop: 15,
      letterSpacing: 8,
      color: colors.primary,
    },
    title2: {
      fontFamily: "Arial",
      fontSize: 24,
      letterSpacing: 5,
      marginBottom: 15,
      color: colors.secondary,
    },
    title3: {
      fontFamily: "Arial",
      fontSize: 20,
      letterSpacing: 1.5,
      marginTop: 10,
      marginBottom: 10,
      color: colors.secondary,
    },
  };
  return (
    <div style={styles.headerContainer}>
      <div className="header-left">
        <div style={styles.title1}>MICHAEL SWEENEY</div>
        <div style={styles.title2}>building energy / coding / data </div>
      </div>
      <div className="header-right"></div>
    </div>
  );
};

const Body = (props) => {
  const { cards } = props;
  return (
    <div>
      {cards.map((d, i) => (
        <CardContainer key={i} title={d.title} url={d.url} />
      ))}
    </div>
  );
};

const App = () => {
  const cards = [
    {
      title: "Resume (PDF download)",
      url: "https://www.dropbox.com/s/kydr3esaexbe1um/MS%20Resume.pdf?dl=1",
    },
    {
      title: "NYC LL97 Carbon Calculator",
      url: "https://be-exchange.org/calculator",
    },
    {
      title: "NYSERDA PropTech Tenant Energy Challenge",
      url: "https://github.com/michaelsweeney/nyserdaproptech",
    },
    {
      title: "eqparse",
      url: "https://github.com/michaelsweeney/eqparse",
    },
    {
      title: "timestep",
      url: "https://michaelsweeney.github.io/timestep",
    },
  ];

  return (
    <div className="main-container">
      <Header />
      <Body cards={cards} />

      <Footer />
    </div>
  );
};

let el = document.getElementById("root");

ReactDOM.render(<App />, el);
