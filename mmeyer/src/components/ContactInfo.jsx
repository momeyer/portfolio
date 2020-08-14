import React from "react";
import { useSpring, animated } from "react-spring";

function Contact() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 100 },
    config: { delay: 1500, duration: 1500 },
  });
  return (
    <div className="bg-dark shadow-lg rounded" style={style}>
      <h1 className="text-light text-center">Contact</h1>
    </div>
  );
}

const style = {
    marginTop: '150px',
    height: '150px'
}
export default Contact;
