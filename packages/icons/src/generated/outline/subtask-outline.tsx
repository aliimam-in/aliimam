/**
 * Auto-generated logo component: Subtask Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubtaskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubtaskOutlineLogo = React.forwardRef<SVGSVGElement, SubtaskOutlineLogoProps>(
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
      <path d="M6 9l6 0" />
  <path d="M4 5l4 0" />
  <path d="M6 5v11a1 1 0 0 0 1 1h5" />
  <path d="M12 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M12 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -2" />
    </svg>
  )
);

SubtaskOutlineLogo.displayName = "SubtaskOutlineLogo";

export const SubtaskOutlineLogoMetadata = {
  id: "subtask-outline",
  baseId: "subtask-outline",
  variant: "default",
  name: "Subtask Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubtaskOutlineLogo;
