import "./start.css";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TweenMax, Power3 } from "gsap";
import EnPage1 from "./LanguageComponents/EnPage1";
import NlPage2 from "./LanguageComponents/NlPage2";
import FrPage3 from "./LanguageComponents/FrPage3";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [en, setEng] = useState({ display: "block" });
  const [nl, setNl] = useState({ display: "none" });
  const [fr, setFr] = useState({ display: "none" });
  const [state, setState] = useState(false);
  const [shrink, setShrink] = useState(false);
  const sizercss = {
    transform: "scale(0.4)",
    marginLeft: "calc(0vw - 70px)",
    marginTop: "calc(0vh - 70px)"
  };
  const sizertxtcss = {
    display: "none"
  };
  const sizertxttopcss = {
    fonSize: "35px"
  };
  console.log(sizercss + "sizer");
  let logoRef = useRef(null);
  let textRef = useRef(null);
  let nlflagRef = useRef(null);
  let frflagRef = useRef(null);
  let enflagRef = useRef(null);
  let startRef = useRef(null);
  let flagsRef = useRef(null);
  useEffect(() => {
    TweenMax.to(logoRef, 2, {
      transform: "translateY(0vw)",
      ease: "bounce"
      // https://greensock.com/docs/v2/Easing
    });
    TweenMax.to(logoRef, 2, {
      autoAlpha: 1
    });
    // https://www.youtube.com/watch?v=_-YfoAzIDzw&t=7s
    TweenMax.to(textRef, 0.5, {
      transform: "translateY(0vw)",
      autoAlpha: 1,
      ease: "bounce"
    });
    // https://www.youtube.com/watch?v=whk76VMOlp0
    TweenMax.to(flagsRef, 1.5, {
      autoAlpha: 1
    });
    TweenMax.staggerFrom(
      [enflagRef, nlflagRef, frflagRef],
      1.5,
      {
        opacity: 0,
        y: 140,
        ease: Power3.easeOut
      },
      0.7
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" LangChooser />
          <Route exact path="En" element={<EnPage1 />} />
          <Route exact path="Nl" element={<NlPage2 />} />
          <Route exact path="Fr" element={<FrPage3 />} />
        </Routes>
        <div
          className="content flex"
          ref={el => {
            startRef = el;
          }}
        >
          <Link to="/LangChooser">
            <img
              className="neallogo"
              alt="logo"
              ref={el => {
                logoRef = el;
              }}
              src="img/logo.png"
            />
          </Link>
          <h4
            ref={el => {
              textRef = el;
            }}
          >
            <span className="en" style={en}>
              Let's work!
            </span>
            <span className="nl" style={nl}>
              Laten we werken!
            </span>
            <span
              className="fr"
              style={fr}
            >
              Allons-y!
            </span>
          </h4>
          <p>
            <span
              className="en"
              style={en}

            >
              Choose your language.
            </span>
            <span className="nl" style={nl}>
              Kies je taal.
            </span>
            <span className="fr" style={fr}>
              Choisissez votre langue
            </span>
          </p>
          <div
            ref={el => {
              flagsRef = el;
            }}
            className="lang flex flags"
          >
            <Link to="En">
              <div className="flagwrapper">
                <img
                  ref={el => {
                    enflagRef = el;
                  }}
                  id="enflag"
                  src="img/united-kingdom.svg"
                  alt="flag"
                  onClick={() => [TweenMax.to(startRef, 1.8, sizercss)]}
                  onMouseEnter={() => [
                    setState(true),
                    setEng({ display: "block" }),
                    setFr({ display: "none" }),
                    setNl({ display: "none" }),
                    TweenMax.to(enflagRef, 0.7, {
                      width: "auto",
                      height: "65%",
                      marginLeft: "-20px",
                      transition: "all 0.7s",
                      objectFit: "Cover",
                      borderRadius: "3px",
                      ease: Power3.easeOut
                    })
                  ]}
                  onMouseLeave={() => [
                    setState(false),
                    setEng({ display: "block" }),
                    setFr({ display: "none" }),
                    setNl({ display: "none" }),
                    TweenMax.to(enflagRef, 0.7, {
                      width: "auto",
                      height: "50%",
                      marginLeft: "0px",
                      ease: Power3.easeOut,
                      borderRadius: "3px"
                    })
                  ]}
                />
              </div>
            </Link>
            <Link to="Nl">
              <div className="flagwrapper">
                <img
                  ref={el => {
                    nlflagRef = el;
                  }}
                  id="nlflag"
                  alt="flag"
                  src="img/nl.svg"
                  onClick={() => [TweenMax.to(startRef, 1.8, sizercss)]}
                  onMouseEnter={() => [
                    setEng({ display: "none" }),
                    setNl({ display: "block" }),
                    setState(true),
                    TweenMax.to(nlflagRef, 0.7, {
                      width: "auto",
                      height: "65%",
                      transition: "height 0.7s",
                      objectFit: "Cover",
                      borderRadius: "3px",
                      ease: Power3.easeOut
                    })
                  ]}
                  onMouseLeave={() => [
                    setEng({ display: "block" }),

                    setEng({ display: "none" }),
                    setFr({ display: "none" }),

                    setState(false),
                    TweenMax.to(nlflagRef, 0.7, {
                      width: "auto",
                      height: "50%",
                      ease: Power3.easeOut,
                      borderRadius: "3px"
                    })
                  ]}
                />
              </div>{" "}
            </Link>
            <Link to="Fr">
              <div className="flagwrapper">
                <img
                  ref={el => {
                    frflagRef = el;
                  }}
                  id="frflag"
                  alt="flag"
                  src="img/france.svg"
                  onClick={() => [TweenMax.to(startRef, 1.8, sizercss)]}
                  onMouseEnter={() => [
                    setFr({ display: "block" }),
                    setEng({ display: "none" }),
                    setState(true),
                    TweenMax.to(frflagRef, 0.7, {
                      width: "auto",
                      height: "65%",
                      marginRight: "-20px",

                      transition: "all 0.7s",
                      objectFit: "Cover",
                      borderRadius: "3px",
                      ease: Power3.easeOut
                    })
                  ]}
                  onMouseLeave={() => [
                    setEng({ display: "none" }),
                    setNl({ display: "none" }),
                    setFr({ display: "block" }),

                    setState(false),
                    TweenMax.to(frflagRef, 0.7, {
                      width: "auto",
                      height: "50%",
                      marginRight: "0px",
                      ease: Power3.easeOut,
                      borderRadius: "3px"
                    })
                  ]}
                />
              </div>
            </Link>
          </div>
        </div>{" "}
      </Router>
    </div>
  );
}
// https://www.youtube.com/watch?v=ySXy9BFu9LQ
export default App;
