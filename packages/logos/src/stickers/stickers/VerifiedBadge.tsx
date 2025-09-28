import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const VerifiedBadge: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function VerifiedBadge(
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
      viewBox="0 0 60 60"
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
        d="M55.6255 30C55.5764 28.2381 55.0391 26.5227 54.0709 25.0472C53.1055 23.5745 51.7473 22.3963 50.1491 21.6491C50.7573 19.9936 50.8855 18.2018 50.5309 16.4754C50.1736 14.7463 49.3391 13.1536 48.1255 11.8745C46.8436 10.6609 45.2536 9.82906 43.5245 9.46906C41.7982 9.11451 40.0064 9.24269 38.3509 9.85087C37.6064 8.24997 36.4309 6.88906 34.9555 5.9236C33.48 4.95815 31.7645 4.41815 30 4.37451C28.2382 4.42088 26.5282 4.95542 25.0555 5.9236C23.5827 6.89178 22.4127 8.25269 21.6736 9.85087C20.0155 9.24269 18.2182 9.10906 16.4864 9.46906C14.7545 9.8236 13.1591 10.6581 11.8773 11.8745C10.6636 13.1563 9.83455 14.7518 9.48273 16.4781C9.12818 18.2045 9.26455 19.9963 9.87546 21.6491C8.27455 22.3963 6.91091 23.5718 5.94 25.0445C4.96909 26.5172 4.42636 28.2354 4.37455 30C4.42909 31.7645 4.96909 33.48 5.94 34.9554C6.91091 36.4282 8.27455 37.6063 9.87546 38.3509C9.26455 40.0036 9.12818 41.7954 9.48273 43.5218C9.83727 45.2509 10.6636 46.8436 11.8745 48.1254C13.1564 49.3336 14.7491 50.1627 16.4755 50.52C18.2018 50.88 19.9936 50.7491 21.6491 50.1491C22.3964 51.7472 23.5718 53.1054 25.0473 54.0736C26.52 55.0391 28.2382 55.5763 30 55.6254C31.7645 55.5818 33.48 55.0445 34.9555 54.0791C36.4309 53.1136 37.6064 51.75 38.3509 50.1518C39.9982 50.8036 41.8036 50.9591 43.5409 50.5991C45.2755 50.2391 46.8682 49.38 48.1227 48.1254C49.3773 46.8709 50.2391 45.2781 50.5991 43.5409C50.9591 41.8036 50.8036 39.9981 50.1491 38.3509C51.7473 37.6036 53.1055 36.4281 54.0736 34.9527C55.0391 33.48 55.5764 31.7618 55.6255 30ZM26.3509 40.5L16.9991 31.1509L20.5255 27.6L26.1764 33.2509L38.1764 20.1763L41.85 23.5745L26.3509 40.5Z"
        fill="#1d9bf0"
      />
    </svg>
  );
});

VerifiedBadge.displayName = "VerifiedBadge";

VerifiedBadge.metadata = {
  name: "VerifiedBadge",
  category: "stickers/stickers",
  tags: ["verified", "badge", "icon"],
  description: "VerifiedBadge icon from stickers/stickers category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VerifiedBadge;
