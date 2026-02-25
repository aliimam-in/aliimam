/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareKanbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareKanban = React.forwardRef<SVGSVGElement, SquareKanbanProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M8 7v7" />
  <path d="M12 7v4" />
  <path d="M16 7v9" />
    </svg>
  )
);
SquareKanban.displayName = "SquareKanban";
export const SquareKanbanMetadata = { id: "square-kanban", baseId: "square-kanban", variant: "default", name: "Square Kanban", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareKanban;
