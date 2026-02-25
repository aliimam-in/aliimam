/**
 * Auto-generated logo component: Man (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ManFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ManFilledLogo = React.forwardRef<SVGSVGElement, ManFilledLogoProps>(
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
      <path d="M15 8c1.628 0 3.2 .787 4.707 2.293a1 1 0 0 1 -1.414 1.414c-.848 -.848 -1.662 -1.369 -2.444 -1.587l-.849 5.944v4.936a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4.929l-.85 -5.951c-.781 .218 -1.595 .739 -2.443 1.587a1 1 0 1 1 -1.414 -1.414c1.506 -1.506 3.08 -2.293 4.707 -2.293z" />
  <path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
    </svg>
  )
);

ManFilledLogo.displayName = "ManFilledLogo";

export const ManFilledLogoMetadata = {
  id: "man_filled",
  baseId: "man",
  variant: "filled",
  name: "Man",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ManFilledLogo;
