/**
 * Auto-generated logo component: Import (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImportLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImportLogo = React.forwardRef<SVGSVGElement, ImportLogoProps>(
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
      <path d="M12 3v12" />
  <path d="m8 11 4 4 4-4" />
  <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
);

ImportLogo.displayName = "ImportLogo";

export const ImportLogoMetadata = {
  id: "import",
  baseId: "import",
  variant: "default",
  name: "Import",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImportLogo;
