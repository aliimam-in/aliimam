import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ActivityProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Activity: IconComponent<ActivityProps> = React.forwardRef<
  SVGSVGElement,
  ActivityProps
>(function Activity(
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
        <g clipPath="url(#undefined-clip0_70_4347)">
          <path
            d="M9 0.5C9.33132 0.5 9.65496 0.593819 9.93359 0.769531L10.0498 0.849609L10.1602 0.939453C10.3715 1.12653 10.5341 1.36229 10.6348 1.62598L10.6797 1.75977L10.6836 1.77441L14.999 17.1299L16.1455 13.0537C16.3521 12.3178 16.7947 11.6702 17.4043 11.209C18.0133 10.7483 18.756 10.4992 19.5195 10.5H22C22.8284 10.5 23.5 11.1716 23.5 12C23.5 12.8284 22.8284 13.5 22 13.5H19.5166C19.4074 13.4998 19.301 13.5357 19.2139 13.6016C19.1269 13.6675 19.0636 13.7601 19.0342 13.8652V13.8662L16.6836 22.2256C16.6823 22.2303 16.6811 22.2355 16.6797 22.2402C16.5736 22.6036 16.3526 22.9233 16.0498 23.1504C15.7469 23.3774 15.3785 23.5 15 23.5C14.6215 23.5 14.2531 23.3774 13.9502 23.1504C13.6474 22.9233 13.4264 22.6036 13.3203 22.2402C13.3189 22.2355 13.3177 22.2303 13.3164 22.2256L9 6.86914L7.85449 10.9463C7.64867 11.6793 7.20863 12.3253 6.60254 12.7861C5.99618 13.2471 5.25586 13.4978 4.49414 13.5H2C1.17157 13.5 0.5 12.8284 0.5 12C0.5 11.1716 1.17157 10.5 2 10.5H4.48535C4.59415 10.4997 4.7005 10.4643 4.78711 10.3984C4.87374 10.3326 4.93644 10.2396 4.96582 10.1348V10.1338L7.31641 1.77441L7.32031 1.75977C7.42637 1.39639 7.64736 1.07673 7.9502 0.849609L8.06641 0.769531C8.34504 0.593819 8.66868 0.5 9 0.5Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_70_4347">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
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
          d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
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
          d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Activity doesn't support ${type}`);
  return null;
});

Activity.displayName = "Activity";

Activity.metadata = {
  name: "Activity",
  category: "solid/accountsAccess",
  tags: ["activity", "icon"],
  description: "Activity icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Activity;
