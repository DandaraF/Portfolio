import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*">
          <h1>404. That’s an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
