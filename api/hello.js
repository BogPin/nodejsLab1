export default function handler(req, res) {
  const { name = "Worlld" } = req.query;
  return res.send(`Hello ${name}!`);
}
