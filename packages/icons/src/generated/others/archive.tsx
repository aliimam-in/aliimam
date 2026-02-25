/**
 * Auto-generated logo component: Archive (default)
 * Category: others
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="M10 12h4" />
    </svg>
  )
);

ArchiveLogo.displayName = "ArchiveLogo";

export const ArchiveLogoMetadata = {
  id: "archive",
  baseId: "archive",
  variant: "default",
  name: "Archive",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArchiveLogo;
