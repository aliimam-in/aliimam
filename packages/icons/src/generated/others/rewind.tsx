/**
 * Auto-generated logo component: Rewind (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindLogo = React.forwardRef<SVGSVGElement, RewindLogoProps>(
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
      <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />
    </svg>
  )
);

RewindLogo.displayName = "RewindLogo";

export const RewindLogoMetadata = {
  id: "rewind",
  baseId: "rewind",
  variant: "default",
  name: "Rewind",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindLogo;
