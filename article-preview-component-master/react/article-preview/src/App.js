import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  /* styles */
  const appStyle = useMediaQuery("(min-width:600px)")
    ? "app d-app"
    : "app m-app";
  const innerPanel = useMediaQuery("(min-width:600px)")
  ? "inner d-inner"
  : "inner m-inner";
  /* widgets */
  function boldText() {
    return (
      <div>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </div>
    );
  }
  /* render */
  return <div className={appStyle}>
    <div className={innerPanel}>

    </div>
  </div>;
}

export default App;
