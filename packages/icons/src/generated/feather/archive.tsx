/**
 * Auto-generated logo component: Archive (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArchiveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArchiveLogo = React.forwardRef<SVGSVGElement, ArchiveLogoProps>(
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
      <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  )
);

ArchiveLogo.displayName = "ArchiveLogo";

export const ArchiveLogoMetadata = {
  id: "archive",
  baseId: "archive",
  variant: "default",
  name: "Archive",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArchiveLogo;
