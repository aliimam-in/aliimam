import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../types";

interface SaveProps extends IconProps {
  type: "solid" | "stroke";
}

export const Save: IconComponent = React.forwardRef<SVGSVGElement, SaveProps>(
  function Save(
    {
      color = "currentColor",
      fill,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      variant = "stroke",
      type,
      ...props
    },
    forwardedRef,
  ) {
    if (type === "solid") {
      return (
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
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
          <g clipPath="url(#a)">
            <path
              d="M12.741 3.55004L6.80792 0.0831488C6.6174 -0.0282045 6.38232 -0.0282045 6.1918 0.0831488L0.259036 3.55004C0.0988794 3.64364 0 3.81673 0 4.0042V10.9952C0 11.1827 0.0988794 11.3558 0.259036 11.4494L6.19208 14.9163C6.3826 15.0276 6.61768 15.0276 6.8082 14.9163L12.7412 11.4494C12.9014 11.3558 13.0003 11.1827 13.0003 10.9952V4.0042C13.0003 3.81673 12.9014 3.64364 12.7412 3.55004H12.741ZM12.3683 4.28441L6.6408 14.3248C6.60208 14.3925 6.49986 14.3648 6.49986 14.2865V7.71212C6.49986 7.58075 6.43051 7.45925 6.31798 7.39328L0.692713 4.10625C0.625865 4.06706 0.653161 3.9636 0.730594 3.9636H12.1856C12.3482 3.9636 12.4499 4.14205 12.3686 4.28469H12.3683V4.28441Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill={color} d="M0 0H13V15H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    }

    if (type === "stroke") {
      return (
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
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
          <g clipPath="url(#a)">
            <path
              d="M12.741 3.55009L6.80792 0.0831946C6.6174 -0.0281588 6.38232 -0.0281588 6.1918 0.0831946L0.259036 3.55009C0.0988794 3.64368 0 3.81677 0 4.00424V10.9953C0 11.1827 0.0988794 11.3558 0.259036 11.4494L6.19208 14.9163C6.3826 15.0277 6.61768 15.0277 6.8082 14.9163L12.7412 11.4494C12.9014 11.3558 13.0003 11.1827 13.0003 10.9953V4.00424C13.0003 3.81677 12.9014 3.64368 12.7412 3.55009H12.741ZM12.3683 4.28446L6.6408 14.3249C6.60208 14.3925 6.49986 14.3649 6.49986 14.2865V7.71217C6.49986 7.5808 6.43051 7.4593 6.31798 7.39333L0.692713 4.10629C0.625865 4.06711 0.653161 3.96365 0.730594 3.96365H12.1856C12.3482 3.96365 12.4499 4.14209 12.3686 4.28474H12.3683V4.28446Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill={color} d="M0 0H13V15H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    }

    console.error(`Save doesn't support ${type}`);
    return null;
  },
);

Save.displayName = "Save";

Save.metadata = {
  name: "Save",
  category: "ali",
  tags: ["save", "alibaba", "brand", "ecommerce"],
  description: "Save icon from ali category",
  variants: ["solid", "stroke"],
} as IconMetadata;

export default Save;
