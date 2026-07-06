const crypto = require('crypto');

function verifyHmac(query, secret) {
  const { hmac } = query;
  if (!hmac) return false;

  const message = Object.keys(query)
    .filter((key) => key !== 'hmac' && key !== 'signature')
    .sort()
    .map((key) => key + '=' + query[key])
    .join('&');

  const generatedHash = crypto.createHmac('sha256', secret).update(message).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(generatedHash), Buffer.from(hmac));
}

module.exports = async function handler(req, res) {
  const { code, shop, hmac } = req.query;
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!code || !shop || !hmac) {
    res.status(400).send('Faltan parámetros de Shopify.');
    return;
  }

  let hmacOk = false;
  try {
    hmacOk = verifyHmac(req.query, clientSecret);
  } catch (e) {
    hmacOk = false;
  }

  if (!hmacOk) {
    res.status(401).send('Firma inválida, la petición no vino de Shopify.');
    return;
  }

  const tokenRes = await fetch('https://' + shop + '/admin/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code: code })
  });

  const data = await tokenRes.json();

  if (!data.access_token) {
    res.status(500).send('No se pudo obtener el token: ' + JSON.stringify(data));
    return;
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(
    '<html><body style="font-family: sans-serif; padding: 40px; max-width: 600px; margin: 0 auto;">' +
    '<h2>Instalación completada</h2>' +
    '<p>Copia el siguiente texto completo y pégalo en el chat:</p>' +
    '<textarea readonly style="width:100%;height:100px;font-size:16px;padding:8px;">' + data.access_token + '</textarea>' +
    '<p style="color:#666;font-size:14px;">Permisos concedidos: ' + data.scope + '</p>' +
    '</body></html>'
  );
};
