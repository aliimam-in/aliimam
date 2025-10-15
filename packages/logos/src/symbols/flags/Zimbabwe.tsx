import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Zimbabwe: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Zimbabwe(
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
      <path d="M1 10.8569H31V14.2859H1V10.8569Z" fill="#c4291c" />
      <path d="M1 14.2849H31V17.7139H1V14.2849Z" fill="currentColor" />
      <path d="M1 17.7141H31V21.1431H1V17.7141Z" fill="#c4291c" />
      <path
        d="M1 24C1 24.196 1.03 24.383 1.058 24.572H30.942C30.969 24.384 31 24.196 31 24V21.142H1V24ZM1.058 7.428C1.031 7.616 1 7.804 1 8V10.857H31V8C31 7.804 30.97 7.617 30.942 7.428H1.058Z"
        fill="#f8d548"
      />
      <path
        d="M30.942 24.571H1.058C1.337 26.507 2.987 28 5 28H27C29.014 28 30.663 26.507 30.942 24.571ZM1.058 7.429H30.942C30.663 5.493 29.013 4 27 4H5C2.986 4 1.337 5.493 1.058 7.429Z"
        fill="#2a6318"
      />
      <path
        d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#fff"
      />
      <path
        d="M8.439 16.5689L10.871 14.8019H7.865L6.936 11.9419L6.007 14.8019H3L5.432 16.5689L4.503 19.4279L6.936 17.6609L9.368 19.4279L8.439 16.5689Z"
        fill="#c1291b"
      />
      <path
        d="M9.07197 16.4681C9.06797 16.4271 9.04697 16.3901 9.01497 16.3631C8.49797 15.9581 7.45497 15.1421 6.93797 14.7381C6.92397 14.5701 6.89797 14.2321 6.88397 14.0641C6.88897 13.6011 6.29697 13.2191 5.98297 13.6601C5.75197 13.6231 5.43997 13.7881 5.57597 14.0501C5.64397 14.0601 5.77297 14.0401 5.84297 14.0401C6.07497 14.1451 5.98497 14.6181 6.01197 14.8131L6.02597 15.3221C5.91397 15.5551 5.95697 15.8261 5.98697 16.0721C6.02897 16.5651 5.12997 16.8851 5.51597 17.4131C5.58897 17.6941 5.73397 18.2621 5.80697 18.5441C6.34497 18.6041 7.48297 18.5451 8.04097 18.5651C8.09397 18.5941 8.11597 18.0551 8.13197 18.0441C8.16797 17.4991 8.28997 16.9121 8.80397 16.6121C8.92397 16.6711 9.08597 16.6221 9.07397 16.4681H9.07197Z"
        fill="#f7d347"
      />
    </svg>
  );
});

Zimbabwe.displayName = "Zimbabwe";

Zimbabwe.metadata = {
  name: "Zimbabwe",
  category: "symbols/flags",
  tags: ["zimbabwe", "icon"],
  description: "Zimbabwe icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Zimbabwe;
