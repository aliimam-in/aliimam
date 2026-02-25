/**
 * Auto-generated logo component: World Upload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldUploadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldUploadOutlineLogo = React.forwardRef<SVGSVGElement, WorldUploadOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -9 9" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h8.4" />
  <path d="M11.578 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
  <path d="M18 21v-7m3 3l-3 -3l-3 3" />
    </svg>
  )
);

WorldUploadOutlineLogo.displayName = "WorldUploadOutlineLogo";

export const WorldUploadOutlineLogoMetadata = {
  id: "world-upload-outline",
  baseId: "world-upload-outline",
  variant: "default",
  name: "World Upload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldUploadOutlineLogo;
