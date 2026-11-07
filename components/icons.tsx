export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function ScribbleUnderline({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 28"
      className={className}
      aria-hidden
    >
      <title>Garis bawah coretan</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="3.2"
          d="M6.5 15.1c9.3-1 35.7-5.6 54.5-5.6 18.8.1 38.4 5.9 58.3 6.1 19.8.3 40.5-4.2 60.6-4.6 20.1-.5 41 2.3 60 2 19-.5 45-4 54-4.6m-288.7 9c9.4-1.6 36-9 55.3-9.7 19.5-.6 41.3 5.7 61.3 5.9 19.9.2 38.8-4.5 58.3-4.7 19.4-.1 39.1 3.5 58.3 3.8s47.5-1.3 56.9-2"
        />
        <path
          strokeWidth="2"
          d="M29.5 22.9c12-1 47.2-6.3 70.8-6.8 23.7-.4 47.6 4 70.9 4 23.2 0 50.9-3.5 68.8-3.8 18-.3 32.2 1.2 39 1.9m-247.6 4c12-.9 45-4.7 68.2-5s48 3.8 71.4 3.7 51-3.4 69.3-3.9 33.9.7 40.3 1.1"
        />
      </g>
    </svg>
  );
}

export function OpenBookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      className={className}
      aria-hidden
    >
      <title>Buku terbuka</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="2.6"
          d="M200 80a167 167 0 0 0-130.8-.8m129.7 1C157.7 59.4 109 64.5 69.8 79m-.5-1.7c3.6 53.1-1.3 104.9 3.3 159.5M73 77.5c-2.6 40.3-4.9 83.5-2.3 158.6m1.3-.1c40-17.5 86.6-16.4 129.5 2.4M72 236.8c40-17.3 86.6-18.5 128 1.1m1 3.6c-3.3-49.7.6-92.4 0-161m-2.4 160c1.1-39.3 1.4-79.4 2-161.7"
        />
        <path
          strokeWidth="2.6"
          d="M200 80c42-19.6 89.7-16 125.2-.3m-127.5 2.4c43.8-22 93.8-19.3 128.5-1.2m4.2-.5c-.3 56.8 1.9 113.3-.3 154.3m-1.7-157.3c-1.4 39.1-3.2 74.4.1 159.3m-.5-.7c-38-17-88.7-13.5-128.5 3m126.9-4a134 134 0 0 0-125.8 7m.2-3.8c-4-58.7-2-117.9-2.9-160.7m3.5 161.6c-2.6-58.5-2.2-117.5-2.3-158"
        />
        <path
          strokeWidth="3"
          d="M198.8 78.3c2 35.9 1.8 64.6-.2 160.8M201.3 80c-3.4 53-3.4 103.3-2.3 160.8"
        />
      </g>
    </svg>
  );
}

export function OpenHandIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      className={className}
      aria-hidden
    >
      <title>Tangan terbuka</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="2.6"
          d="M136.8 149.3c-.3-12.7 2.7-23.8.4-64.2m0 66c.1-19.9-.5-36.9 1-64.9M138 85c-1.8-11.4 5.4-13.5 15.5-17.6M135.8 87c2.8-15 10.1-17.7 18.4-15.4M153 70c9.8 2 14.7 2.5 15.6 12.8m-13.7-11.6c9.9-2.5 11.9 1 11.3 16m.8-3c-2 21.4 2.4 38.5 1.3 67m.4-66.6c.8 24.9-.8 49-.4 65.2"
        />
        <path
          strokeWidth="2.6"
          d="M167.2 147.9c3.4-16.1.5-29.3 3.7-83m-1.2 85.3c.4-26 2-50.5 1.2-82.3m-.9-.9c1.6-12 5.7-14.8 16-16.1m-13.7 17.8c0-12.6 3.4-16.1 14.4-16M185 52c7.7 2.5 15.4 5.4 13.6 13.4m-13.4-14c11.6-2.3 16.5 7.7 13.5 15.5m0 1.6c3.3 28.6.3 62.3 4 79.6m-2-80c-.9 23.7.4 49.8-2 81.2"
        />
        <path
          strokeWidth="2.6"
          d="M136 149.1c4.8 11.4.9 18.3 2.4 53.2m.7-52.4c-1.6 19-1.5 37.6-1.3 50m.2.1c2.7 41.6 33.8 64 69.5 59.8m-70.4-59a63 63 0 0 0 65 59m2.9 2.2c37.5-2 59.7-24.2 55.3-57M206 261.7c35.8-.6 53.5-24.2 56.3-57.4m-2.1 3.4c2.3-16.4-.6-27.8.6-47.5m1.7 44.7c-.2-11.8-1.4-26-.9-44.3"
        />
      </g>
    </svg>
  );
}
