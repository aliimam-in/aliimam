/**
 * Auto-generated logo component: Drag Drop 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DragDrop2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DragDrop2OutlineLogo = React.forwardRef<SVGSVGElement, DragDrop2OutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M4 4l0 .01" />
  <path d="M8 4l0 .01" />
  <path d="M12 4l0 .01" />
  <path d="M16 4l0 .01" />
  <path d="M4 8l0 .01" />
  <path d="M4 12l0 .01" />
  <path d="M4 16l0 .01" />
    </svg>
  )
);

DragDrop2OutlineLogo.displayName = "DragDrop2OutlineLogo";

export const DragDrop2OutlineLogoMetadata = {
  id: "drag-drop-2-outline",
  baseId: "drag-drop-2-outline",
  variant: "default",
  name: "Drag Drop 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DragDrop2OutlineLogo;
