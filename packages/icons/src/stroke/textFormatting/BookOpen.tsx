import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookOpenProps extends IconProps {
  type?: "stroke";
}

export const BookOpen: IconComponent<BookOpenProps> = React.forwardRef<
  SVGSVGElement,
  BookOpenProps
>(function BookOpen(
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
          d="M12 7V21M3 18C2.735 18 2.48 17.895 2.293 17.707 2.105 17.52 2 17.265 2 17V4C2 3.735 2.105 3.48 2.293 3.293 2.48 3.105 2.735 3 3 3H8C9.061 3 10.078 3.421 10.828 4.172 11.579 4.922 12 5.939 12 7 12 5.939 12.421 4.922 13.172 4.172 13.922 3.421 14.939 3 16 3H21C21.265 3 21.52 3.105 21.707 3.293 21.895 3.48 22 3.735 22 4V17C22 17.265 21.895 17.52 21.707 17.707 21.52 17.895 21.265 18 21 18H15C14.204 18 13.441 18.316 12.879 18.879 12.316 19.441 12 20.204 12 21 12 20.204 11.684 19.441 11.121 18.879 10.559 18.316 9.796 18 9 18H3Z"
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
          d="M12 7V21M3 18C2.735 18 2.48 17.895 2.293 17.707 2.105 17.52 2 17.265 2 17V4C2 3.735 2.105 3.48 2.293 3.293 2.48 3.105 2.735 3 3 3H8C9.061 3 10.078 3.421 10.828 4.172 11.579 4.922 12 5.939 12 7 12 5.939 12.421 4.922 13.172 4.172 13.922 3.421 14.939 3 16 3H21C21.265 3 21.52 3.105 21.707 3.293 21.895 3.48 22 3.735 22 4V17C22 17.265 21.895 17.52 21.707 17.707 21.52 17.895 21.265 18 21 18H15C14.204 18 13.441 18.316 12.879 18.879 12.316 19.441 12 20.204 12 21 12 20.204 11.684 19.441 11.121 18.879 10.559 18.316 9.796 18 9 18H3Z"
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
          d="M12 7V21M3 18C2.735 18 2.48 17.895 2.293 17.707 2.105 17.52 2 17.265 2 17V4C2 3.735 2.105 3.48 2.293 3.293 2.48 3.105 2.735 3 3 3H8C9.061 3 10.078 3.421 10.828 4.172 11.579 4.922 12 5.939 12 7 12 5.939 12.421 4.922 13.172 4.172 13.922 3.421 14.939 3 16 3H21C21.265 3 21.52 3.105 21.707 3.293 21.895 3.48 22 3.735 22 4V17C22 17.265 21.895 17.52 21.707 17.707 21.52 17.895 21.265 18 21 18H15C14.204 18 13.441 18.316 12.879 18.879 12.316 19.441 12 20.204 12 21 12 20.204 11.684 19.441 11.121 18.879 10.559 18.316 9.796 18 9 18H3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookOpen doesn't support ${type}`);
  return null;
});

BookOpen.displayName = "BookOpen";

BookOpen.metadata = {
  name: "BookOpen",
  category: "stroke/textFormatting",
  tags: ["book", "open", "icon"],
  description: "BookOpen icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookOpen;
