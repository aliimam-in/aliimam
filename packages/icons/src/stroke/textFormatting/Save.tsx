import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SaveProps extends IconProps {
  type?: "stroke";
}

export const Save: IconComponent<SaveProps> = React.forwardRef<
  SVGSVGElement,
  SaveProps
>(function Save(
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
          d="M15.2 3C15.7275 3.00751 16.2307 3.22317 16.6 3.6L20.4 7.4C20.7768 7.76926 20.9925 8.27246 21 8.8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15.2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21V14C17 13.735 16.895 13.48 16.707 13.293 16.52 13.105 16.265 13 16 13H8C7.735 13 7.48 13.105 7.293 13.293 7.105 13.48 7 13.735 7 14V21M7 3V7C7 7.265 7.105 7.52 7.293 7.707 7.48 7.895 7.735 8 8 8H15"
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
          d="M15.2 3C15.7275 3.00751 16.2307 3.22317 16.6 3.6L20.4 7.4C20.7768 7.76926 20.9925 8.27246 21 8.8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15.2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21V14C17 13.735 16.895 13.48 16.707 13.293 16.52 13.105 16.265 13 16 13H8C7.735 13 7.48 13.105 7.293 13.293 7.105 13.48 7 13.735 7 14V21M7 3V7C7 7.265 7.105 7.52 7.293 7.707 7.48 7.895 7.735 8 8 8H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Save doesn't support ${type}`);
  return null;
});

Save.displayName = "Save";

Save.metadata = {
  name: "Save",
  category: "stroke/textFormatting",
  tags: ["save", "icon"],
  description: "Save icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Save;
