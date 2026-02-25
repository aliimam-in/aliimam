/**
 * Auto-generated logo component: Archive (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArchiveFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArchiveFilledLogo = React.forwardRef<SVGSVGElement, ArchiveFilledLogoProps>(
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
      <path d="M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
  <path d="M19 9c.513 0 .936 .463 .993 1.06l.007 .14v7.2c0 1.917 -1.249 3.484 -2.824 3.594l-.176 .006h-10c-1.598 0 -2.904 -1.499 -2.995 -3.388l-.005 -.212v-7.2c0 -.663 .448 -1.2 1 -1.2h14zm-5 2h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

ArchiveFilledLogo.displayName = "ArchiveFilledLogo";

export const ArchiveFilledLogoMetadata = {
  id: "archive_filled",
  baseId: "archive",
  variant: "filled",
  name: "Archive",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArchiveFilledLogo;
