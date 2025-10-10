import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LecternProps extends IconProps {
  type?: "stroke";
}

export const Lectern: IconComponent<LecternProps> = React.forwardRef<
  SVGSVGElement,
  LecternProps
>(function Lectern(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M16.0001 12H19.0001C19.4222 12.0001 19.8335 11.8667 20.1751 11.6188C20.5168 11.3709 20.7712 11.0213 20.9021 10.62L21.9581 7.287C22.0028 7.13769 22.012 6.97999 21.985 6.82649C21.9579 6.67298 21.8954 6.52793 21.8023 6.4029C21.7092 6.27786 21.5882 6.17632 21.4489 6.10637C21.3096 6.03641 21.1559 5.99999 21.0001 6H3.00007C2.8442 5.99999 2.69049 6.03641 2.5512 6.10637C2.41191 6.17632 2.29091 6.27786 2.19784 6.4029C2.10477 6.52793 2.04221 6.67298 2.01517 6.82649C1.98812 6.97999 1.99734 7.13769 2.04207 7.287L3.09807 10.621C3.22909 11.0221 3.48363 11.3715 3.82525 11.6192C4.16688 11.8669 4.5781 12.0002 5.00007 12H8.00007"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6V3C18 2.735 17.895 2.48 17.707 2.293 17.52 2.105 17.265 2 17 2H14M15 10H9C8.448 10 8 10.448 8 11V21C8 21.552 8.448 22 9 22H15C15.552 22 16 21.552 16 21V11C16 10.448 15.552 10 15 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M15.9999 12H18.9999C19.422 12.0001 19.8334 11.8667 20.175 11.6188C20.5166 11.3709 20.7711 11.0213 20.9019 10.62L21.9579 7.287C22.0027 7.13769 22.0119 6.97999 21.9848 6.82649C21.9578 6.67298 21.8952 6.52793 21.8022 6.4029C21.7091 6.27786 21.5881 6.17632 21.4488 6.10637C21.3095 6.03641 21.1558 5.99999 20.9999 6H2.99995C2.84408 5.99999 2.69037 6.03641 2.55108 6.10637C2.41179 6.17632 2.29078 6.27786 2.19771 6.4029C2.10465 6.52793 2.04209 6.67298 2.01505 6.82649C1.988 6.97999 1.99721 7.13769 2.04195 7.287L3.09795 10.621C3.22897 11.0221 3.4835 11.3715 3.82513 11.6192C4.16676 11.8669 4.57798 12.0002 4.99995 12H7.99995"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6V3C18 2.735 17.895 2.48 17.707 2.293 17.52 2.105 17.265 2 17 2H14M15 10H9C8.448 10 8 10.448 8 11V21C8 21.552 8.448 22 9 22H15C15.552 22 16 21.552 16 21V11C16 10.448 15.552 10 15 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Lectern doesn't support ${type}`);
  return null;
});

Lectern.displayName = "Lectern";

Lectern.metadata = {
  name: "Lectern",
  category: "stroke/multimedia",
  tags: ["lectern", "icon"],
  description: "Lectern icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lectern;
