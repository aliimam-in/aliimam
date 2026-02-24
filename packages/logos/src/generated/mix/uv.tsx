/**
 * Auto-generated logo component: Uv (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UvLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const UvLogo = React.forwardRef<SVGSVGElement, UvLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 41 41"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M-5.28619e-06 0.168629L0.0843098 20.1685L0.151762 36.1683C0.161075 38.3774 1.95947 40.1607 4.16859 40.1514L20.1684 40.084L30.1684 40.0418L31.1852 40.0375C33.3877 40.0282 35.1683 38.2026 35.1683 36V36L37.0003 36L37.0003 39.9992L40.1683 39.9996L39.9996 -9.94653e-07L21.5998 0.0775689L21.6774 16.0185L21.6774 25.9998L20.0774 25.9998L18.3998 25.9998L18.4774 16.032L18.3998 0.0910593L-5.28619e-06 0.168629Z" fill="#DE5FE9" />
    </svg>
  )
);

UvLogo.displayName = "UvLogo";

export const UvLogoMetadata = {
  id: "uv",
  baseId: "uv",
  variant: "default",
  name: "Uv",
  category: "mix",
  tags: [],
  viewBox: "0 0 41 41",
} as const;

export default UvLogo;
