import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SunDimProps extends IconProps {
  type?: "solid" | "stroke";
}

export const SunDim: IconComponent<SunDimProps> = React.forwardRef<
  SVGSVGElement,
  SunDimProps
>(function SunDim(
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12.01 2.5C12.838 2.5 13.51 3.172 13.51 4 13.51 4.828 12.838 5.5 12.01 5.5H12C11.172 5.5 10.5 4.828 10.5 4 10.5 3.172 11.172 2.5 12 2.5H12.01ZM20.01 10.5C20.838 10.5 21.51 11.172 21.51 12 21.51 12.828 20.838 13.5 20.01 13.5H20C19.172 13.5 18.5 12.828 18.5 12 18.5 11.172 19.172 10.5 20 10.5H20.01ZM12.01 18.5C12.838 18.5 13.51 19.172 13.51 20 13.51 20.828 12.838 21.5 12.01 21.5H12C11.172 21.5 10.5 20.828 10.5 20 10.5 19.172 11.172 18.5 12 18.5H12.01ZM4.01 10.5C4.838 10.5 5.51 11.172 5.51 12 5.51 12.828 4.838 13.5 4.01 13.5H4C3.172 13.5 2.5 12.828 2.5 12 2.5 11.172 3.172 10.5 4 10.5H4.01ZM17.667 4.843C18.495 4.843 19.167 5.515 19.167 6.343 19.167 7.171 18.495 7.843 17.667 7.843H17.657C16.829 7.843 16.157 7.171 16.157 6.343 16.157 5.515 16.829 4.843 17.657 4.843H17.667ZM17.667 16.157C18.495 16.157 19.167 16.829 19.167 17.657 19.167 18.485 18.495 19.157 17.667 19.157H17.657C16.829 19.157 16.157 18.485 16.157 17.657 16.157 16.829 16.829 16.157 17.657 16.157H17.667ZM6.353 16.157C7.181 16.157 7.853 16.829 7.853 17.657 7.853 18.485 7.181 19.157 6.353 19.157H6.343C5.515 19.157 4.843 18.485 4.843 17.657 4.843 16.829 5.515 16.157 6.343 16.157H6.353ZM6.353 4.843C7.181 4.843 7.853 5.515 7.853 6.343 7.853 7.171 7.181 7.843 6.353 7.843H6.343C5.515 7.843 4.843 7.171 4.843 6.343 4.843 5.515 5.515 4.843 6.343 4.843H6.353Z"
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 4H12.01M20 12H20.01M12 20H12.01M4 12H4.01M17.657 6.343H17.667M17.657 17.657H17.667M6.343 17.657H6.353M6.343 6.343H6.353"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SunDim doesn't support ${type}`);
  return null;
});

SunDim.displayName = "SunDim";

SunDim.metadata = {
  name: "SunDim",
  category: "solid/accessibility",
  tags: ["sun", "dim", "icon"],
  description: "SunDim icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunDim;
