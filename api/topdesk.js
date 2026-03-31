export default async function handler(req, res) {
  const { path } = req.query;
  const AUTH = process.env.TOPDESK_AUTH; 

  const response = await fetch(`https://iccbrazil.topdesk.net/tas/api/${path}`, {
    headers: {
      'Authorization': AUTH,
      'Accept': 'application/json'
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}