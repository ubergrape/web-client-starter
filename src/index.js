import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { client, request } from "./api/client";

const store = createStore(() => {}, applyMiddleware());
const channel = client.connect();

channel.on("connected", async () => {
  channel.on("data", data => {
    switch (data.event) {
      case "message.new":
        console.log("new message: ", data);
        break;
      default:
    }
  });

  // NOTE this subscribes you to new messages in all channels for the current user
  await request({
    ns: "organizations",
    action: "join",
    args: [1]
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
