import Button from "@/components/Button";
import React from "react";

export default function page() {
  return (
    <div>
      <Button
        text="Read More"
        buttonStyles="text-indigo-700 font-medium text-sm mb-3"
      />
      <Button type="primary" text="Read More" />
      <Button type="success" text="Read More" />
      <Button type="danger" text="Remove Item" />
      <Button type="warning" text="Read More" />
      <Button type="default" text="Read More" />
    </div>
  );
}
