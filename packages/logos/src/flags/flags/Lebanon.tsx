import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lebanon: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Lebanon(
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
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
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
      <path d="M1 10H31V22H1V10Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V11H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V21L31 21V24C31 26.208 29.208 28 27 28Z"
        fill="#da352e"
      />
      <path
        d="M15.7609 11.4939C15.6279 12.0139 14.8169 12.2559 14.7529 12.6819C15.4349 12.6699 14.2889 13.1539 14.1499 13.3249C14.9669 13.7879 14.0139 13.5749 13.8629 14.0589C13.7389 14.3519 12.3169 14.7229 13.0049 14.9689C13.3119 14.8289 13.8009 14.7749 13.6609 15.2709C13.5169 15.8139 11.6759 16.2059 12.3189 16.7169C12.5539 16.7019 12.7159 16.5099 12.9159 16.4119C13.3579 16.3109 13.3039 16.9499 12.9259 16.9939C11.0919 18.0959 11.2379 18.6639 13.2329 17.5779C14.5499 18.0629 11.5539 18.3089 11.9889 18.7739C12.9049 19.1309 13.9569 17.6749 14.6769 18.4269C15.3579 19.3599 12.4999 20.5469 13.2819 20.4179C13.5919 20.0749 14.1749 20.3069 14.5039 19.9599C14.8129 19.5979 15.5609 19.5049 15.8729 19.8049C15.9689 19.9659 16.3889 20.4069 16.5199 20.2499C16.6049 19.4069 17.5969 20.6279 17.8599 20.4989C17.9229 20.1839 17.3959 20.0929 17.2459 19.8489C16.7689 19.5469 16.4539 17.9049 17.2929 18.0609C17.8639 18.4709 18.5549 18.1839 19.1849 18.3489C19.4799 18.4159 20.5789 19.3919 20.3209 18.6069C20.0299 18.0799 18.5559 17.9329 18.8209 17.3069C19.0609 17.0199 20.3589 17.9389 19.8179 17.2049C19.3289 16.9239 19.0159 16.2489 18.3669 16.3439C18.2459 15.9189 19.0519 16.1659 19.3039 16.0749C19.7959 16.1259 19.4449 15.7239 19.1369 15.7499C18.0969 15.5749 18.1269 15.1579 19.1809 15.4269C19.5059 15.0709 16.5319 13.9159 17.4979 13.7009C18.5129 14.0839 18.4149 13.8369 17.6119 13.3469C17.4669 13.2229 17.7349 13.1689 17.8269 13.2159C18.0679 12.4759 15.7979 12.5859 15.7599 11.4969L15.7609 11.4939Z"
        fill="#4aa25a"
      />
    </svg>
  );
});

Lebanon.displayName = "Lebanon";

Lebanon.metadata = {
  name: "Lebanon",
  category: "flags/flags",
  tags: ["lebanon", "icon"],
  description: "Lebanon icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lebanon;
