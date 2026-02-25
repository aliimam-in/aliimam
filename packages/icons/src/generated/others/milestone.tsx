/**
 * Auto-generated logo component: Milestone (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilestoneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MilestoneLogo = React.forwardRef<SVGSVGElement, MilestoneLogoProps>(
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
      <path d="M12 13v8" />
  <path d="M12 3v3" />
  <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" />
    </svg>
  )
);

MilestoneLogo.displayName = "MilestoneLogo";

export const MilestoneLogoMetadata = {
  id: "milestone",
  baseId: "milestone",
  variant: "default",
  name: "Milestone",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MilestoneLogo;
