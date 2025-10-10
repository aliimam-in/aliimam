import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Redo2Props extends IconProps {
  type?: "stroke";
}

export const Redo2: IconComponent<Redo2Props> = React.forwardRef<
  SVGSVGElement,
  Redo2Props
>(function Redo2(
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
          d="M15 14L20 9L15 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 9H9.5C8.04131 9 6.64236 9.57946 5.61091 10.6109C4.57946 11.6424 4 13.0413 4 14.5C4 15.2223 4.14226 15.9375 4.41866 16.6048C4.69506 17.272 5.10019 17.8784 5.61091 18.3891C6.64236 19.4205 8.04131 20 9.5 20H13"
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
          d="M15 14L20 9L15 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 9H9.5C8.04131 9 6.64236 9.57946 5.61091 10.6109C4.57946 11.6424 4 13.0413 4 14.5C4 15.2223 4.14226 15.9375 4.41866 16.6048C4.69506 17.272 5.10019 17.8784 5.61091 18.3891C6.64236 19.4205 8.04131 20 9.5 20H13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Redo2 doesn't support ${type}`);
  return null;
});

Redo2.displayName = "Redo2";

Redo2.metadata = {
  name: "Redo2",
  category: "stroke/textFormatting",
  tags: ["redo", "icon"],
  description: "Redo2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Redo2;
