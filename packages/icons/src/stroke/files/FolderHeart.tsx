import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderHeart(
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
      viewBox="0 0 24 24"
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
        d="M10.638 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4.99997C2 4.46954 2.21071 3.96083 2.58579 3.58576C2.96086 3.21069 3.46957 2.99997 4 2.99997H7.9C8.23449 2.99669 8.56445 3.07736 8.8597 3.23459C9.15495 3.39183 9.40604 3.6206 9.59 3.89997L10.4 5.09997C10.5821 5.3765 10.83 5.60349 11.1215 5.76058C11.413 5.91766 11.7389 5.99992 12.07 5.99997H20C20.5304 5.99997 21.0391 6.21069 21.4142 6.58576C21.7893 6.96083 22 7.46954 22 7.99997V11.417"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.62 18.8C14.4096 18.5807 14.2458 18.321 14.1386 18.0366C14.0313 17.7523 13.9828 17.4491 13.9959 17.1455C14.009 16.8418 14.0835 16.544 14.2149 16.2699C14.3463 15.9959 14.5318 15.7513 14.7603 15.5509C14.9888 15.3505 15.2556 15.1985 15.5444 15.104C15.8333 15.0095 16.1383 14.9746 16.4411 15.0012C16.7438 15.0279 17.0381 15.1156 17.306 15.2591C17.5739 15.4025 17.81 15.5988 18 15.836C18.1909 15.6013 18.4272 15.4075 18.6947 15.2661C18.9623 15.1248 19.2556 15.0389 19.5571 15.0136C19.8586 14.9882 20.1621 15.0239 20.4495 15.1186C20.7369 15.2132 21.0022 15.3649 21.2296 15.5645C21.4571 15.764 21.6419 16.0074 21.7731 16.2801C21.9043 16.5527 21.9792 16.849 21.9932 17.1513C22.0072 17.4535 21.9601 17.7555 21.8548 18.0391C21.7494 18.3228 21.5879 18.5822 21.38 18.802L18.754 21.658C18.6603 21.7659 18.5446 21.8524 18.4146 21.9117C18.2846 21.9709 18.1434 22.0016 18.0005 22.0016C17.8576 22.0016 17.7164 21.9709 17.5864 21.9117C17.4564 21.8524 17.3407 21.7659 17.247 21.658L14.62 18.8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderHeart.displayName = "FolderHeart";

FolderHeart.metadata = {
  name: "FolderHeart",
  category: "stroke/files",
  tags: ["folder", "heart", "icon"],
  description: "FolderHeart icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderHeart;
