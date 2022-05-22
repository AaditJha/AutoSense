import React from "react";
import "../styles/FadeIn.css";

function FadeIn(props) {
  const [active, setActive] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setActive(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={`fade-in ${active ? "active" : ""}`} ref={domRef}>
      {props.render}
    </div>
  );
}

export default FadeIn;
