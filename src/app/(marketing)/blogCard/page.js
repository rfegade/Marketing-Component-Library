import React from "react";
import BlogCard from "@/components/BlogCard";
import blogImage from "../../../public/img/spacejoy.jpg";

export default function page() {
  return (
    <BlogCard
      blogImage={blogImage}
      badgeType="success"
      badgeText="Interior"
      badgeStyles="text-xs"
      blogTitle="Top 5 Living Room Inspirations"
      blogBlurb="Curated vibrants colors for your living, make it pop & calm in the
          same time."
      buttonLink=""
      buttonText="Read More"
      buttonStyles="text-indigo-700 font-medium text-sm"
    />
  );
}
