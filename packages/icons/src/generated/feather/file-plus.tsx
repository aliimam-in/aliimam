/**
 * Auto-generated logo component: File Plus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilePlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilePlusLogo = React.forwardRef<SVGSVGElement, FilePlusLogoProps>(
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
    </svg>
  )
);

FilePlusLogo.displayName = "FilePlusLogo";

export const FilePlusLogoMetadata = {
  id: "file-plus",
  baseId: "file-plus",
  variant: "default",
  name: "File Plus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilePlusLogo;
