import React from "react";

interface StaticticBoxProps {
  title: string;
  colorKey: "green" | "yellow" | "blue";
  icon: React.ElementType;
  value: string | number;
  description?: string;
}

const colorMap = {
  green: {
    border: "border-green-300",
    icon: "text-green-300",
  },
  yellow: {
    border: "border-yellow-300",
    icon: "text-yellow-300",
  },
  blue: {
    border: "border-blue-300",
    icon: "text-blue-300",
  },
};

const StaticticBox: React.FC<StaticticBoxProps> = ({
  title,
  value,
  icon: Icon,
  colorKey,
  description,
}) => {

  const classes = colorMap[colorKey];
  const borderClass = classes.border;
  const iconClass = classes.icon;

  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl border ${borderClass}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-3xl font-extrabold text-gray-900">{value}</div>
        <Icon
          className={`w-8 h-8 ${iconClass}`}
        />
      </div>
      <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
        {title}
      </p>
      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default StaticticBox;
