import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface NotepadTextProps extends IconProps {
  type?: "stroke";
}

export const NotepadText: IconComponent<NotepadTextProps> = React.forwardRef<
  SVGSVGElement,
  NotepadTextProps
>(function NotepadText(
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
          d="M8 2V6M12 2V6M16 2V6M18 4H6C4.895 4 4 4.895 4 6V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V6C20 4.895 19.105 4 18 4ZM8 10H14M8 14H16M8 18H13"
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
          d="M8 2V6M12 2V6M16 2V6M18 4H6C4.895 4 4 4.895 4 6V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V6C20 4.895 19.105 4 18 4ZM8 10H14M8 14H16M8 18H13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`NotepadText doesn't support ${type}`);
  return null;
});

NotepadText.displayName = "NotepadText";

NotepadText.metadata = {
  name: "NotepadText",
  category: "stroke/social",
  tags: ["notepad", "text", "icon"],
  description: "NotepadText icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NotepadText;
