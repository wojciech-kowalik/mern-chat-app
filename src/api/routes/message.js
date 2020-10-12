import Message from "../../model/message.js";

export default app => {
  app.get("/messages", async (req, res) => {
    const messages = await Message.find({});
    res.send(messages);
  });

  app.post("/messages", async (req, res) => {
    try {
      const io = req.app.locals.io;
      const message = new Message(req.body);

      let error = message.validateSync();
      if (error) {
        res.status(500).send(error);
        return;
      }

      await message.save();
      io.emit("message", req.body);
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
