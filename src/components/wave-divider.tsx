const bgMap: Record<string, string> = {
  background: "bg-background",
  "section-alt": "bg-section-alt",
};

const fillMap: Record<string, string> = {
  background: "text-background",
  "section-alt": "text-section-alt",
};

export function WaveDivider({
  from = "background",
  to = "section-alt",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`relative -mb-px h-12 w-full overflow-hidden sm:h-16 md:h-20 ${bgMap[from] ?? "bg-background"}`}
      aria-hidden="true"
    >
      <svg
        className={`absolute bottom-0 w-full h-full ${fillMap[to] ?? "text-section-alt"} ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,80 L0,40 C240,75 480,10 720,40 C960,70 1200,15 1440,45 L1440,80 Z" />
      </svg>
    </div>
  );
}
