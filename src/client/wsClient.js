import io from "socket.io-client";
import feathers from "@feathersjs/client";

//TODO: Check environment config for domain
const socket = io("wss://int.signatories.com", {
  path: "/api/v1/ws",
  transports: ["websocket"],
  secure: true,
  rejectUnauthorized: false,
});

export default feathers().configure(feathers.socketio(socket)).configure(feathers.authentication());
