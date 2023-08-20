import Image from "next/image";

export default function Banner() {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <Image
        style={{ width: "100%", height: "90%" }}
        src={"/banner-img.jpg"}
        alt="banner"
        width={1920}
        height={1080}
      />
    </div>
  );
}
