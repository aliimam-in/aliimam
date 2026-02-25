/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KanbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kanban = React.forwardRef<SVGSVGElement, KanbanProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
Kanban.displayName = "Kanban";
export const KanbanMetadata = { 
  id: "kanban", 
  baseId: "kanban", 
  variant: "default", 
  name: "Kanban", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Kanban;
