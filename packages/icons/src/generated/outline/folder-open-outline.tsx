/**
 * Auto-generated logo component: Folder Open Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderOpenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderOpenOutlineLogo = React.forwardRef<SVGSVGElement, FolderOpenOutlineLogoProps>(
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
      <path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

FolderOpenOutlineLogo.displayName = "FolderOpenOutlineLogo";

export const FolderOpenOutlineLogoMetadata = {
  id: "folder-open-outline",
  baseId: "folder-open-outline",
  variant: "default",
  name: "Folder Open Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderOpenOutlineLogo;
