import Image from "next/image";

export default function Card({ src, title, desc }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div>
          <Image src={src} alt="img" width={60} height={60} />
        </div>
        {/* title */}
        <div>
          <h3 className="text-xl">{title}</h3>
        </div>
        {/* Description */}
        <div>
          <p className="text-center text-gray-500 md:text-start">{desc}</p>
        </div>
      </div>
    </>
  );
}
