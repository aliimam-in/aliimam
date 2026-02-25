/**
 * Auto-generated logo component: Notebook Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotebookOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotebookOffOutlineLogo = React.forwardRef<SVGSVGElement, NotebookOffOutlineLogoProps>(
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
      <path d="M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828a2 2 0 0 1 -1.821 1.172h-11a1 1 0 0 1 -1 -1v-14m4 -1v1m0 4v13" />
  <path d="M13 8h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NotebookOffOutlineLogo.displayName = "NotebookOffOutlineLogo";

export const NotebookOffOutlineLogoMetadata = {
  id: "notebook-off-outline",
  baseId: "notebook-off-outline",
  variant: "default",
  name: "Notebook Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotebookOffOutlineLogo;
