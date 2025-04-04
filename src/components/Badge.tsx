type BadgeProps = {
  label: string;
  size?: "sm" | "lg";
};

const Badge = ({ label, size }: BadgeProps) => {
  return (
    <div
      className={`${
        size === "sm" ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm"
      } bg-gray-100 rounded-full font-medium text-gray-800 shadow-sm transition-all cursor-default`}
    >
      {label}
    </div>
  );
};

export default Badge;
