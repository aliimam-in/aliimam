/**
 * Auto-generated logo component: File 3d Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface File3dOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const File3dOutlineLogo = React.forwardRef<SVGSVGElement, File3dOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M12 13.5l4 -1.5" />
  <path d="M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846l-4 1.846" />
  <path d="M8 12v4.2l4 1.8" />
    </svg>
  )
);

File3dOutlineLogo.displayName = "File3dOutlineLogo";

export const File3dOutlineLogoMetadata = {
  id: "file-3d-outline",
  baseId: "file-3d-outline",
  variant: "default",
  name: "File 3d Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default File3dOutlineLogo;
