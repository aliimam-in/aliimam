import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CookieProps extends IconProps {
  type?: "stroke";
}

export const Cookie: IconComponent<CookieProps> = React.forwardRef<
  SVGSVGElement,
  CookieProps
>(function Cookie(
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
          d="M12 2C10.022 2 8.089 2.586 6.444 3.685 4.8 4.784 3.518 6.346 2.761 8.173 2.004 10 1.806 12.011 2.192 13.951 2.578 15.891 3.53 17.673 4.929 19.071 6.327 20.47 8.109 21.422 10.049 21.808 11.989 22.194 14 21.996 15.827 21.239 17.654 20.482 19.216 19.2 20.315 17.556 21.414 15.911 22 13.978 22 12 21.305 12.214 20.565 12.235 19.859 12.059 19.153 11.884 18.509 11.52 17.995 11.006 17.48 10.491 17.116 9.847 16.941 9.141 16.766 8.435 16.786 7.695 17 7 16.305 7.214 15.565 7.234 14.859 7.059 14.153 6.884 13.509 6.52 12.995 6.006 12.48 5.491 12.116 4.847 11.941 4.141 11.766 3.435 11.786 2.695 12 2ZM8.5 8.5V8.51M16 15.5V15.51M12 12V12.01M11 17V17.01M7 14V14.01"
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
          d="M12 2C10.022 2 8.089 2.586 6.444 3.685 4.8 4.784 3.518 6.346 2.761 8.173 2.004 10 1.806 12.011 2.192 13.951 2.578 15.891 3.53 17.673 4.929 19.071 6.327 20.47 8.109 21.422 10.049 21.808 11.989 22.194 14 21.996 15.827 21.239 17.654 20.482 19.216 19.2 20.315 17.556 21.414 15.911 22 13.978 22 12 21.305 12.214 20.565 12.235 19.859 12.059 19.153 11.884 18.509 11.52 17.995 11.006 17.48 10.491 17.116 9.847 16.941 9.141 16.766 8.435 16.786 7.695 17 7 16.305 7.214 15.565 7.234 14.859 7.059 14.153 6.884 13.509 6.52 12.995 6.006 12.48 5.491 12.116 4.847 11.941 4.141 11.766 3.435 11.786 2.695 12 2ZM8.5 8.5V8.51M16 15.5V15.51M12 12V12.01M11 17V17.01M7 14V14.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Cookie doesn't support ${type}`);
  return null;
});

Cookie.displayName = "Cookie";

Cookie.metadata = {
  name: "Cookie",
  category: "stroke/foodBeverage",
  tags: ["cookie", "icon"],
  description: "Cookie icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cookie;
