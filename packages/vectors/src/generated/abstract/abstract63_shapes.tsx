/**
 * Auto-generated logo component: Abstract63 (shapes)
 * Category: abstract
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Abstract63ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract63Shapes = React.forwardRef<SVGSVGElement, Abstract63ShapesProps>(
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
      <path d="M13.2248 11.179L24 12L13.2248 12.821C13.0095 12.8381 12.8381 13.0095 12.821 13.2248L12 24L11.179 13.2248C11.1619 13.0095 10.9905 12.8381 10.7752 12.821L0 12L10.7752 11.179C10.9905 11.1619 11.1619 10.9905 11.179 10.7752L12 0L12.821 10.7752C12.8381 10.9905 13.0095 11.1619 13.2248 11.179Z" />
    </svg>
  )
);

Abstract63Shapes.displayName = "Abstract63Shapes";

export const Abstract63ShapesMetadata = {
  id: "abstract63_shapes",
  baseId: "abstract63",
  variant: "shapes",
  name: "Abstract63",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Abstract63Shapes;
