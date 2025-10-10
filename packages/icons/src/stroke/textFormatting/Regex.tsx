import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RegexProps extends IconProps {
  type?: "stroke";
}

export const Regex: IconComponent<RegexProps> = React.forwardRef<
  SVGSVGElement,
  RegexProps
>(function Regex(
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
          d="M17 3V13M12.67 5.5 21.33 10.5M12.67 10.5 21.33 5.5M9 17C9 16.47 8.789 15.961 8.414 15.586 8.039 15.211 7.53 15 7 15H5C4.47 15 3.961 15.211 3.586 15.586 3.211 15.961 3 16.47 3 17V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H7C7.53 21 8.039 20.789 8.414 20.414 8.789 20.039 9 19.53 9 19V17Z"
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
          d="M17 3V13M12.67 5.5 21.33 10.5M12.67 10.5 21.33 5.5M9 17C9 16.47 8.789 15.961 8.414 15.586 8.039 15.211 7.53 15 7 15H5C4.47 15 3.961 15.211 3.586 15.586 3.211 15.961 3 16.47 3 17V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H7C7.53 21 8.039 20.789 8.414 20.414 8.789 20.039 9 19.53 9 19V17Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Regex doesn't support ${type}`);
  return null;
});

Regex.displayName = "Regex";

Regex.metadata = {
  name: "Regex",
  category: "stroke/textFormatting",
  tags: ["regex", "icon"],
  description: "Regex icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Regex;
