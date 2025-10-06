import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HouseHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HouseHeart(
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
        d="M8.61996 13.8C8.40958 13.5807 8.24582 13.321 8.13855 13.0366C8.03129 12.7522 7.98276 12.4491 7.99587 12.1454C8.00899 11.8418 8.08348 11.5439 8.21486 11.2699C8.34625 10.9958 8.53179 10.7512 8.7603 10.5508C8.98881 10.3505 9.25554 10.1984 9.54442 10.104C9.83329 10.0095 10.1383 9.97454 10.4411 10.0012C10.7438 10.0278 11.038 10.1155 11.306 10.259C11.5739 10.4025 11.81 10.5988 12 10.836C12.1909 10.6012 12.4272 10.4074 12.6947 10.2661C12.9622 10.1248 13.2555 10.0389 13.557 10.0135C13.8586 9.98817 14.1621 10.0239 14.4495 10.1185C14.7369 10.2132 15.0022 10.3649 15.2296 10.5644C15.457 10.764 15.6419 11.0074 15.7731 11.28C15.9043 11.5527 15.9791 11.849 15.9932 12.1512C16.0072 12.4535 15.9601 12.7555 15.8548 13.0391C15.7494 13.3227 15.5879 13.5822 15.38 13.802L12.754 16.658C12.6603 16.7659 12.5445 16.8524 12.4145 16.9116C12.2845 16.9709 12.1433 17.0016 12.0005 17.0016C11.8576 17.0016 11.7164 16.9709 11.5864 16.9116C11.4564 16.8524 11.3406 16.7659 11.247 16.658L8.61996 13.8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.99999C2.99993 9.70906 3.06333 9.42161 3.18579 9.15771C3.30824 8.8938 3.4868 8.65979 3.709 8.47199L10.709 2.47199C11.07 2.1669 11.5274 1.99951 12 1.99951C12.4726 1.99951 12.93 2.1669 13.291 2.47199L20.291 8.47199C20.5132 8.65979 20.6918 8.8938 20.8142 9.15771C20.9367 9.42161 21.0001 9.70906 21 9.99999V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HouseHeart.displayName = "HouseHeart";

HouseHeart.metadata = {
  name: "HouseHeart",
  category: "stroke/buildings",
  tags: ["house", "heart", "icon"],
  description: "HouseHeart icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HouseHeart;
