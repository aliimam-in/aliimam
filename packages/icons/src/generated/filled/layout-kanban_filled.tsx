/**
 * Auto-generated logo component: Layout Kanban (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutKanbanFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutKanbanFilledLogo = React.forwardRef<SVGSVGElement, LayoutKanbanFilledLogoProps>(
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
      <path d="M10 3a1 1 0 0 1 0 2h-6a1 1 0 1 1 0 -2z" />
  <path d="M20 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" />
  <path d="M8 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
  <path d="M18 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

LayoutKanbanFilledLogo.displayName = "LayoutKanbanFilledLogo";

export const LayoutKanbanFilledLogoMetadata = {
  id: "layout-kanban_filled",
  baseId: "layout-kanban",
  variant: "filled",
  name: "Layout Kanban",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutKanbanFilledLogo;
