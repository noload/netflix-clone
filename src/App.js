import "./App.css";
import Body from "./component/Body";
import { Provider } from "react-redux";
import appStore from "./store/store";

function App() {
  return (
    <Provider store={appStore}>
      <Body />;
    </Provider>
  );
}

export default App;
