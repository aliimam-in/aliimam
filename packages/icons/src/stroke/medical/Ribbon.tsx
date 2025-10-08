import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RibbonProps extends IconProps {
  type?: "stroke";
}

export const Ribbon: IconComponent<RibbonProps> = React.forwardRef<
  SVGSVGElement,
  RibbonProps
>(function Ribbon(
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
          d="M12 11.22C11 9.997 10 9 10 8 10 7.47 10.211 6.961 10.586 6.586 10.961 6.211 11.47 6 12 6 12.53 6 13.039 6.211 13.414 6.586 13.789 6.961 14 7.47 14 8 14 9 13.002 10.002 11.99 11.22M12 18 14.57 14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.243 9.016C6.886 8.086 7.746 7.325 8.747 6.8 9.749 6.275 10.863 6 11.994 5.999 13.125 5.998 14.24 6.271 15.242 6.795 16.244 7.319 17.105 8.078 17.75 9.007M9.35 14.53 12 11.22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.34998 14.53C7.72798 12.246 5.99998 10.221 5.99998 7C5.99998 5.67392 6.63212 4.40215 7.75734 3.46447C8.88255 2.52678 10.4087 2 12 2C13.5913 2 15.1174 2.52678 16.2426 3.46447C17.3678 4.40215 18 5.67392 18 7C17.995 10.22 16.222 12.235 14.57 14.5L18.127 19.027C18.2103 19.1331 18.2714 19.255 18.3064 19.3853C18.3414 19.5157 18.3497 19.6517 18.3307 19.7853C18.3117 19.9189 18.2659 20.0473 18.196 20.1628C18.1261 20.2782 18.0336 20.3783 17.924 20.457L16.03 21.817C15.8171 21.9695 15.5528 22.0325 15.2941 21.9923C15.0353 21.9521 14.8026 21.8119 14.646 21.602L12 18L9.32098 21.593C9.16397 21.8043 8.92997 21.9452 8.66974 21.9851C8.40951 22.025 8.14406 21.9606 7.93098 21.806L6.06598 20.453C5.95754 20.3743 5.86602 20.2746 5.79685 20.1599C5.72769 20.0451 5.68229 19.9176 5.66336 19.785C5.64442 19.6523 5.65233 19.5173 5.68663 19.3877C5.72092 19.2582 5.78089 19.1369 5.86298 19.031L9.34998 14.53Z"
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
          d="M12 11.22C11 9.997 10 9 10 8 10 7.47 10.211 6.961 10.586 6.586 10.961 6.211 11.47 6 12 6 12.53 6 13.039 6.211 13.414 6.586 13.789 6.961 14 7.47 14 8 14 9 13.002 10.002 11.99 11.22M12 18 14.57 14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.243 9.016C6.887 8.086 7.746 7.325 8.747 6.8 9.749 6.275 10.863 6 11.994 5.999 13.125 5.998 14.24 6.271 15.242 6.795 16.244 7.319 17.105 8.078 17.75 9.007M9.35 14.53 12 11.22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.35001 14.53C7.72801 12.246 6.00001 10.221 6.00001 7C6.00001 5.67392 6.63215 4.40215 7.75737 3.46447C8.88258 2.52678 10.4087 2 12 2C13.5913 2 15.1174 2.52678 16.2426 3.46447C17.3679 4.40215 18 5.67392 18 7C17.995 10.22 16.222 12.235 14.57 14.5L18.127 19.027C18.2104 19.1331 18.2714 19.255 18.3064 19.3853C18.3414 19.5157 18.3497 19.6517 18.3307 19.7853C18.3118 19.9189 18.266 20.0473 18.1961 20.1628C18.1262 20.2782 18.0336 20.3783 17.924 20.457L16.03 21.817C15.8171 21.9695 15.5529 22.0325 15.2941 21.9923C15.0353 21.9521 14.8026 21.8119 14.646 21.602L12 18L9.32101 21.593C9.164 21.8043 8.93 21.9452 8.66977 21.9851C8.40954 22.025 8.14409 21.9606 7.93101 21.806L6.06601 20.453C5.95757 20.3743 5.86605 20.2746 5.79688 20.1599C5.72772 20.0451 5.68232 19.9176 5.66339 19.785C5.64445 19.6523 5.65236 19.5173 5.68666 19.3877C5.72095 19.2582 5.78092 19.1369 5.86301 19.031L9.35001 14.53Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ribbon doesn't support ${type}`);
  return null;
});

Ribbon.displayName = "Ribbon";

Ribbon.metadata = {
  name: "Ribbon",
  category: "stroke/medical",
  tags: ["ribbon", "icon"],
  description: "Ribbon icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ribbon;
