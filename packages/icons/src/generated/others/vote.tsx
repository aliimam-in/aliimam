/**
 * Auto-generated logo component: Vote (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VoteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VoteLogo = React.forwardRef<SVGSVGElement, VoteLogoProps>(
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
      <path d="m9 12 2 2 4-4" />
  <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
  <path d="M22 19H2" />
    </svg>
  )
);

VoteLogo.displayName = "VoteLogo";

export const VoteLogoMetadata = {
  id: "vote",
  baseId: "vote",
  variant: "default",
  name: "Vote",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VoteLogo;
