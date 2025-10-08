import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ContainerProps extends IconProps {
  type?: "stroke";
}

export const Container: IconComponent<ContainerProps> = React.forwardRef<
  SVGSVGElement,
  ContainerProps
>(function Container(
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
          d="M22 7.69999C22 7.09999 21.6 6.49999 21.2 6.19999L14.9 2.29999C14.6409 2.15272 14.348 2.07529 14.05 2.07529C13.752 2.07529 13.4591 2.15272 13.2 2.29999L2.9 8.29999C2.4 8.49999 2 9.09999 2 9.69999V16.3C2 16.8 2.4 17.5 2.8 17.8L9.1 21.7C9.35908 21.8473 9.65198 21.9247 9.95 21.9247C10.248 21.9247 10.5409 21.8473 10.8 21.7L21.1 15.7C21.6 15.4 22 14.7 22 14.2V7.69999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21.9V14L2.1 9.1M10 14 21.9 7.1M14 19.8V11.7M18 17.5V9.4"
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
          d="M22 7.70002C22 7.10002 21.6 6.50002 21.2 6.20002L14.9 2.30002C14.6409 2.15275 14.348 2.07532 14.05 2.07532C13.752 2.07532 13.4591 2.15275 13.2 2.30002L2.9 8.30002C2.4 8.50002 2 9.10002 2 9.70002V16.3C2 16.8 2.4 17.5 2.8 17.8L9.1 21.7C9.35908 21.8473 9.65198 21.9247 9.95 21.9247C10.248 21.9247 10.5409 21.8473 10.8 21.7L21.1 15.7C21.6 15.4 22 14.7 22 14.2V7.70002Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21.9V14L2.1 9.1M10 14 21.9 7.1M14 19.8V11.7M18 17.5V9.4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Container doesn't support ${type}`);
  return null;
});

Container.displayName = "Container";

Container.metadata = {
  name: "Container",
  category: "stroke/mail",
  tags: ["container", "icon"],
  description: "Container icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Container;
