import WampClient from "./WampClient";

let url = "wss://uebergrape.staging.chatgrape.com/ws";
let instance = new WampClient({ url });

export const client = instance;

export function request(data) {
  return new Promise((resolve, reject) => {
    instance.call(
      `${data.ns}/${data.action}`,
      ...(data.args || []),
      (err, res) => {
        if (err) {
          // console.error("err", err, err.details);
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}
