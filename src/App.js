import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store";
import ThemeProvider from "./ThemeProvider";
import Routes from "./Routes";
import { toast } from "./config";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Route component={Routes} />
          </BrowserRouter>
          <ToastContainer autoClose={toast.timer.auto_close_duration} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
