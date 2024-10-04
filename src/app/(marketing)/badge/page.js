import Badge from "@/components/Badge";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="mb-3">
        <Badge type="primary" text="Label" fontSizeClass="text-xs" />
        <Badge type="success" text="Label" fontSizeClass="text-xs" />
        <Badge type="danger" text="Label" fontSizeClass="text-xs" />{" "}
        <Badge type="warning" text="Label" fontSizeClass="text-xs" />{" "}
        <Badge type="default" text="Label" fontSizeClass="text-xs" />
      </div>
      <div className="mb-3">
        <Badge type="primary" text="Label" fontSizeClass="text-sm" />
        <Badge type="success" text="Label" fontSizeClass="text-sm" />
        <Badge type="danger" text="Label" fontSizeClass="text-sm" />{" "}
        <Badge type="warning" text="Label" fontSizeClass="text-sm" />{" "}
        <Badge type="default" text="Label" fontSizeClass="text-sm" />
      </div>
      <div className="mb-3">
        <Badge type="primary" text="Label" fontSizeClass="text-md" />
        <Badge type="success" text="Label" fontSizeClass="text-md" />
        <Badge type="danger" text="Label" fontSizeClass="text-md" />{" "}
        <Badge type="warning" text="Label" fontSizeClass="text-md" />{" "}
        <Badge type="default" text="Label" fontSizeClass="text-md" />
      </div>
      <div className="mb-3">
        <Badge type="primary" text="Label" fontSizeClass="text-lg" />
        <Badge type="success" text="Label" fontSizeClass="text-lg" />
        <Badge type="danger" text="Label" fontSizeClass="text-lg" />{" "}
        <Badge type="warning" text="Label" fontSizeClass="text-lg" />{" "}
        <Badge type="default" text="Label" fontSizeClass="text-lg" />
      </div>
    </div>
  );
}
