/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlertCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlertCircleFilled = React.forwardRef<SVGSVGElement, AlertCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
AlertCircleFilled.displayName = "AlertCircleFilled";
export const AlertCircleFilledMetadata = { 
  id: "alert-circle_filled", 
  baseId: "alert-circle", 
  variant: "filled", 
  name: "Alert Circle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlertCircleFilled;
