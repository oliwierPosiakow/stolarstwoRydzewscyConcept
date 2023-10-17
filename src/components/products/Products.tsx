import "./products.css";

function ProductDetails(props: any) {
  return (
    <img
      className="product-image"
      src={`./productsData/${props.imgSrc}.jpg`}
      alt="props.imgSrc"
    />
  );
}

export default function Products() {
  const imagesArr: Array<string> = [
    "door1",
    "door2",
    "altana1",
    "stairs1",
    "stairs2",
    "stairs3",
    "stairs4",
  ];
  return (
    <div className="products-container" id="gallery">
      <div className="products-container--title">Nasze produkty</div>
      <div className="images-wrapper">
        {imagesArr.map((image: string) => {
          return <ProductDetails imgSrc={image} key={image} />;
        })}
      </div>
      <a
        href="https://www.facebook.com/profile.php?id=100031545596353&sk=photos"
        target="_blank"
      >
        <div className="anchor-text">Zobacz więcej!</div>
      </a>
    </div>
  );
}
