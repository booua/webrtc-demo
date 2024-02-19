import Koa from "koa";
import route from "koa-route";
import websockify from "koa-websocket";

const PORT = 5172;

const app = websockify(new Koa());
const clients = new Set<WebSocket>();
const history = new Map<string, string[]>();

const storeChatHistory = (message: Record<string, unknown>) => {
  const id = `${message.id}`;

  if (history.has(id) && Array.isArray(message.history)) {
    history.set(id, [...message.history]);
  }
};

const getChatHistory = (id: string) => {
  return history.get(id);
};

app.ws.use(
  route.all("/socket", (ctx) => {
    clients.add(ctx.websocket);

    ctx.websocket.on("close", () => {
      clients.delete(ctx.websocket);
    });

    ctx.websocket.on("message", (message: Buffer) => {
      console.log("message:", message.toString());
      const parsedMessage: Record<string, unknown> & { id: string } =
        JSON.parse(message.toString());

      if ("history" in parsedMessage) {
        storeChatHistory(parsedMessage);
      }

      for (const client of clients) {
        if (client !== ctx.websocket) {
          const messageWithHistory = {
            ...parsedMessage,
            history:
              "id" in parsedMessage ? getChatHistory(parsedMessage.id) : [],
          };

          client.send(JSON.stringify(messageWithHistory));
        }
      }
    });
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
