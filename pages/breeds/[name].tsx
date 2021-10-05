import { GetServerSideProps } from "next";
import Image from "next/image";
import { FunctionComponent } from "react";
import { catWikiRepository } from "../../services/repository";
import { APIResponse } from "../../types/interfaces";

const Rate: FunctionComponent<{ rate: number }> = ({ rate = 1 }) => (
  <div className="flex align-middle">
    {[1, 2, 3, 4, 5].map((el, i) => (
      <div
        key={i}
        className="h-3 md:w-14 rounded-lg"
        style={{
          background: i + 1 <= rate ? "#544439" : "#E0E0E0",
        }}
      ></div>
    ))}
  </div>
);

const text = `          Bengals are a lot of fun to live with, but they're definitely not the
cat for everyone, or for first-time cat owners. Extremely intelligent,
curious and active, they demand a lot of interaction and woe betide
the owner who doesn't provide it.`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }

  const cat = await catWikiRepository.searchByName(ctx.params["name"]);

  if (cat.length === 0 || cat.length > 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: cat[0],
    },
  };
};

const breedInfo: FunctionComponent<{ data: APIResponse }> = ({ data }) => {
  return (
    <section
      className="flex flex-wrap justify-between w-full md:pl-14 mt-10"
      style={{
        maxWidth: "1088px",
      }}
    >
      <div className="relative w-33 h-33 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-3xl">
        <Image
          src={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}
          alt="cat1"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div
        className="flex flex-col xl:w-full"
        style={{
          maxWidth: "600px",
        }}
      >
        <h1 className="font-mont text-customBrown text-xl md:text-4xl font-semibold mb-6">
          {data.name}
        </h1>
        <p className="font-mont text-customBrown text-xl md:text-lg font-medium mb-8">
          {data.description}
        </p>
        <p className="mb-8">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            Temperament:{" "}
          </span>
          {data.temperament}
        </p>
        <p className="mb-8">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            origin:
          </span>{" "}
          {data.origin}
        </p>
        <p className="mb-8">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            Life Span:{" "}
          </span>{" "}
          {data.life_span}
        </p>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            Adaptability:{" "}
          </span>{" "}
          <Rate rate={data.adaptability} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Affection level:{" "}
          </span>{" "}
          <Rate rate={data.affection_level} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Child Friendly:{" "}
          </span>{" "}
          <Rate rate={data.child_friendly} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Grooming:{" "}
          </span>{" "}
          <Rate rate={data.grooming} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Intelligence:{" "}
          </span>{" "}
          <Rate rate={data.intelligence} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Health issues:{" "}
          </span>{" "}
          <Rate rate={data.health_issues} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Social needs:{" "}
          </span>{" "}
          <Rate rate={data.social_needs} />
        </div>
        <div className="flex items-baseline">
          <span className="font-mont text-customBrown font-bold text-sm md:text-base mb-8">
            {" "}
            Stranger friendly:{" "}
          </span>{" "}
          <Rate rate={data.stranger_friendly} />
        </div>
      </div>
    </section>
  );
};

export default breedInfo;
