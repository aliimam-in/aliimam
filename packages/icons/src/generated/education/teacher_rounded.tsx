/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TeacherRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TeacherRounded = React.forwardRef<SVGSVGElement, TeacherRoundedProps>(
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
      <path d="M10.05 2.53L4.03002 6.46C2.10002 7.72 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73 19.98 6.47L13.99 2.54C12.91 1.82 11.13 1.82 10.05 2.53Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.4 15V9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TeacherRounded.displayName = "TeacherRounded";
export const TeacherRoundedMetadata = { 
  id: "teacher_rounded", 
  baseId: "teacher", 
  variant: "rounded", 
  name: "Teacher", 
  category: "education", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TeacherRounded;
