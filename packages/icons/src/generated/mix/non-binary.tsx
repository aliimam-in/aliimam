/**
 * Auto-generated logo component: Non Binary (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NonBinaryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NonBinaryLogo = React.forwardRef<SVGSVGElement, NonBinaryLogoProps>(
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
      <path d="M12 2v10" />
  <path d="m8.5 4 7 4" />
  <path d="m8.5 8 7-4" />
  <circle cx="12" cy="17" r="5" />
    </svg>
  )
);

NonBinaryLogo.displayName = "NonBinaryLogo";

export const NonBinaryLogoMetadata = {
  id: "non-binary",
  baseId: "non-binary",
  variant: "default",
  name: "Non Binary",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NonBinaryLogo;
