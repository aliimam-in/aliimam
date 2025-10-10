import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SunMediumProps extends IconProps {
  type?: "solid" | "stroke";
}

export const SunMedium: IconComponent<SunMediumProps> = React.forwardRef<
  SVGSVGElement,
  SunMediumProps
>(function SunMedium(
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
  if (type === "solid") {
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM10.5 4V3C10.5 2.172 11.172 1.5 12 1.5 12.828 1.5 13.5 2.172 13.5 3V4C13.5 4.828 12.828 5.5 12 5.5 11.172 5.5 10.5 4.828 10.5 4ZM10.5 21V20C10.5 19.172 11.172 18.5 12 18.5 12.828 18.5 13.5 19.172 13.5 20V21C13.5 21.828 12.828 22.5 12 22.5 11.172 22.5 10.5 21.828 10.5 21ZM4 10.5C4.828 10.5 5.5 11.172 5.5 12 5.5 12.828 4.828 13.5 4 13.5H3C2.172 13.5 1.5 12.828 1.5 12 1.5 11.172 2.172 10.5 3 10.5H4ZM21 10.5C21.828 10.5 22.5 11.172 22.5 12 22.5 12.828 21.828 13.5 21 13.5H20C19.172 13.5 18.5 12.828 18.5 12 18.5 11.172 19.172 10.5 20 10.5H21ZM17.304 4.575C17.889 3.99 18.839 3.99 19.425 4.575 20.01 5.161 20.01 6.111 19.425 6.697L18.718 7.404C18.132 7.989 17.182 7.989 16.597 7.404 16.011 6.818 16.011 5.868 16.597 5.282L17.304 4.575ZM5.282 16.596C5.868 16.011 6.818 16.011 7.404 16.596 7.989 17.182 7.989 18.132 7.404 18.718L6.697 19.425C6.111 20.01 5.161 20.01 4.575 19.425 3.99 18.839 3.99 17.889 4.575 17.304L5.282 16.596ZM4.575 4.575C5.161 3.99 6.111 3.99 6.697 4.575L7.404 5.282C7.989 5.868 7.989 6.818 7.404 7.404 6.818 7.989 5.868 7.989 5.282 7.404L4.575 6.697C3.99 6.111 3.99 5.161 4.575 4.575ZM16.597 16.596C17.182 16.011 18.132 16.011 18.718 16.596L19.425 17.304C20.01 17.889 20.01 18.839 19.425 19.425 18.839 20.01 17.889 20.01 17.304 19.425L16.597 18.718C16.011 18.132 16.011 17.182 16.597 16.596Z"
          fill="currentColor"
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.636 17.657 6.343M6.343 17.657 5.636 18.364M5.636 5.636 6.343 6.343M17.657 17.657 18.364 18.364"
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.636 17.657 6.343M6.343 17.657 5.636 18.364M5.636 5.636 6.343 6.343M17.657 17.657 18.364 18.364"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SunMedium doesn't support ${type}`);
  return null;
});

SunMedium.displayName = "SunMedium";

SunMedium.metadata = {
  name: "SunMedium",
  category: "solid/accessibility",
  tags: ["sun", "medium", "icon"],
  description: "SunMedium icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunMedium;
