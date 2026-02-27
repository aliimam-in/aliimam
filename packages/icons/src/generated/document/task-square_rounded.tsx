/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TaskSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TaskSquareRounded = React.forwardRef<SVGSVGElement, TaskSquareRoundedProps>(
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
      <path d="M12.37 8.88H17.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38 8.88L7.13 9.63L9.38 7.38" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.37 15.88H17.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38 15.88L7.13 16.63L9.38 14.38" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TaskSquareRounded.displayName = "TaskSquareRounded";
export const TaskSquareRoundedMetadata = { 
  id: "task-square_rounded", 
  baseId: "task-square", 
  variant: "rounded", 
  name: "Task Square", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TaskSquareRounded;
