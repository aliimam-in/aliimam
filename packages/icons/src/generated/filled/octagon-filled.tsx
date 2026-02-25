/**
 * Auto-generated logo component: Octagon Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctagonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctagonFilledLogo = React.forwardRef<SVGSVGElement, OctagonFilledLogoProps>(
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
      <path d="M15.3 2h-6.6c-.562 0 -1.016 .201 -1.407 .593l-4.7 4.7a1.894 1.894 0 0 0 -.593 1.407v6.6c0 .562 .201 1.016 .593 1.407l4.7 4.7c.391 .392 .845 .593 1.407 .593h6.6c.562 0 1.016 -.201 1.407 -.593l4.7 -4.7c.392 -.391 .593 -.845 .593 -1.407v-6.6c0 -.562 -.201 -1.016 -.593 -1.407l-4.7 -4.7a1.894 1.894 0 0 0 -1.407 -.593z" />
    </svg>
  )
);

OctagonFilledLogo.displayName = "OctagonFilledLogo";

export const OctagonFilledLogoMetadata = {
  id: "octagon-filled",
  baseId: "octagon-filled",
  variant: "default",
  name: "Octagon Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctagonFilledLogo;
