import Image from "next/image";
import React from "react";
import Link from "next/link";
import Badge from "./Badge";
import Button from "./Button";

export default function BlogCard({
  blogImage,
  badgeType,
  badgeText,
  badgeStyles,
  blogTitle,
  blogBlurb,
  buttonLink,
  buttonText,
  buttonStyles,
}) {
  return (
    <div className="w-[340px] ">
      <Image src={blogImage} alt="Blog Image" className="rounded-t-lg" />
      <div className="px-3 py-4 bg-white rounded-b-lg">
        <Badge type={badgeType} text={badgeText} fontSizeClass={badgeStyles} />
        <h2 className="text-lg font-semibold my-2">{blogTitle}</h2>
        <p className="text-base text-neutral-600 font-medium mb-4">
          {blogBlurb}
        </p>

        <Link href={buttonLink}>
          <Button text={buttonText} buttonStyles={buttonStyles} />
        </Link>
      </div>
    </div>
  );
}
