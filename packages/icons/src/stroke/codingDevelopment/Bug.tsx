import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BugProps extends IconProps {
  type?: "stroke";
}

export const Bug: IconComponent<BugProps> = React.forwardRef<
  SVGSVGElement,
  BugProps
>(function Bug(
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
          d="M12 20V11M14 7C15.061 7 16.078 7.421 16.828 8.172 17.579 8.922 18 9.939 18 11V14C18 15.591 17.368 17.117 16.243 18.243 15.117 19.368 13.591 20 12 20 10.409 20 8.883 19.368 7.757 18.243 6.632 17.117 6 15.591 6 14V11C6 9.939 6.421 8.922 7.172 8.172 7.922 7.421 8.939 7 10 7H14ZM14.12 3.88 16 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21C21.001 19.971 20.606 18.982 19.896 18.237 19.187 17.492 18.218 17.049 17.19 17M21 5C20.999 5.982 20.636 6.93 19.982 7.662 19.327 8.394 18.426 8.86 17.45 8.97M22 13H18M3 21C2.999 19.971 3.394 18.982 4.104 18.237 4.813 17.492 5.782 17.049 6.81 17M3 5C3.001 5.982 3.364 6.93 4.018 7.662 4.673 8.394 5.574 8.86 6.55 8.97M6 13H2M8 2 9.88 3.88M9 7.13V6C9 5.204 9.316 4.441 9.879 3.879 10.441 3.316 11.204 3 12 3 12.796 3 13.559 3.316 14.121 3.879 14.684 4.441 15 5.204 15 6V7.13"
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
          d="M12 20V11M14 7C15.061 7 16.078 7.421 16.828 8.172 17.579 8.922 18 9.939 18 11V14C18 15.591 17.368 17.117 16.243 18.243 15.117 19.368 13.591 20 12 20 10.409 20 8.883 19.368 7.757 18.243 6.632 17.117 6 15.591 6 14V11C6 9.939 6.421 8.922 7.172 8.172 7.922 7.421 8.939 7 10 7H14ZM14.12 3.88 16 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21C21.001 19.971 20.606 18.982 19.896 18.237 19.187 17.492 18.218 17.049 17.19 17M21 5C20.999 5.982 20.636 6.93 19.982 7.662 19.327 8.394 18.426 8.86 17.45 8.97M22 13H18M3 21C2.999 19.971 3.394 18.982 4.104 18.237 4.813 17.492 5.782 17.049 6.81 17M3 5C3.001 5.982 3.364 6.93 4.018 7.662 4.673 8.394 5.574 8.86 6.55 8.97M6 13H2M8 2 9.88 3.88M9 7.13V6C9 5.204 9.316 4.441 9.879 3.879 10.441 3.316 11.204 3 12 3 12.796 3 13.559 3.316 14.121 3.879 14.684 4.441 15 5.204 15 6V7.13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Bug doesn't support ${type}`);
  return null;
});

Bug.displayName = "Bug";

Bug.metadata = {
  name: "Bug",
  category: "stroke/codingDevelopment",
  tags: ["bug", "icon"],
  description: "Bug icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bug;
