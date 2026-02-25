/**
 * Auto-generated logo component: Square Kanban (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareKanbanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareKanbanLogo = React.forwardRef<SVGSVGElement, SquareKanbanLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M8 7v7" />
  <path d="M12 7v4" />
  <path d="M16 7v9" />
    </svg>
  )
);

SquareKanbanLogo.displayName = "SquareKanbanLogo";

export const SquareKanbanLogoMetadata = {
  id: "square-kanban",
  baseId: "square-kanban",
  variant: "default",
  name: "Square Kanban",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareKanbanLogo;
