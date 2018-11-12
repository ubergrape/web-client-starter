## Setup

To install the dependencies and start the application please run:

```
yarn
yarn start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find the most recent version of the create-react-app guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Goal

The goal of this exercise is to build a small chat application.

In detail this application should be able to

1. Fetch and display the history of one specific channel. Each message should contain the Avatar of the user and the text of the message. Don't worry about mentions, emojis, attachments, markdown or other features of the message. Rending just the text is fine.
2. Listen to realtime updates over the Grape Websocket API
3. Be able to post simple text messages to that channel. There is an example how to send data to the WebSocket API below. Here are the API docs for posting a message: https://staging.chatgrape.com/doc/chat_api/rpc.html#chat.rpc.Channels.post
4. The UI should look roughly like in the following screenshots.

See here two Gifs demonstrating the behaviour:

<kbd><img width="266" alt="send msg" src="https://user-images.githubusercontent.com/223045/48338095-0bde3f00-e665-11e8-87c0-4d2c1a502399.gif"></kbd>

<kbd><img width="266" alt="scroll to end and receive msg" src="https://user-images.githubusercontent.com/223045/48338098-0ed92f80-e665-11e8-9ecd-52526c4adf18.gif"></kbd>

**Note** For a nicer experience the chat moves to the bottom on every new message.

Please use the following technologies:

- React
- Redux

Apart from that feel free to pick any technology of your choice.

## Interviewee Instructions

1. Accept the email invitation and sign up.

<kbd><img width="296" alt="email" src="https://user-images.githubusercontent.com/223045/48341670-e86bc200-e66d-11e8-902b-d3fe8b189a4b.png"></kbd>

2. Open your Browser and find the `Network` inspector. Find the `ws` Websocket connection. Inspect the frames and find the channel id you are currently in. In the example image the channel id is `9750`.

<img width="589" alt="inspect network" src="https://user-images.githubusercontent.com/223045/48338488-12b98180-e666-11e8-8c9a-3e9d9fc5f01a.png">

That said you can also take the channel ID from the url, but it's a nice exercise to grasp what the websocket connection is doing.

3. Checkout this repository and run `yarn` && `yarn start` in your terminal. Then visit `http://localhost:3000`. Since this is our staging environment and you are connecting to the same API, a cookie is set you can use the API also from localhost.

4. You can verify this by inspecting the Websocket connection in the `Network` inspector on `http://localhost:3000`.

**Hint** Replace the channelId and use the following function call to retrieve and log the history of a channel:

```js
const channelId = "yourChannelId"; // TODO update the channel id

const response = await request({
  ns: "channels",
  action: "get_history",
  args: [channelId, { limit: 40 }]
});
console.log(response);
```

The corresponding docs can be found here: https://staging.chatgrape.com/doc/chat_api/rpc.html#chat.rpc.Channels.get_history

**Hint** In `src/index.js` you already find a call connecting you to the current organization. This enables subscribing to real-time messages:

```js
switch (data.event) {
  case "message.new":
    console.log("new message: ", data);
    break;
  default:
}
```

Now you are all set to implement the state logic and UI.

_Happy Coding and feel free to ask questions at any point. We are happy to help!_
