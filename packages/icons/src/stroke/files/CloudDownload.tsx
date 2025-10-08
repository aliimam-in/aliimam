import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CloudDownloadProps extends IconProps {
  type?: "stroke";
}

export const CloudDownload: IconComponent<CloudDownloadProps> =
  React.forwardRef<SVGSVGElement, CloudDownloadProps>(function CloudDownload(
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
            d="M12 13V21L8 17M12 21 16 17"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.393 15.2691C3.57626 14.5546 2.93682 13.66 2.52517 12.656C2.11351 11.6519 1.94092 10.566 2.02102 9.48378C2.10112 8.4016 2.43172 7.35286 2.98671 6.42038C3.5417 5.4879 4.30588 4.69721 5.21891 4.11077C6.13194 3.52433 7.1688 3.15818 8.24763 3.04125C9.32645 2.92432 10.4177 3.0598 11.4352 3.437C12.4526 3.8142 13.3685 4.42279 14.1104 5.2147C14.8523 6.00662 15.3999 6.96017 15.71 8.00006H17.5C18.4721 7.99994 19.418 8.31458 20.1964 8.89691C20.9747 9.47925 21.5435 10.298 21.8178 11.2305C22.092 12.1631 22.0569 13.1594 21.7177 14.0704C21.3785 14.9813 20.7534 15.758 19.936 16.2841"
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
            d="M12 13V21L8 17M12 21 16 17"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.39303 15.2691C3.57629 14.5546 2.93685 13.66 2.5252 12.656C2.11354 11.6519 1.94095 10.566 2.02105 9.48378C2.10115 8.4016 2.43175 7.35286 2.98674 6.42038C3.54173 5.4879 4.30591 4.69721 5.21894 4.11077C6.13197 3.52433 7.16883 3.15818 8.24766 3.04125C9.32648 2.92432 10.4177 3.0598 11.4352 3.437C12.4527 3.8142 13.3685 4.42279 14.1104 5.2147C14.8523 6.00662 15.3999 6.96017 15.71 8.00006H17.5C18.4721 7.99994 19.4181 8.31458 20.1964 8.89691C20.9747 9.47925 21.5436 10.298 21.8178 11.2305C22.092 12.1631 22.0569 13.1594 21.7177 14.0704C21.3785 14.9813 20.7534 15.758 19.936 16.2841"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`CloudDownload doesn't support ${type}`);
    return null;
  });

CloudDownload.displayName = "CloudDownload";

CloudDownload.metadata = {
  name: "CloudDownload",
  category: "stroke/files",
  tags: ["cloud", "download", "icon"],
  description: "CloudDownload icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudDownload;
