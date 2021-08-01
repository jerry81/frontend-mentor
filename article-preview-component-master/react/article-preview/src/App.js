import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import WorkArea from './WorkArea.js'

function App() {
  /* styles */
  const appStyle = useMediaQuery("(min-width:600px)")
    ? "app d-app"
    : "app m-app";
  const innerPanel = useMediaQuery("(min-width:600px)")
  ? "inner d-inner"
  : "inner m-inner";
  /* render */
  return <div className={appStyle}>
    <div className={innerPanel}>
      <WorkArea/>
    </div>
  </div>;
}

export default App;
