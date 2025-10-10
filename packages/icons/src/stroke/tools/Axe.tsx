import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AxeProps extends IconProps {
  type?: "stroke";
}

export const Axe: IconComponent<AxeProps> = React.forwardRef<
  SVGSVGElement,
  AxeProps
>(function Axe(
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
          d="M13.9998 12L5.61876 20.38C5.42177 20.577 5.18791 20.7334 4.93051 20.84C4.67312 20.9467 4.39723 21.0016 4.11861 21.0017C3.55591 21.0018 3.01621 20.7783 2.61826 20.3805C2.2203 19.9827 1.99668 19.4431 1.99658 18.8804C1.99649 18.3177 2.21993 17.778 2.61776 17.38L10.9998 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9999 15.5C14.9999 15.6326 15.0526 15.7598 15.1463 15.8536C15.2401 15.9473 15.3673 16 15.4999 16C16.3535 16 17.1987 15.8319 17.9873 15.5052C18.776 15.1786 19.4925 14.6998 20.0961 14.0962C20.6997 13.4926 21.1785 12.7761 21.5051 11.9875C21.8318 11.1988 21.9999 10.3536 21.9999 9.50002C21.9999 9.36741 21.9472 9.24023 21.8534 9.14646C21.7597 9.0527 21.6325 9.00002 21.4999 9.00002H19.8279C19.2975 8.9999 18.7889 8.78912 18.4139 8.41402L13.3519 3.35202C13.1259 3.12608 12.8195 2.99915 12.4999 2.99915C12.1803 2.99915 11.8739 3.12608 11.6479 3.35202L9.3519 5.64802C9.12595 5.87399 8.99902 6.18046 8.99902 6.50002C8.99902 6.81957 9.12595 7.12604 9.3519 7.35202L14.4139 12.414C14.789 12.789 14.9998 13.2976 14.9999 13.828V15.5Z"
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
          d="M14 12L5.619 20.38C5.42202 20.577 5.18815 20.7334 4.93076 20.84C4.67336 20.9467 4.39748 21.0016 4.11885 21.0017C3.55615 21.0018 3.01646 20.7783 2.6185 20.3805C2.22054 19.9827 1.99692 19.4431 1.99683 18.8804C1.99673 18.3177 2.22018 17.778 2.618 17.38L11 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15.5C15 15.6326 15.0527 15.7598 15.1465 15.8536C15.2402 15.9473 15.3674 16 15.5 16C16.3536 16 17.1988 15.8319 17.9875 15.5052C18.7761 15.1786 19.4926 14.6998 20.0962 14.0962C20.6998 13.4926 21.1786 12.7761 21.5052 11.9875C21.8319 11.1988 22 10.3536 22 9.50002C22 9.36741 21.9473 9.24023 21.8536 9.14646C21.7598 9.0527 21.6326 9.00002 21.5 9.00002H19.828C19.2976 8.9999 18.789 8.78912 18.414 8.41402L13.352 3.35202C13.126 3.12608 12.8196 2.99915 12.5 2.99915C12.1805 2.99915 11.874 3.12608 11.648 3.35202L9.35202 5.64802C9.12608 5.87399 8.99915 6.18046 8.99915 6.50002C8.99915 6.81957 9.12608 7.12604 9.35202 7.35202L14.414 12.414C14.7891 12.789 14.9999 13.2976 15 13.828V15.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Axe doesn't support ${type}`);
  return null;
});

Axe.displayName = "Axe";

Axe.metadata = {
  name: "Axe",
  category: "stroke/tools",
  tags: ["axe", "icon"],
  description: "Axe icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Axe;
