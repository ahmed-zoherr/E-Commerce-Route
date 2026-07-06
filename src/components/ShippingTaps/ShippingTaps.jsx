export default function ShippingTaps() {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-lg text-gray-700">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Shipping & Returns
        </h3>

        <div className="mb-4">
          <h4 className="font-bold text-gray-800 mb-2">
            🚚 Shipping Information:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Free delivery for orders over $50.</li>
            <li>Local orders are shipped within 2-3 business days.</li>
            <li>International shipping takes 5 to 7 business days.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mb-2">🔁 Return Policy:</h4>
          <p className="text-sm leading-relaxed">
            You can return or exchange the product within 14 days of receipt,
            provided it is in its original condition and packaging. Terms and
            conditions apply.
          </p>
        </div>
      </div>
    </>
  );
}
