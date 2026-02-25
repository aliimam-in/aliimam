/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Lemon2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Lemon2Filled = React.forwardRef<SVGSVGElement, Lemon2FilledProps>(
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
      <path d="M18 3a3 3 0 0 1 2.443 4.742l-.06 .076l.037 .087c1.269 3.187 .428 7.084 -2.203 9.872l-.217 .223c-2.8 2.8 -6.823 3.723 -10.095 2.42l-.087 -.036l-.133 .098a3 3 0 0 1 -2.11 .488l-.205 -.036a3 3 0 0 1 -1.852 -4.62l.098 -.134l-.036 -.085c-1.269 -3.187 -.428 -7.084 2.203 -9.872l.217 -.223c2.8 -2.8 6.823 -3.723 10.095 -2.42l.085 .037l.124 -.091a3 3 0 0 1 1.493 -.52z" />
    </svg>
  )
);
Lemon2Filled.displayName = "Lemon2Filled";
export const Lemon2FilledMetadata = { 
  id: "lemon-2_filled", 
  baseId: "lemon-2", 
  variant: "filled", 
  name: "Lemon 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Lemon2Filled;
