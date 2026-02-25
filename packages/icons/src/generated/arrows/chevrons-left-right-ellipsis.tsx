/**
 * Auto-generated logo component: Chevrons Left Right Ellipsis (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsLeftRightEllipsisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsLeftRightEllipsisLogo = React.forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisLogoProps>(
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
      <path d="M12 12h.01" />
  <path d="M16 12h.01" />
  <path d="m17 7 5 5-5 5" />
  <path d="m7 7-5 5 5 5" />
  <path d="M8 12h.01" />
    </svg>
  )
);

ChevronsLeftRightEllipsisLogo.displayName = "ChevronsLeftRightEllipsisLogo";

export const ChevronsLeftRightEllipsisLogoMetadata = {
  id: "chevrons-left-right-ellipsis",
  baseId: "chevrons-left-right-ellipsis",
  variant: "default",
  name: "Chevrons Left Right Ellipsis",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsLeftRightEllipsisLogo;
