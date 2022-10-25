import * as Module1 from "./components/Module1";
import * as Module4 from "./components/Module4";
import * as Module8 from "./components/Module8";
import { RoutesList } from "./routes/MainRoutes";
import { UseRoutesHook } from "./routes/UseRoutes";

const App = () => {
  return (
    <div>
      <RoutesList />
      <br />
      <UseRoutesHook />
      <br />
      <Module8.ContextPractice />
      <br />
      <Module4.ApiJson />
      <br />
      <Module1.ChildrenComponent><div>Children</div></Module1.ChildrenComponent>
    </div>
  );
}

export default App;