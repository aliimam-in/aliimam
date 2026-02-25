/**
 * Auto-generated logo component: Xbox B Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XboxBFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XboxBFilledLogo = React.forwardRef<SVGSVGElement, XboxBFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m1 5h-3a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235 -5a3 3 0 0 0 -2.235 -5m0 6a1 1 0 0 1 1 1l-.007 .117a1 1 0 0 1 -.993 .883h-2v-2zm0 -4a1 1 0 0 1 0 2h-2v-2z" />
    </svg>
  )
);

XboxBFilledLogo.displayName = "XboxBFilledLogo";

export const XboxBFilledLogoMetadata = {
  id: "xbox-b-filled",
  baseId: "xbox-b-filled",
  variant: "default",
  name: "Xbox B Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XboxBFilledLogo;
