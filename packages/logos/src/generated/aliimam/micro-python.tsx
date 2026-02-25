/**
 * Auto-generated logo component: Micro Python (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicroPythonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MicroPython = React.forwardRef<SVGSVGElement, MicroPythonProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,0 L122.760234,0 L122.760234,199.859649 L133.239766,199.859649 L133.239766,0 L256,0 L256,256 L199.859649,256 L199.859649,56.1403509 L189.380117,56.1403509 L189.380117,256 L66.619883,256 L66.619883,56.1403509 L56.1403509,56.5146199 L56.1403509,256 L0,256 L0,0 Z M237.28655,208.093567 L222.315789,208.093567 L222.315789,233.54386 L237.28655,233.54386 L237.28655,208.093567 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

MicroPython.displayName = "MicroPython";

export const MicroPythonMetadata = {
  id: "micro-python",
  baseId: "micro-python",
  variant: "default",
  name: "Micro Python",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MicroPython;
