/**
 * Auto-generated logo component: Layout Kanban Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutKanbanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutKanbanOutlineLogo = React.forwardRef<SVGSVGElement, LayoutKanbanOutlineLogoProps>(
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
      <path d="M4 4l6 0" />
  <path d="M14 4l6 0" />
  <path d="M4 10a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M14 10a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
    </svg>
  )
);

LayoutKanbanOutlineLogo.displayName = "LayoutKanbanOutlineLogo";

export const LayoutKanbanOutlineLogoMetadata = {
  id: "layout-kanban-outline",
  baseId: "layout-kanban-outline",
  variant: "default",
  name: "Layout Kanban Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutKanbanOutlineLogo;
