/**
 * Auto-generated logo component: X (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const XLogo = React.forwardRef<SVGSVGElement, XLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1200 1227"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
    </svg>
  )
);

XLogo.displayName = "XLogo";

export const XLogoMetadata = {
  id: "x",
  baseId: "x",
  variant: "default",
  name: "X",
  category: "mix",
  tags: [],
  viewBox: "0 0 1200 1227",
} as const;

export default XLogo;
