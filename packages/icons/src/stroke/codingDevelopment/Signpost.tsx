import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SignpostProps extends IconProps {
  type?: "stroke";
}

export const Signpost: IconComponent<SignpostProps> = React.forwardRef<
  SVGSVGElement,
  SignpostProps
>(function Signpost(
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
          d="M12 13V21M12 3V6M18 6C18.517 6 19.015 6.201 19.387 6.56L21.694 8.78C21.791 8.873 21.868 8.985 21.92 9.109 21.973 9.233 22 9.366 22 9.5 22 9.634 21.973 9.767 21.92 9.891 21.868 10.015 21.791 10.127 21.694 10.22L19.387 12.44C19.015 12.799 18.517 13 18 13H6C5.483 13 4.986 12.799 4.613 12.44L2.307 10.22C2.21 10.127 2.133 10.015 2.081 9.891 2.028 9.767 2.001 9.634 2.001 9.5 2.001 9.366 2.028 9.233 2.081 9.109 2.133 8.985 2.21 8.873 2.307 8.78L4.613 6.56C4.986 6.201 5.483 6 6 6H18Z"
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
          d="M12 13V21M12 3V6M18 6C18.517 6 19.015 6.201 19.387 6.56L21.694 8.78C21.791 8.873 21.868 8.985 21.92 9.109 21.973 9.233 22 9.366 22 9.5 22 9.634 21.973 9.767 21.92 9.891 21.868 10.015 21.791 10.127 21.694 10.22L19.387 12.44C19.015 12.799 18.517 13 18 13H6C5.483 13 4.986 12.799 4.613 12.44L2.307 10.22C2.21 10.127 2.133 10.015 2.081 9.891 2.028 9.767 2.001 9.634 2.001 9.5 2.001 9.366 2.028 9.233 2.081 9.109 2.133 8.985 2.21 8.873 2.307 8.78L4.613 6.56C4.986 6.201 5.483 6 6 6H18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Signpost doesn't support ${type}`);
  return null;
});

Signpost.displayName = "Signpost";

Signpost.metadata = {
  name: "Signpost",
  category: "stroke/codingDevelopment",
  tags: ["signpost", "icon"],
  description: "Signpost icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Signpost;
