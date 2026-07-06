export default function MetaData({
  title = "Fresh Cart",
  description = "fresh cart , the best online store for all your shopping needs",
  keywords = "fresh , grocery , online store , shopping , fresh cart",
  author = "fresh cart team",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
