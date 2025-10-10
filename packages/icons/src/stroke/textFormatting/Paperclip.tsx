import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PaperclipProps extends IconProps {
  type?: "stroke";
}

export const Paperclip: IconComponent<PaperclipProps> = React.forwardRef<
  SVGSVGElement,
  PaperclipProps
>(function Paperclip(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 6.00003L7.58603 14.586C7.21088 14.9612 7.00012 15.47 7.00012 16.0005C7.00012 16.5311 7.21088 17.0399 7.58603 17.415C7.96118 17.7902 8.46999 18.0009 9.00053 18.0009C9.53107 18.0009 10.0399 17.7902 10.415 17.415L18.829 8.82903C19.5792 8.07887 20.0006 7.06142 20.0006 6.00053C20.0006 4.93964 19.5792 3.9222 18.829 3.17203C18.0789 2.42187 17.0614 2.00043 16.0005 2.00043C14.9396 2.00043 13.9222 2.42187 13.172 3.17203L4.79303 11.723C4.22843 12.2785 3.77939 12.9403 3.47183 13.6702C3.16426 14.4001 3.00425 15.1836 3.00103 15.9756C2.9978 16.7677 3.15142 17.5525 3.45304 18.2849C3.75465 19.0173 4.19828 19.6827 4.75834 20.2427C5.31839 20.8028 5.9838 21.2464 6.71617 21.548C7.44853 21.8496 8.23337 22.0033 9.02541 22C9.81744 21.9968 10.601 21.8368 11.3309 21.5292C12.0608 21.2217 12.7225 20.7726 13.278 20.208L21.657 11.657"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 6L7.58603 14.586C7.21088 14.9611 7.00012 15.47 7.00012 16.0005C7.00012 16.531 7.21088 17.0399 7.58603 17.415C7.96118 17.7901 8.46999 18.0009 9.00053 18.0009C9.53107 18.0009 10.0399 17.7901 10.415 17.415L18.829 8.829C19.5792 8.07884 20.0006 7.06139 20.0006 6.0005C20.0006 4.93961 19.5792 3.92216 18.829 3.172C18.0789 2.42183 17.0614 2.0004 16.0005 2.0004C14.9396 2.0004 13.9222 2.42183 13.172 3.172L4.79303 11.723C4.22843 12.2785 3.77939 12.9402 3.47183 13.6701C3.16426 14.4 3.00425 15.1836 3.00103 15.9756C2.9978 16.7677 3.15142 17.5525 3.45304 18.2849C3.75465 19.0172 4.19828 19.6826 4.75834 20.2427C5.31839 20.8027 5.9838 21.2464 6.71617 21.548C7.44853 21.8496 8.23337 22.0032 9.02541 22C9.81744 21.9968 10.601 21.8368 11.3309 21.5292C12.0608 21.2216 12.7225 20.7726 13.278 20.208L21.657 11.657"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 6L7.58603 14.586C7.21088 14.9611 7.00012 15.47 7.00012 16.0005C7.00012 16.531 7.21088 17.0399 7.58603 17.415C7.96118 17.7901 8.46999 18.0009 9.00053 18.0009C9.53107 18.0009 10.0399 17.7901 10.415 17.415L18.829 8.829C19.5792 8.07884 20.0006 7.06139 20.0006 6.0005C20.0006 4.93961 19.5792 3.92216 18.829 3.172C18.0789 2.42183 17.0614 2.0004 16.0005 2.0004C14.9396 2.0004 13.9222 2.42183 13.172 3.172L4.79303 11.723C4.22843 12.2785 3.77939 12.9402 3.47183 13.6701C3.16426 14.4 3.00425 15.1836 3.00103 15.9756C2.9978 16.7677 3.15142 17.5525 3.45304 18.2849C3.75465 19.0172 4.19828 19.6826 4.75834 20.2427C5.31839 20.8027 5.9838 21.2464 6.71617 21.548C7.44853 21.8496 8.23337 22.0032 9.02541 22C9.81744 21.9968 10.601 21.8368 11.3309 21.5292C12.0608 21.2216 12.7225 20.7726 13.278 20.208L21.657 11.657"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 5.99997L7.58603 14.586C7.21088 14.9611 7.00012 15.4699 7.00012 16.0005C7.00012 16.531 7.21088 17.0398 7.58603 17.415C7.96118 17.7901 8.46999 18.0009 9.00053 18.0009C9.53107 18.0009 10.0399 17.7901 10.415 17.415L18.829 8.82897C19.5792 8.07881 20.0006 7.06136 20.0006 6.00047C20.0006 4.93958 19.5792 3.92213 18.829 3.17197C18.0789 2.4218 17.0614 2.00037 16.0005 2.00037C14.9396 2.00037 13.9222 2.4218 13.172 3.17197L4.79303 11.723C4.22843 12.2784 3.77939 12.9402 3.47183 13.6701C3.16426 14.4 3.00425 15.1836 3.00103 15.9756C2.9978 16.7676 3.15142 17.5525 3.45304 18.2848C3.75465 19.0172 4.19828 19.6826 4.75834 20.2427C5.31839 20.8027 5.9838 21.2463 6.71617 21.548C7.44853 21.8496 8.23337 22.0032 9.02541 22C9.81744 21.9967 10.601 21.8367 11.3309 21.5292C12.0608 21.2216 12.7225 20.7726 13.278 20.208L21.657 11.657"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Paperclip doesn't support ${type}`);
  return null;
});

Paperclip.displayName = "Paperclip";

Paperclip.metadata = {
  name: "Paperclip",
  category: "stroke/textFormatting",
  tags: ["paperclip", "icon"],
  description: "Paperclip icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Paperclip;
