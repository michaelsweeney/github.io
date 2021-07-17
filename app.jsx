const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaMatch.matches);

  React.useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

const colors = {
  primary: "rgba(0,63,92,1)",
  primaryLight: "rgba(0,63,92,0.1)",
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

const makeStyles = (props) => {
  const { isSmall, isMedium, activeNav } = props;
  return {
    mainOuter: {
      textAlign: "center",
    },
    mainInner: {
      textAlign: "left",
      display: "inline-block",
      maxWidth: 900,
      width: "calc(100% - 40px)",
      fontFamily: "arial",
      margin: "20 20 20 20",
      lineHeight: 1.5,
    },
    headerContainer: {
      margin: "0 0 40 0",
      display: "block",
      boxSizing: "border-box",
      textAlign: isMedium ? "left" : "center",
    },
    headerLeft: {
      display: "inline-block",
      // width: isMedium ? "calc(100% - 80px)" : "100%",
    },
    headerRight: {
      textAlign: isMedium ? "right" : "center",
      verticalAlign: "top",
      position: "relative",
      float: isMedium ? "right" : undefined,
      right: 0,
      top: isMedium ? 25 : 0,
      display: isMedium ? "inline-block" : "block",
      // width: "400px",
      color: colors.primary,
    },
    title1: {
      fontSize: isMedium ? "42px" : "30px",
      fontFamily: "Montserrat-Bold, sans-serif",
      margin: isMedium ? "15 0 15 0" : "10 0 20 0",
      letterSpacing: isMedium ? 4 : 2,
      color: colors.primary,
    },
    title2: {
      display: isSmall ? "none" : "inline-block",
      fontFamily: "Arial",
      fontSize: 24,
      letterSpacing: 2,
      margin: "0 0 15 0",
      color: colors.gray,
    },
    title3: {
      fontFamily: "Montserrat-Bold, sans-serif",
      fontSize: 18,
      margin: "10 0 10 0",
      textAlign: isMedium ? "left" : "center",
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
      backgroundColor: colors.primaryLight,
      color: colors.black,
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
      margin: isSmall ? "10 0 10 0" : "0 0 0 0",
      // padding: "10 10 10 10",
      transition: "background-color 250ms, color 250ms, font-weight 250ms",
    },
    linkTextHover: {
      color: colors.primary,
      textDecoration: "underline",
    },
    navText: {
      display: isMedium ? "inline-block" : "inline-block",
      color: colors.gray,
      cursor: "pointer",
      margin: isMedium ? "0 5 0 5 " : "0 15 0 15",
      padding: isMedium ? "10 10 10 10" : "10 10 10 10",
      transition: "background-color 250ms, color 250ms",
    },
    navTextHover: {
      backgroundColor: colors.primaryLight,
      // color: colors.white,
    },
    navTextActive: {
      backgroundColor: isMedium ? colors.primary : colors.primary,
      color: isMedium ? "white" : "white",
    },
    navTextActiveHover: {
      // backgroundColor: "red,
    },
    aboutContainer: {
      display: activeNav == "about" ? "block" : "none",
      margin: "0 0 30 0",
    },
    projectsContainer: {
      display: activeNav == "work" ? "block" : "none",
      margin: "0 0 30 0",
    },
    contactContainer: {
      display: activeNav == "contact" ? "block" : "none",
      margin: "0 0 30 0",
    },
    contactLinksContainer: {
      textAlign: isSmall ? "center" : "left",
    },
    cardsContainer: {},
  };
};

const About = (props) => {
  const { styles } = props;
  const copy =
    "I'm a building data scientist, energy modeler and software enthusiast with 14 years of \
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
  const { styles } = props;

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
  const { styles } = props;
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

const Nav = (props) => {
  const { callback, title, id, styles, activeNav } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const isActiveNav = activeNav == id ? true : false;
  const getNavState = () => {
    if (isHovered && isActiveNav) {
      return {
        ...styles.navText,
        ...styles.navTextActiveHover,
        ...styles.navTextActive,
      };
    }
    if (isHovered && !isActiveNav) {
      return {
        ...styles.navText,
        ...styles.navTextHover,
      };
    }

    if (!isHovered && isActiveNav) {
      return {
        ...styles.navText,
        ...styles.navTextActive,
      };
    }

    if (!isHovered && !isActiveNav) {
      return {
        ...styles.navText,
      };
    }
  };

  const navStyles = getNavState();

  return (
    <div
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={navStyles}
      onClick={() => callback(id)}
    >
      {title}
    </div>
  );
};

const Contact = (props) => {
  const { styles } = props;
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

      <div style={styles.contactLinksContainer}>
        {links.map((d, i) => (
          <div key={i}>
            <Link styles={styles} key={i} title={d.text} url={d.href} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { styles, callback, activeNav } = props;
  return (
    <div style={styles.headerContainer}>
      <div style={styles.headerLeft}>
        <div style={styles.title1}>MICHAEL SWEENEY</div>
        <div style={styles.title2}>building energy / coding / data </div>
      </div>
      <div style={styles.headerRight}>
        <Nav
          activeNav={activeNav}
          callback={callback}
          styles={styles}
          id="about"
          title="About"
        />
        <Nav
          activeNav={activeNav}
          callback={callback}
          styles={styles}
          id="work"
          title="Work"
        />
        <Nav
          activeNav={activeNav}
          callback={callback}
          styles={styles}
          id="contact"
          title="Contact"
        />
      </div>
    </div>
  );
};

const ProjectsContainer = (props) => {
  const { styles } = props;

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
        "Front-end, cross-platform desktop \
      app for visualizing EnergyPlus simulation \
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
            styles={styles}
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
  const breakpoint = 775;
  const isSmall = useMediaQuery(`(max-width: ${breakpoint}px)`);
  const isMedium = useMediaQuery(`screen and (min-width: ${breakpoint}px)`);

  const [activeNav, setActiveNav] = React.useState("about");

  const styles = makeStyles({ isSmall, isMedium, activeNav });

  return (
    <div style={styles.mainOuter}>
      <div style={styles.mainInner}>
        <Header callback={setActiveNav} activeNav={activeNav} styles={styles} />
        <About styles={styles} />
        <ProjectsContainer styles={styles} />
        <Contact styles={styles} />
      </div>
    </div>
  );
};

let el = document.getElementById("root");

ReactDOM.render(<App />, el);
