/**
 * Auto-generated logo component: Chess (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessFilledLogo = React.forwardRef<SVGSVGElement, ChessFilledLogoProps>(
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
      <path d="M12 2a4 4 0 0 1 4 4a5.03 5.03 0 0 1 -.438 2.001l.438 -.001a1 1 0 0 1 .117 1.993l-.117 .007h-1.263l1.24 5.79a1 1 0 0 1 -.747 1.184l-.113 .02l-.117 .006h-6a1 1 0 0 1 -.996 -1.093l.018 -.117l1.24 -5.79h-1.262a1 1 0 0 1 -.117 -1.993l.117 -.007h.438a5.154 5.154 0 0 1 -.412 -1.525l-.02 -.259l-.006 -.216a4 4 0 0 1 4 -4z" />
  <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" />
    </svg>
  )
);

ChessFilledLogo.displayName = "ChessFilledLogo";

export const ChessFilledLogoMetadata = {
  id: "chess_filled",
  baseId: "chess",
  variant: "filled",
  name: "Chess",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessFilledLogo;
