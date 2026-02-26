/**
 * Auto-generated logo component: Geometric71 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric71ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric71Shapes = React.forwardRef<SVGSVGElement, Geometric71ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M225.851 158.426C301.105 160.824 356.35 168.757 356.35 178.175C356.35 187.592 301.105 195.526 225.851 197.923C277.368 252.83 310.822 297.504 304.163 304.163C297.504 310.822 252.83 277.368 197.923 225.851C195.526 301.105 187.592 356.35 178.175 356.35C168.757 356.35 160.824 301.105 158.426 225.851C103.519 277.368 58.8452 310.822 52.1862 304.163C45.5271 297.504 78.9812 252.83 130.498 197.923C55.2448 195.526 0 187.592 0 178.175C0 168.757 55.2447 160.824 130.498 158.426C78.9812 103.519 45.527 58.8453 52.1861 52.1862C58.8452 45.5271 103.519 78.9813 158.426 130.498C160.824 55.2448 168.757 0 178.175 0C187.592 0 195.526 55.2448 197.923 130.498C252.83 78.9812 297.504 45.527 304.163 52.1861C310.822 58.8452 277.368 103.519 225.851 158.426Z" fill="#2F2965"/>
    </svg>
  )
);

Geometric71Shapes.displayName = "Geometric71Shapes";

export const Geometric71ShapesMetadata = {
  id: "geometric71_shapes",
  baseId: "geometric71",
  variant: "shapes",
  name: "Geometric71",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric71Shapes;
