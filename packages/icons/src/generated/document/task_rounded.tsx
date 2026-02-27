/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TaskRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TaskRounded = React.forwardRef<SVGSVGElement, TaskRoundedProps>(
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
      <path d="M11 19.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 5.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5.5L4 6.5L7 3.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.5L4 13.5L7 10.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19.5L4 20.5L7 17.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TaskRounded.displayName = "TaskRounded";
export const TaskRoundedMetadata = { 
  id: "task_rounded", 
  baseId: "task", 
  variant: "rounded", 
  name: "Task", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TaskRounded;
