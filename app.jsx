const colors = {
  primary: "#003f5c",
  secondary: "#58508d",
  gray: "rgba(0,0,0,0.7)",
  white: "rgba(255,255,255)",
};

// others
// #003f5c
// #58508d
// #bc5090
// #ff6361
// #ffa600

const styles = {
  main: {
    fontFamily: "arial",
    margin: "10 40 10 40",
    padding: "10 40 10 40",
  },
  headerContainer: {
    margin: "0 0 40 0",
  },
  headerLeft: {
    display: "inline-block",
  },
  headerRight: {
    display: "inline-block",
  },
  title1: {
    fontSize: "42px",
    fontFamily: "Montserrat-Bold",
    margin: "15 0 15 0",
    letterSpacing: 4,
    color: colors.primary,
  },
  title2: {
    fontFamily: "Arial",
    fontSize: 24,
    letterSpacing: 2,
    margin: "0 0 15 0",
    color: colors.gray,
  },
  title3: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    margin: "10 0 10 0",
    color: colors.primary,
  },
  card: {
    border: `1px solid ${colors.gray}`,
    padding: 15,
    margin: "10 0 10 0",
    cursor: "pointer",
    transition: "background-color 250ms, color 250ms",
  },
  cardHover: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  cardTitle: {
    fontWeight: 800,
    fontSize: 18,
    margin: "10 0 10 0",
  },
  cardDescription: {
    margin: "10 0 10 0",
  },
  linkText: {
    display: "inline-block",
    textDecoration: "none",
    color: colors.gray,
    cursor: "pointer",
    padding: "10 10 10 10",
    transition: "background-color 250ms, color 250ms",
  },
  linkTextHover: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  aboutContainer: {
    margin: "0 0 30 0",
  },
  projectsContainer: {
    margin: "0 0 30 0",
  },
  contactContainer: {
    margin: "0 0 30 0",
  },

  cardsContainer: {
    // display: "flex",
  },
};

const About = () => {
  const copy =
    "Building data scientist, energy modeler and software enthusiast with 14 years of \
    experience in the built environment. Proficient in multiple programming languages \
    and modeling engines. Passionate about Python, open-source code, energy modeling, \
    RTEM, and using data and modeling to communicate difficult problems to non-technical \
    audiences.";
  return (
    <div style={styles.aboutContainer}>
      <div style={styles.title3}>ABOUT ME</div>
      <div>{copy}</div>
    </div>
  );
};

const Card = (props) => {
  const { title, url, description, image } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
      onClick={() => window.open(url)}
    >
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardDescription}>{description}</div>
    </div>
  );
};

const Link = (props) => {
  const { title, url } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered
          ? { ...styles.linkText, ...styles.linkTextHover }
          : styles.linkText
      }
      onClick={() => window.open(url)}
    >
      {title}
    </div>
  );
};

const Contact = () => {
  const links = [
    {
      text: "Resume",
      href: "https://www.dropbox.com/s/kydr3esaexbe1um/MS%20Resume.pdf?dl=1",
    },
    {
      text: "Github",
      href: "https://github.com/michaelsweeney",
    },
    {
      text: "Email",
      href: "mailto:michael.samuel.sweeney@gmail.com",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/msweeney01/",
    },
  ];

  return (
    <div style={styles.contactContainer}>
      <div style={styles.title3}>CONTACT ME</div>

      <div>
        {links.map((d, i) => (
          <div key={i}>
            <Link key={i} title={d.text} url={d.href} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.headerLeft}>
        <div style={styles.title1}>MICHAEL SWEENEY</div>
        <div style={styles.title2}>building energy / coding / data </div>
      </div>
      <div style={styles.headerRight}>
        <div>About</div>
        <div>Work</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

const ProjectsContainer = () => {
  const projects = [
    {
      title: "NYC LL97 Carbon Calculator",
      url: "https://be-exchange.org/calculator",
      description:
        "Interactive online visualization tool \
      to calculate building fines for NYC Local Law 97.\
      Developed with support from the Building Energy \
      Exchange and the NYC Mayor's Office of Sustainability.",
      image: "",
    },
    {
      title: "DesignBuilder EMS Case Study",
      url: "https://designbuilder.co.uk/casestudies/AKFCaseStudy.pdf",
      description:
        "Low-Temperatue Chilled Water Plant Controls Optimization \
        Study.",
      image: "",
    },
    {
      title: "NYSERDA PropTech Tenant Energy Challenge",
      url: "https://github.com/michaelsweeney/nyserdaproptech",
      description:
        "Developed a Machine Learning algorithm to predict \
        changes in tenant energy consumption changes due to the \
        COVID-19 pandemic",
      image: "",
    },
    {
      title: "eqparse",
      url: "https://github.com/michaelsweeney/eqparse",
      description:
        "Pandas-based API for accessing and transforming \
      eQUEST simulations outputs",
      image: "",
    },
    {
      title: "timestep",
      url: "https://michaelsweeney.github.io/timestep",
      description:
        "Front-end Electron-based desktop \
      application for visualizing EnergyPlus simulation \
      outputs",
      image: "",
    },
  ];
  return (
    <div style={styles.projectsContainer}>
      <div style={styles.title3}>SELECTED PROJECTS</div>
      <div style={styles.cardsContainer}>
        {projects.map((d, i) => (
          <Card
            key={i}
            title={d.title}
            url={d.url}
            description={d.description}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={styles.main}>
      <Header />
      <About />
      <ProjectsContainer />
      <Contact />
    </div>
  );
};

let el = document.getElementById("root");

ReactDOM.render(<App />, el);
