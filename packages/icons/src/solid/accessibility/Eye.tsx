import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EyeProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Eye: IconComponent<EyeProps> = React.forwardRef<
  SVGSVGElement,
  EyeProps
>(function Eye(
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
          d="M12 4.50098C14.2277 4.50109 16.4055 5.16237 18.2569 6.40137C19.9926 7.56312 21.3683 9.184 22.2334 11.0791L22.3994 11.4619L22.4063 11.4785C22.5311 11.8152 22.5312 12.1858 22.4063 12.5225C22.4042 12.5279 22.4016 12.5337 22.3994 12.5391C21.55 14.5984 20.1081 16.3595 18.2569 17.5986C16.4056 18.8376 14.2276 19.4999 12 19.5C9.77219 19.4999 7.59363 18.8378 5.7422 17.5986C3.89089 16.3595 2.44905 14.5985 1.59962 12.5391C1.59739 12.5337 1.59483 12.5279 1.59278 12.5225C1.46784 12.1859 1.46799 11.8151 1.59278 11.4785L1.59962 11.4619C2.44901 9.4024 3.89086 7.64056 5.7422 6.40137C7.59359 5.16232 9.77225 4.50105 12 4.50098ZM12 8.5C10.067 8.5 8.50001 10.067 8.50001 12C8.50001 13.933 10.067 15.5 12 15.5C13.933 15.4999 15.5 13.933 15.5 12C15.5 10.067 13.933 8.50005 12 8.5Z"
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
          d="M2.062 12.348C1.97866 12.1235 1.97866 11.8765 2.062 11.652C2.8737 9.68385 4.25152 8.00103 6.02077 6.81689C7.79003 5.63275 9.87105 5.00061 12 5.00061C14.129 5.00061 16.21 5.63275 17.9792 6.81689C19.7485 8.00103 21.1263 9.68385 21.938 11.652C22.0213 11.8765 22.0213 12.1235 21.938 12.348C21.1263 14.3161 19.7485 15.999 17.9792 17.1831C16.21 18.3672 14.129 18.9994 12 18.9994C9.87105 18.9994 7.79003 18.3672 6.02077 17.1831C4.25152 15.999 2.8737 14.3161 2.062 12.348Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Eye doesn't support ${type}`);
  return null;
});

Eye.displayName = "Eye";

Eye.metadata = {
  name: "Eye",
  category: "solid/accessibility",
  tags: ["eye", "icon"],
  description: "Eye icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Eye;
