type BadgeProps = {
  label: string;
  size?: "sm" | "lg";
};

const Badge = ({ label, size }: BadgeProps) => {
  return (
    <div
      className={`${
        size === "sm"
          ? "px-3 py-1 text-xs text-gray-600"
          : "px-4 py-2 text-sm text-gray-800"
      } bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full font-medium shadow-sm transition-all`}
    >
      {label}
    </div>
  );
};

export default Badge;
