/**
 * Auto-generated logo component: Apple Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AppleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AppleOutlineLogo = React.forwardRef<SVGSVGElement, AppleOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319" />
  <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
  <path d="M12 7c0 -1.2 .867 -4 3 -4" />
    </svg>
  )
);

AppleOutlineLogo.displayName = "AppleOutlineLogo";

export const AppleOutlineLogoMetadata = {
  id: "apple-outline",
  baseId: "apple-outline",
  variant: "default",
  name: "Apple Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AppleOutlineLogo;
