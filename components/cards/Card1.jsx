import Image from "next/image";

export default function Card1({ src, author, title, desc }) {
  return (
    <>
      <div>
        {/* Image container */}
        <div className="w-full">
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="w-full rounded-tl-lg rounded-tr-lg h-1/2 aspect-square"
          />
        </div>
        {/* Content container */}
        <div className="px-3 py-5 bg-white rounded-bl-lg rounded-br-lg shadow-xl">
          {/* Author */}
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-sm text-gray-500 ">By {author}</h3>
            </div>
            {/* title */}
            <div>
              <h2 className="text-lg">{title}</h2>
            </div>
            {/* description */}
            <div>
              <p className="text-gray-500">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
