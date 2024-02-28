import classes from "./Layout.module.css";
import PropTypes from "prop-types";

const Layout = (props) => {

  const { 
    children,
  } = props;

  return (
    <div className={classes.Layout}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export { Layout };