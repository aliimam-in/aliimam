import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SunMoonProps extends IconProps {
  type?: "solid" | "stroke";
}

export const SunMoon: IconComponent<SunMoonProps> = React.forwardRef<
  SVGSVGElement,
  SunMoonProps
>(function SunMoon(
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
          d="M10.5 4V2C10.5 1.172 11.172.5 12 .5 12.828.5 13.5 1.172 13.5 2V4C13.5 4.828 12.828 5.5 12 5.5 11.172 5.5 10.5 4.828 10.5 4ZM14.837 16.385C14.591 17.424 14.071 18.379 13.333 19.15 12.594 19.922 11.663 20.482 10.636 20.773 9.608 21.065 8.522 21.077 7.488 20.808 6.455 20.539 5.512 19.999 4.756 19.244 4.001 18.489 3.461 17.546 3.192 16.512 2.923 15.479 2.935 14.392 3.226 13.365 3.517 12.337 4.078 11.406 4.849 10.667 5.62 9.929 6.575 9.409 7.614 9.163 8.238 9.016 8.584 9.823 8.329 10.411 8.011 11.147 7.921 11.961 8.071 12.749 8.222 13.537 8.605 14.261 9.172 14.828 9.739 15.395 10.463 15.778 11.251 15.928 12.039 16.078 12.853 15.988 13.589 15.67 14.178 15.415 14.985 15.76 14.837 16.385ZM14.5 12C14.5 11.337 14.236 10.701 13.768 10.232 13.299 9.764 12.663 9.5 12 9.5 11.172 9.5 10.5 8.828 10.5 8 10.5 7.172 11.172 6.5 12 6.5 13.459 6.5 14.857 7.08 15.889 8.111 16.92 9.143 17.5 10.541 17.5 12 17.5 12.828 16.828 13.5 16 13.5 15.172 13.5 14.5 12.828 14.5 12ZM17.939 3.939C18.525 3.354 19.475 3.354 20.06 3.939 20.646 4.525 20.646 5.475 20.06 6.061L18.805 7.316C18.219 7.902 17.269 7.902 16.683 7.316 16.098 6.731 16.098 5.781 16.683 5.195L17.939 3.939ZM22 10.5C22.828 10.5 23.5 11.172 23.5 12 23.5 12.828 22.828 13.5 22 13.5H20C19.172 13.5 18.5 12.828 18.5 12 18.5 11.172 19.172 10.5 20 10.5H22Z"
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
          d="M12 2V4M14.837 16.385C14.591 17.424 14.071 18.379 13.333 19.15 12.594 19.922 11.663 20.482 10.636 20.773 9.608 21.065 8.522 21.077 7.488 20.808 6.455 20.539 5.512 19.999 4.756 19.244 4.001 18.489 3.461 17.546 3.192 16.512 2.923 15.479 2.935 14.392 3.226 13.365 3.517 12.337 4.078 11.406 4.849 10.668 5.62 9.929 6.575 9.409 7.614 9.163 8.238 9.016 8.584 9.823 8.329 10.411 8.011 11.147 7.921 11.962 8.071 12.749 8.222 13.537 8.605 14.261 9.172 14.828 9.739 15.395 10.463 15.778 11.251 15.928 12.039 16.078 12.853 15.989 13.589 15.67 14.178 15.415 14.985 15.76 14.837 16.385ZM16 12C16 10.939 15.579 9.922 14.828 9.172 14.078 8.421 13.061 8 12 8M19 5 17.744 6.256M20 12H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SunMoon doesn't support ${type}`);
  return null;
});

SunMoon.displayName = "SunMoon";

SunMoon.metadata = {
  name: "SunMoon",
  category: "solid/accessibility",
  tags: ["sun", "moon", "icon"],
  description: "SunMoon icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunMoon;
