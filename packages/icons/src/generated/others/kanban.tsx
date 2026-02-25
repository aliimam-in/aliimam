/**
 * Auto-generated logo component: Kanban (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KanbanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KanbanLogo = React.forwardRef<SVGSVGElement, KanbanLogoProps>(
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
      <path d="M5 3v14" />
  <path d="M12 3v8" />
  <path d="M19 3v18" />
    </svg>
  )
);

KanbanLogo.displayName = "KanbanLogo";

export const KanbanLogoMetadata = {
  id: "kanban",
  baseId: "kanban",
  variant: "default",
  name: "Kanban",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KanbanLogo;
