export default function Icon({
    name,
    className = "h-5 w-5",
  }: {
    name:
      | "search"
      | "pen"
      | "bell"
      | "user"
      | "lock"
      | "arrowUp"
      | "arrowDown"
      | "flame"
      | "badge"
      | "spark";
    className?: string;
  }) {
    switch (name) {
      case "search":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.3 16.3 21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "pen":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 20h9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "bell":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M13.7 21a2 2 0 0 1-3.4 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "user":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M20 21a8 8 0 1 0-16 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "lock":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M7 11V8a5 5 0 0 1 10 0v3"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M6 11h12v10H6V11Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "arrowUp":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 11l6-6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "arrowDown":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 13l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "flame":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22c4 0 7-3 7-7 0-5-5-7-4-13-4 3-7 7-7 11-2-1-2-3-2-5-2 2-3 5-3 8 0 4 3 6 9 6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "badge":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 15 7l6 .9-4.4 4.3 1 6-5.6-3-5.6 3 1-6L3 7.9 9 7l3-5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "spark":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l1.2 4.8L18 8l-4.8 1.2L12 14l-1.2-4.8L6 8l4.8-1.2L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M19 14l.7 2.7L22 17l-2.3.6L19 20l-.6-2.4L16 17l2.4-.3L19 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  }
  