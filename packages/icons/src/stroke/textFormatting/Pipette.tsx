import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PipetteProps extends IconProps {
  type?: "stroke";
}

export const Pipette: IconComponent<PipetteProps> = React.forwardRef<
  SVGSVGElement,
  PipetteProps
>(function Pipette(
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
          d="M12.0001 9L3.58606 17.414C3.21096 17.789 3.00018 18.2976 3.00006 18.828V20.172C2.99995 20.7024 2.78916 21.211 2.41406 21.586C2.78905 21.2109 3.29767 21.0001 3.82806 21H5.17206C5.70245 20.9999 6.21108 20.7891 6.58606 20.414L15.0001 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9 18.4 9.4C18.597 9.597 18.753 9.831 18.86 10.088 18.967 10.346 19.021 10.621 19.021 10.9 19.021 11.179 18.967 11.454 18.86 11.712 18.753 11.969 18.597 12.203 18.4 12.4 18.203 12.597 17.969 12.753 17.712 12.86 17.455 12.967 17.179 13.021 16.9 13.021 16.622 13.021 16.346 12.967 16.088 12.86 15.831 12.753 15.597 12.597 15.4 12.4L11.6 8.6C11.202 8.202 10.979 7.663 10.979 7.1 10.979 6.821 11.034 6.546 11.14 6.288 11.247 6.031 11.403 5.797 11.6 5.6 11.797 5.403 12.031 5.247 12.288 5.14 12.546 5.034 12.822 4.979 13.1 4.979 13.663 4.979 14.202 5.202 14.6 5.6L15 6 18.4 2.6C18.798 2.202 19.338 1.979 19.9 1.979 20.463 1.979 21.002 2.202 21.4 2.6 21.798 2.998 22.021 3.537 22.021 4.1 22.021 4.663 21.798 5.202 21.4 5.6L18 9ZM2 22 2.414 21.586"
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
          d="M12 9 3.586 17.414C3.211 17.789 3 18.298 3 18.828V20.172C3 20.702 2.789 21.211 2.414 21.586 2.789 21.211 3.298 21 3.828 21H5.172C5.702 21 6.211 20.789 6.586 20.414L15 12M18 9 18.4 9.4C18.597 9.597 18.753 9.831 18.86 10.088 18.967 10.346 19.021 10.621 19.021 10.9 19.021 11.179 18.967 11.454 18.86 11.712 18.753 11.969 18.597 12.203 18.4 12.4 18.203 12.597 17.969 12.753 17.712 12.86 17.455 12.966 17.179 13.021 16.9 13.021 16.622 13.021 16.346 12.966 16.088 12.86 15.831 12.753 15.597 12.597 15.4 12.4L11.6 8.6C11.202 8.202 10.979 7.663 10.979 7.1 10.979 6.821 11.034 6.546 11.14 6.288 11.247 6.031 11.403 5.797 11.6 5.6 11.797 5.403 12.031 5.247 12.288 5.14 12.546 5.034 12.822 4.979 13.1 4.979 13.663 4.979 14.202 5.202 14.6 5.6L15 6 18.4 2.6C18.798 2.202 19.338 1.979 19.9 1.979 20.463 1.979 21.002 2.202 21.4 2.6 21.798 2.998 22.021 3.537 22.021 4.1 22.021 4.663 21.798 5.202 21.4 5.6L18 9ZM2 22 2.414 21.586"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Pipette doesn't support ${type}`);
  return null;
});

Pipette.displayName = "Pipette";

Pipette.metadata = {
  name: "Pipette",
  category: "stroke/textFormatting",
  tags: ["pipette", "icon"],
  description: "Pipette icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pipette;
