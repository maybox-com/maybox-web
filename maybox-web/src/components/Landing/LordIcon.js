import React from "react";
import PropTypes from "prop-types";


const LordIcon = ({
  src,
  trigger = "loop",
  delay = "2000",
  stroke = "light",
  state = "morph-glitter",
  colors = "primary:#b29361,secondary:#b29361",
  style = { width: "80px", height: "80px" },
}) => {
  return (
    <lord-icon
      src={src}  
      trigger={trigger}
      delay={delay}
      stroke={stroke}
      state={state}
      colors={colors}
      style={style}
    ></lord-icon>
  );
};


LordIcon.propTypes = {
  src: PropTypes.string.isRequired,  
  trigger: PropTypes.string,
  delay: PropTypes.string,
  stroke: PropTypes.string,
  state: PropTypes.string,
  colors: PropTypes.string,
  style: PropTypes.object,
};

// Export the component
export default LordIcon;
