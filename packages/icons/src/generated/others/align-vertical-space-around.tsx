/**
 * Auto-generated logo component: Align Vertical Space Around (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignVerticalSpaceAroundLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignVerticalSpaceAroundLogo = React.forwardRef<SVGSVGElement, AlignVerticalSpaceAroundLogoProps>(
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
      <rect width="10" height="6" x="7" y="9" rx="2" />
  <path d="M22 20H2" />
  <path d="M22 4H2" />
    </svg>
  )
);

AlignVerticalSpaceAroundLogo.displayName = "AlignVerticalSpaceAroundLogo";

export const AlignVerticalSpaceAroundLogoMetadata = {
  id: "align-vertical-space-around",
  baseId: "align-vertical-space-around",
  variant: "default",
  name: "Align Vertical Space Around",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignVerticalSpaceAroundLogo;
