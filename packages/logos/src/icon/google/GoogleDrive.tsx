import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GoogleDrive: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GoogleDrive(
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
      <g clipPath="url(#undefined-clip0_2062_2736)">
        <path
          d="M1.81443 18.9981L2.87285 20.7885C3.09278 21.1654 3.40893 21.4616 3.78007 21.677L7.56014 15.2693H0C0 15.6866 0.109966 16.1039 0.329897 16.4808L1.81443 18.9981Z"
          fill="#0066da"
        />
        <path
          d="M12 7.73081L8.21993 1.32312C7.8488 1.5385 7.53265 1.83466 7.31271 2.21158L0.329897 14.0577C0.11401 14.4265 0.00028744 14.8442 0 15.2693H7.56014L12 7.73081Z"
          fill="#00ac47"
        />
        <path
          d="M20.22 21.677C20.5911 21.4616 20.9072 21.1654 21.1272 20.7885L21.567 20.0481L23.6701 16.4808C23.8901 16.1039 24 15.6866 24 15.2693H16.4393L18.0481 18.3654L20.22 21.677Z"
          fill="#ea4335"
        />
        <path
          d="M12 7.73077L15.78 1.32308C15.4089 1.10769 14.9828 1 14.5429 1H9.45702C9.01716 1 8.59104 1.12115 8.21991 1.32308L12 7.73077Z"
          fill="#00832d"
        />
        <path
          d="M16.4399 15.2693H7.56016L3.78009 21.677C4.15122 21.8924 4.57734 22.0001 5.0172 22.0001H18.9828C19.4227 22.0001 19.8488 21.8789 20.22 21.677L16.4399 15.2693Z"
          fill="#2684fc"
        />
        <path
          d="M20.1787 8.13466L16.6873 2.21158C16.4674 1.83466 16.1512 1.5385 15.7801 1.32312L12 7.73081L16.4399 15.2693H23.9863C23.9863 14.852 23.8763 14.4347 23.6564 14.0577L20.1787 8.13466Z"
          fill="#ffba00"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2736">
          <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

GoogleDrive.displayName = "GoogleDrive";

GoogleDrive.metadata = {
  name: "GoogleDrive",
  category: "icon/google",
  tags: ["google", "drive", "icon"],
  description: "GoogleDrive icon from icon/google category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GoogleDrive;
