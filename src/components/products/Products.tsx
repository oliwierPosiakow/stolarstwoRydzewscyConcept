import "./products.css";
import ScrollContainer from "react-indiana-drag-scroll";
import 'react-indiana-drag-scroll/dist/style.css';

function ProductDetails(props: any) {
  return (
      <div>
          <img
              className="product-image"
              src={`./productsData/${props.imgSrc}.jpg`}
              alt="props.imgSrc"
          />
      </div>
  );
}

export default function Products(): JSX.Element {

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
      <div className="products-container--title">Nasze realizacje</div>
      <ScrollContainer className="images-wrapper" hideScrollbars={false} mouseScroll={true}>
        {imagesArr.map((image: string) => {
          return <ProductDetails imgSrc={image} key={image} />;
        })}
      </ScrollContainer>
      <a
        href="https://www.facebook.com/profile.php?id=100031545596353&sk=photos"
        target="_blank"
      >
        <div className="anchor-text">Zobacz więcej!</div>
      </a>
    </div>
  );
}
