import Image from "next/image";
import React from "react";
import Link from "next/link";

function EventCity({ data }) {
  return (
    <>
      <h3>All the events</h3>
      {data.map((city, index) => {
        return (
          <Link key={index} href={`/events/${city.id}`} legacyBehavior>
            <a>
              <Image
                src={city.image}
                width={400}
                height={300}
                alt={city.title}
              />
              <p>{city.title}</p>
            </a>
          </Link>
        );
      })}
    </>
  );
}

export default EventCity;

export async function getStaticProps() {
  const data = await import("../../data/data.json");
  return {
    props: {
      data: data.events_categories,
    },
  };
}
