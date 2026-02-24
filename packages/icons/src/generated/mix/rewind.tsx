/**
 * Auto-generated logo component: Rewind (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixRewindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixRewindLogo = React.forwardRef<SVGSVGElement, MixRewindLogoProps>(
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

MixRewindLogo.displayName = "MixRewindLogo";

export const MixRewindLogoMetadata = {
  id: "rewind",
  baseId: "rewind",
  variant: "default",
  name: "Rewind",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixRewindLogo;
