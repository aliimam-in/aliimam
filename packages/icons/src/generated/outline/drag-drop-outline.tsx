/**
 * Auto-generated logo component: Drag Drop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DragDropOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DragDropOutlineLogo = React.forwardRef<SVGSVGElement, DragDropOutlineLogoProps>(
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
      <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
  <path d="M13 13l9 3l-4 2l-2 4l-3 -9" />
  <path d="M3 3l0 .01" />
  <path d="M7 3l0 .01" />
  <path d="M11 3l0 .01" />
  <path d="M15 3l0 .01" />
  <path d="M3 7l0 .01" />
  <path d="M3 11l0 .01" />
  <path d="M3 15l0 .01" />
    </svg>
  )
);

DragDropOutlineLogo.displayName = "DragDropOutlineLogo";

export const DragDropOutlineLogoMetadata = {
  id: "drag-drop-outline",
  baseId: "drag-drop-outline",
  variant: "default",
  name: "Drag Drop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DragDropOutlineLogo;
