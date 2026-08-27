import type { SVGProps } from "react";

/* Thin horizontal arrow used across CTAs and text links (→) */
export function IconArrow({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconInstagram({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function IconTelegram({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.5 4.5 2.5 12l6 2.2M21.5 4.5 18 20l-9.5-5.8M21.5 4.5 8.5 14.2M8.5 14.2V20l3.2-3.4" />
    </svg>
  );
}

/* Decorative botanical sprig */
export function Sprig({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 42C28 40 50 30 74 12" />
      <path d="M30 38c-2-6-8-9-14-9 1 6 6 10 14 9Z" />
      <path d="M46 30c-1-6-6-10-13-11 0 6 5 11 13 11Z" />
      <path d="M62 21c0-6-4-11-11-13 0 6 4 11 11 13Z" />
      <path d="M76 13c1-6-2-12-8-15-1 6 2 12 8 15Z" />
      <path d="M90 22c5-3 8-9 8-16-5 2-9 8-8 16Z" />
      <path d="M104 30c5-2 9-7 10-14-6 1-10 6-10 14Z" />
    </svg>
  );
}

/* Small underline swash beneath the script word */
export function Swash({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 14c40-11 150-14 212-4-52-2-120-1-168 8 30-4 84-6 150-2" />
    </svg>
  );
}
