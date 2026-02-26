/**
 * Auto-generated logo component: Abstract49 (shapes)
 * Category: abstract
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Abstract49ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract49Shapes = React.forwardRef<SVGSVGElement, Abstract49ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M13.8841 1.92378C12.8428 0.882518 11.1572 0.882518 10.1159 1.92378L1.92377 10.1159C0.882507 11.1572 0.882507 12.8428 1.92377 13.8841L10.1159 22.0762C11.1572 23.1175 12.8428 23.1175 13.8841 22.0762L22.0762 13.8841C23.1175 12.8428 23.1175 11.1572 22.0762 10.1159L13.8841 1.92378ZM12 24L0 12L12 0L24 12L12 24ZM20.4567 6.20787C20.4567 4.73574 19.2642 3.54331 17.7921 3.54331H6.20789C4.73577 3.54331 3.54331 4.73574 3.54331 6.20787V17.7921C3.54331 19.2642 4.73577 20.4567 6.20789 20.4567H17.7921C19.2642 20.4567 20.4567 19.2642 20.4567 17.7921V6.20787ZM3.51498 20.485V3.51496H20.485V20.485H3.51498Z" />
    </svg>
  )
);

Abstract49Shapes.displayName = "Abstract49Shapes";

export const Abstract49ShapesMetadata = {
  id: "abstract49_shapes",
  baseId: "abstract49",
  variant: "shapes",
  name: "Abstract49",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Abstract49Shapes;
