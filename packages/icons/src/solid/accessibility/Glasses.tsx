import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GlassesProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Glasses: IconComponent<GlassesProps> = React.forwardRef<
  SVGSVGElement,
  GlassesProps
>(function Glasses(
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
          d="M6 19C8.20914 19 10 17.2091 10 15C10 12.7909 8.20914 11 6 11C3.79086 11 2 12.7909 2 15C2 17.2091 3.79086 19 6 19Z"
          fill="currentColor"
        />
        <path
          d="M8.5 15C8.5 13.619 7.381 12.5 6 12.5 4.619 12.5 3.5 13.619 3.5 15 3.5 16.381 4.619 17.5 6 17.5 7.381 17.5 8.5 16.381 8.5 15ZM11.5 15C11.5 18.038 9.038 20.5 6 20.5 2.962 20.5.5 18.038.5 15 .5 11.962 2.962 9.5 6 9.5 9.038 9.5 11.5 11.962 11.5 15ZM18 19C20.209 19 22 17.209 22 15 22 12.791 20.209 11 18 11 15.791 11 14 12.791 14 15 14 17.209 15.791 19 18 19Z"
          fill="currentColor"
        />
        <path
          d="M20.5 15C20.5 13.6193 19.3807 12.5 18 12.5C16.6193 12.5 15.5 13.6193 15.5 15C15.5 16.3807 16.6193 17.5 18 17.5C19.3807 17.5 20.5 16.3807 20.5 15ZM23.5 15C23.5 18.0376 21.0376 20.5 18 20.5C14.9624 20.5 12.5 18.0376 12.5 15C12.5 11.9624 14.9624 9.5 18 9.5C21.0376 9.5 23.5 11.9624 23.5 15Z"
          fill="currentColor"
        />
        <path
          d="M12.5 15C12.5 14.867 12.447 14.74 12.354 14.647 12.26 14.553 12.133 14.5 12 14.5 11.867 14.5 11.74 14.553 11.647 14.647 11.553 14.74 11.5 14.867 11.5 15 11.5 15.828 10.828 16.5 10 16.5 9.172 16.5 8.5 15.828 8.5 15 8.5 14.072 8.869 13.182 9.525 12.525 10.182 11.869 11.072 11.5 12 11.5 12.928 11.5 13.818 11.869 14.475 12.525 15.131 13.182 15.5 14.072 15.5 15 15.5 15.828 14.828 16.5 14 16.5 13.172 16.5 12.5 15.828 12.5 15ZM8 3.5C8.828 3.5 9.5 4.172 9.5 5 9.5 5.828 8.828 6.5 8 6.5 7.434 6.5 7.192 6.618 7.047 6.725 6.866 6.857 6.653 7.105 6.352 7.656L3.885 13.577C3.566 14.342 2.688 14.703 1.923 14.385 1.158 14.066.797 13.188 1.115 12.423L3.615 6.423C3.634 6.377 3.656 6.333 3.68 6.289 4.062 5.58 4.541 4.839 5.278 4.301 6.058 3.732 6.966 3.5 8 3.5ZM16 3.5C17.002 3.5 17.896 3.741 18.669 4.29 19.318 4.751 19.789 5.365 20.165 6.011L20.32 6.289 20.385 6.423 22.885 12.423C23.203 13.188 22.842 14.066 22.077 14.385 21.313 14.703 20.434 14.342 20.115 13.577L17.646 7.649C17.363 7.136 17.132 6.878 16.932 6.735 16.755 6.61 16.498 6.5 16 6.5 15.172 6.5 14.5 5.828 14.5 5 14.5 4.172 15.172 3.5 16 3.5Z"
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
          d="M6 19C8.209 19 10 17.209 10 15 10 12.791 8.209 11 6 11 3.791 11 2 12.791 2 15 2 17.209 3.791 19 6 19ZM18 19C20.209 19 22 17.209 22 15 22 12.791 20.209 11 18 11 15.791 11 14 12.791 14 15 14 17.209 15.791 19 18 19ZM14 15C14 14.47 13.789 13.961 13.414 13.586 13.039 13.211 12.53 13 12 13 11.47 13 10.961 13.211 10.586 13.586 10.211 13.961 10 14.47 10 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 13 5 7C5.7 5.7 6.4 5 8 5M21.5 13 19 7C18.3 5.7 17.5 5 16 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Glasses doesn't support ${type}`);
  return null;
});

Glasses.displayName = "Glasses";

Glasses.metadata = {
  name: "Glasses",
  category: "solid/accessibility",
  tags: ["glasses", "icon"],
  description: "Glasses icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Glasses;
