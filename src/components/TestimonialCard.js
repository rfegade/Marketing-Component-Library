import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function TestimonialCard({
  profileThumbnail,
  name,
  handle,
  description,
}) {
  return (
    <div className="w-[340px] max-w-sm width-full rounded-md shadow-lg p-5 justify-center bg-white">
      <div className="flex pb-4 pr-4">
        <Image
          src={profileThumbnail}
          className="h-12 w-12 mr-4"
          alt={`Profile Picture of ${name}`}
        />
        <div className="text-left">
          <h3 className="text-left text-lg font-semibold">{name}</h3>
          <p className="text-sm text-neutral-600">{handle}</p>
        </div>
      </div>
      <div>
        <p className="text-base text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
