module.exports = function handler(req, res) {
  const shop = process.env.SHOPIFY_SHOP_DOMAIN;
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const scopes = process.env.SHOPIFY_SCOPES || 'write_orders,read_products';
  const redirectUri = 'https://' + req.headers.host + '/api/shopify/callback';

  const authorizeUrl =
    'https://' + shop + '/admin/oauth/authorize' +
    '?client_id=' + encodeURIComponent(clientId) +
    '&scope=' + encodeURIComponent(scopes) +
    '&redirect_uri=' + encodeURIComponent(redirectUri);

  res.writeHead(302, { Location: authorizeUrl });
  res.end();
};
