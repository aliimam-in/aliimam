/**
 * Auto-generated logo component: Square Dashed Kanban (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareDashedKanbanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareDashedKanbanLogo = React.forwardRef<SVGSVGElement, SquareDashedKanbanLogoProps>(
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
      <path d="M8 7v7" />
  <path d="M12 7v4" />
  <path d="M16 7v9" />
  <path d="M5 3a2 2 0 0 0-2 2" />
  <path d="M9 3h1" />
  <path d="M14 3h1" />
  <path d="M19 3a2 2 0 0 1 2 2" />
  <path d="M21 9v1" />
  <path d="M21 14v1" />
  <path d="M21 19a2 2 0 0 1-2 2" />
  <path d="M14 21h1" />
  <path d="M9 21h1" />
  <path d="M5 21a2 2 0 0 1-2-2" />
  <path d="M3 14v1" />
  <path d="M3 9v1" />
    </svg>
  )
);

SquareDashedKanbanLogo.displayName = "SquareDashedKanbanLogo";

export const SquareDashedKanbanLogoMetadata = {
  id: "square-dashed-kanban",
  baseId: "square-dashed-kanban",
  variant: "default",
  name: "Square Dashed Kanban",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareDashedKanbanLogo;
