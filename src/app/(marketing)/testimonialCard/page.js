import React from "react";
import profileThumbnail from "../../../public/img/profileThumbnail.png";
import TestimonialCard from "@/components/testimonialCard";

export default function page() {
  return (
    <TestimonialCard
      profileThumbnail={profileThumbnail}
      name="Sarah Dole"
      handle="@sarahdole"
      description="I have been searching for abstract images for my design projects,
            and I am thrilled to have found this platform. The variety and depth
            of creativity are astounding."
    />
  );
}
