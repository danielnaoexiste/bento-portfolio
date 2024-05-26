import Image from "next/image";

export const ImagePreview = ({ title }: { title: string }) => {
  return (
    <Image
      loading="lazy"
      alt={title}
      placeholder="blur"
      src={`/images/${title}.webp`}
      width={64}
      height={64}
      blurDataURL={`/images/${title}.webp`}
      className="rounded-lg"
    />
  );
};
