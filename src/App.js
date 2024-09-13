import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const country = "us";
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="red" height={2} progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          </Route>
          <Route exact path="/general">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={country}
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country={country}
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country={country}
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country={country}
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country={country}
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country={country}
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={apikey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country={country}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
