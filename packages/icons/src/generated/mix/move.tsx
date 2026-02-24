/**
 * Auto-generated logo component: Move (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMoveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMoveLogo = React.forwardRef<SVGSVGElement, MixMoveLogoProps>(
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
      <path d="M12 2v20" />
  <path d="m15 19-3 3-3-3" />
  <path d="m19 9 3 3-3 3" />
  <path d="M2 12h20" />
  <path d="m5 9-3 3 3 3" />
  <path d="m9 5 3-3 3 3" />
    </svg>
  )
);

MixMoveLogo.displayName = "MixMoveLogo";

export const MixMoveLogoMetadata = {
  id: "move",
  baseId: "move",
  variant: "default",
  name: "Move",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMoveLogo;
