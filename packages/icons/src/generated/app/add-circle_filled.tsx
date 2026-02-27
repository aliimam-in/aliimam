/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AddCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AddCircleFilled = React.forwardRef<SVGSVGElement, AddCircleFilledProps>(
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
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="currentColor"/>
    </svg>
  )
);
AddCircleFilled.displayName = "AddCircleFilled";
export const AddCircleFilledMetadata = { 
  id: "add-circle_filled", 
  baseId: "add-circle", 
  variant: "filled", 
  name: "Add Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AddCircleFilled;
