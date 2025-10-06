import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MoonProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Moon: IconComponent<MoonProps> = React.forwardRef<
  SVGSVGElement,
  MoonProps
>(function Moon(
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
          d="M20.985 12.486C20.8913 14.2221 20.2967 15.894 19.2731 17.2994C18.2495 18.7048 16.8407 19.7837 15.217 20.4055C13.5934 21.0274 11.8243 21.1656 10.1238 20.8035C8.42322 20.4414 6.86396 19.5945 5.63446 18.3652C4.40497 17.1358 3.55789 15.5766 3.19562 13.8761C2.83335 12.1756 2.9714 10.4065 3.59308 8.78282C4.21476 7.15909 5.29346 5.75019 6.69878 4.72644C8.10409 3.70269 9.77587 3.10791 11.512 3.014C11.917 2.992 12.129 3.474 11.914 3.817C11.1949 4.96756 10.887 6.32787 11.0405 7.67595C11.194 9.02403 11.7999 10.2803 12.7593 11.2397C13.7187 12.1991 14.975 12.805 16.3231 12.9585C17.6711 13.112 19.0314 12.8041 20.182 12.085C20.526 11.87 21.007 12.081 20.985 12.486Z"
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
          d="M20.985 12.486C20.8913 14.2221 20.2967 15.894 19.2731 17.2994C18.2495 18.7048 16.8407 19.7837 15.217 20.4055C13.5934 21.0274 11.8243 21.1656 10.1238 20.8035C8.42322 20.4414 6.86396 19.5945 5.63446 18.3651C4.40497 17.1358 3.55789 15.5766 3.19562 13.8761C2.83335 12.1756 2.9714 10.4065 3.59308 8.78279C4.21476 7.15906 5.29346 5.75016 6.69878 4.72641C8.10409 3.70265 9.77587 3.10788 11.512 3.01397C11.917 2.99197 12.129 3.47397 11.914 3.81697C11.1949 4.96753 10.887 6.32784 11.0405 7.67592C11.194 9.024 11.7999 10.2803 12.7593 11.2396C13.7187 12.199 14.975 12.805 16.3231 12.9585C17.6711 13.112 19.0314 12.8041 20.182 12.085C20.526 11.87 21.007 12.081 20.985 12.486Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Moon doesn't support ${type}`);
  return null;
});

Moon.displayName = "Moon";

Moon.metadata = {
  name: "Moon",
  category: "solid/accessibility",
  tags: ["moon", "icon"],
  description: "Moon icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon;
