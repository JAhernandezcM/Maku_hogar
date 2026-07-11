module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const shop = process.env.SHOPIFY_SHOP_DOMAIN;
  const token = process.env.SHOPIFY_ADMIN_TOKEN;
  const variantId = process.env.SHOPIFY_VARIANT_ID;

  const body = req.body || {};
  const fullName = body.fullName;
  const phone = body.phone;
  const address = body.address;
  const city = body.city;
  const quantity = Number(body.quantity) || 1;
  const total = Number(body.total);

  if (!fullName || !phone || !address || !city) {
    res.status(400).json({ error: 'Faltan datos del cliente' });
    return;
  }

  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ') || nameParts[0];

  const lineItem = { variant_id: Number(variantId), quantity: quantity };
  if (total > 0) {
    lineItem.price = (total / quantity).toFixed(2);
  }

  const orderPayload = {
    order: {
      line_items: [lineItem],
      customer: {
        first_name: firstName,
        last_name: lastName,
        phone: phone
      },
      shipping_address: {
        first_name: firstName,
        last_name: lastName,
        address1: address,
        city: city,
        country: 'Colombia',
        phone: phone
      },
      financial_status: 'pending',
      tags: 'landing-page-cod',
      note: 'Pedido generado desde la landing page (pago contra entrega).'
    }
  };

  try {
    const shopifyRes = await fetch('https://' + shop + '/admin/api/2024-10/orders.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      },
      body: JSON.stringify(orderPayload)
    });

    const data = await shopifyRes.json();

    if (!shopifyRes.ok) {
      res.status(shopifyRes.status).json({ error: data });
      return;
    }

    res.status(200).json({ success: true, orderId: data.order.id, orderNumber: data.order.order_number });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
