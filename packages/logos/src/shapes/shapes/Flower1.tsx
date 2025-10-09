import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower1(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M25.6816 10.4C24.3277 5.6 26.1648 0 32 0C37.8352 0 39.6723 5.6 38.3184 10.4C37.3648 13.7805 34.8442 21.5264 33.4368 25.8112C33.1776 26.601 33.7011 27.4317 34.4211 27.8499C35.1408 28.2678 36.1005 28.2858 36.6563 27.6675C39.6755 24.3107 45.1469 18.2598 47.6077 15.7459C51.1011 12.177 56.8851 10.9629 59.8029 16C62.7203 21.0368 58.7734 25.423 53.9261 26.6541C50.512 27.5213 42.5213 29.2186 38.0944 30.1462C37.279 30.3171 36.8157 31.1696 36.8157 32C36.8157 32.8304 37.279 33.6829 38.0944 33.8538C42.5213 34.7814 50.512 36.4787 53.9261 37.3459C58.7734 38.577 62.7206 42.9629 59.8029 48C56.8851 53.0371 51.1011 51.823 47.6077 48.2541C45.1469 45.7402 39.6755 39.6893 36.6563 36.3322C36.1005 35.7142 35.1408 35.7322 34.4211 36.1501C33.7011 36.5683 33.1776 37.399 33.4368 38.1885C34.8442 42.4739 37.3648 50.2195 38.3184 53.6C39.6723 58.4 37.8352 64 32 64C26.1648 64 24.3277 58.4 25.6816 53.6C26.6352 50.2195 29.1558 42.4739 30.5632 38.1885C30.8224 37.399 30.2989 36.5683 29.5786 36.1501C28.8592 35.7322 27.8995 35.7142 27.3437 36.3322C24.3245 39.6893 18.8531 45.7402 16.3923 48.2541C12.8989 51.823 7.11488 53.0371 4.19712 48C1.27968 42.9629 5.22656 38.577 10.0739 37.3459C13.4883 36.4787 21.4787 34.7814 25.9056 33.8538C26.721 33.6829 27.1843 32.8304 27.1843 32C27.1843 31.1696 26.721 30.3171 25.9056 30.1462C21.4787 29.2182 13.488 27.5213 10.0739 26.6541C5.22656 25.423 1.27936 21.0371 4.19712 16C7.11456 10.9632 12.8989 12.177 16.3923 15.7459C18.8531 18.2598 24.3245 24.3107 27.3437 27.6678C27.8995 28.2858 28.8592 28.2678 29.5786 27.8502C30.2986 27.4317 30.8224 26.601 30.5632 25.8115C29.1558 21.5261 26.6352 13.7805 25.6816 10.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

Flower1.displayName = "Flower1";

Flower1.metadata = {
  name: "Flower1",
  category: "shapes/shapes",
  tags: ["flower", "icon"],
  description: "Flower1 icon from shapes/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower1;
