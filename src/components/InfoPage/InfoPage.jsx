import { useParams } from "react-router";

export default function InfoPage() {
  const { pageName } = useParams();

  const pagesData = {
    about: {
      title: "About FreshCart",
      paragraphs: [
        "Welcome to FreshCart, your number one source for all things groceries, fashion, and home essentials. We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.",
        "Founded in 2026, FreshCart has come a long way from its beginnings in a small office. When we first started out, our passion for helping other parents be more eco-friendly, providing the best equipment for their kids drove us to do intense research, and gave us the impetus to turn hard work and inspiration into to a booming online store.",
        "We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.",
      ],
      list: [
        "High-quality products guaranteed",
        "Fast and reliable delivery services",
        "24/7 Dedicated customer support",
        "Secure payment methods",
      ],
    },
    contact: {
      title: "Contact Us",
      paragraphs: [
        "Our customer support team is available around the clock to assist you with any inquiries, order tracking, or feedback you may have.",
        "Don't hesitate to reach out if you have an issue with your order or if you simply want to provide suggestions to improve our service.",
      ],
      list: [
        "Email: support@freshcart.com",
        "Phone: +1 (700) 859-896",
        "Address: 123 Main Street, City Center, Egypt",
        "Working Hours: 9:00 AM - 10:00 PM",
      ],
    },
  };

  const page = pagesData[pageName];

  if (!page) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-6 md:px-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
        {page.title}
      </h1>

      {page.paragraphs.map((para, index) => (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
          {para}
        </p>
      ))}

      {page.list && (
        <div className="mt-10 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Information:</h3>
          <ul className="space-y-3">
            {page.list.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="mr-3 text-green-600">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
