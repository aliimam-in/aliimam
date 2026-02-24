/**
 * Auto-generated logo component: List Todo (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListTodoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListTodoLogo = React.forwardRef<SVGSVGElement, ListTodoLogoProps>(
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
      <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="m3 17 2 2 4-4" />
  <rect x="3" y="4" width="6" height="6" rx="1" />
    </svg>
  )
);

ListTodoLogo.displayName = "ListTodoLogo";

export const ListTodoLogoMetadata = {
  id: "list-todo",
  baseId: "list-todo",
  variant: "default",
  name: "List Todo",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListTodoLogo;
