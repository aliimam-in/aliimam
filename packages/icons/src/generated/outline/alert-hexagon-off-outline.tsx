/**
 * Auto-generated logo component: Alert Hexagon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertHexagonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertHexagonOffOutlineLogo = React.forwardRef<SVGSVGElement, AlertHexagonOffOutlineLogoProps>(
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
      <path d="M18.36 18.387l-5.268 3.333a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l1.317 -.777m2.535 -1.493l2.898 -1.709a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .414 -.116 .812 -.326 1.155" />
  <path d="M12 7v1" />
  <path d="M12 8v.01" />
  <path d="M3 3l18 18" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertHexagonOffOutlineLogo.displayName = "AlertHexagonOffOutlineLogo";

export const AlertHexagonOffOutlineLogoMetadata = {
  id: "alert-hexagon-off-outline",
  baseId: "alert-hexagon-off-outline",
  variant: "default",
  name: "Alert Hexagon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertHexagonOffOutlineLogo;
