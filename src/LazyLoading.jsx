import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoading() {
  return (
    <div>
      <LazyLoadImage
        // alt={image.alt}
        height={"360px"}
        effect="blur"
        placeholderSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        src={"https://wallpaperaccess.com/full/2126183.jpg"} // use normal <img> attributes as props
        // width={image.width}
      />
      <LazyLoadImage
        // alt={image.alt}
        height={"360px"}
        effect="blur"
        src={"https://wallpaperaccess.com/full/2126183.jpg"} // use normal <img> attributes as props
        // width={image.width}
      />
      {/* <span>{image.caption}</span> */}
    </div>
  );
}
