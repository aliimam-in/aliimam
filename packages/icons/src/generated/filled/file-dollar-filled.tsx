/**
 * Auto-generated logo component: File Dollar Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDollarFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDollarFilledLogo = React.forwardRef<SVGSVGElement, FileDollarFilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm0 8a1 1 0 0 0 -1 1v.05a2.5 2.5 0 0 0 .5 4.95h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h1a1 1 0 0 0 2 0v-.05a2.5 2.5 0 0 0 -.5 -4.95h-1a.5 .5 0 1 1 0 -1h2.5a1 1 0 0 0 0 -2h-1a1 1 0 0 0 -1 -1" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);

FileDollarFilledLogo.displayName = "FileDollarFilledLogo";

export const FileDollarFilledLogoMetadata = {
  id: "file-dollar-filled",
  baseId: "file-dollar-filled",
  variant: "default",
  name: "File Dollar Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDollarFilledLogo;
