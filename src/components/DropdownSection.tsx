import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { DropdownSectionItem } from "../types/DropdownSectionItem";
import OpenSourceBadge from "./OpenSourceBadge";

const heightAdjustment = 20; // Adjust for padding/margin

type DropdownSectionProps = {
  title: JSX.Element;
  subtitle?: string;
  content: DropdownSectionItem[];
};

export default function DropdownSection({
  title,
  subtitle,
  content,
}: DropdownSectionProps) {
  return (
    <div className="bg-inherit">
      <div className="max-w-7xl mx-auto pt-3 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-center text-sm text-gray-500 mt-2">{subtitle}</p>
          )}
          <dl className="space-y-6 divide-y divide-white/20">
            {content.map((item, key) => (
              <DropdownItem key={key} item={item} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const DropdownItem: React.FC<{ item: DropdownSectionItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight + heightAdjustment : 0);
    }
  }, [isOpen, ref.current?.scrollHeight]);

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          className="text-left w-full flex items-start text-white"
          onClick={toggleOpen}
        >
          <span className="mr-6 h-7 flex items-center">
            <ChevronDownIcon
              className={`transform transition-transform duration-300 ${
                isOpen ? "-rotate-180" : "rotate-0"
              } h-6 w-6 text-primary`}
              aria-hidden="true"
            />
          </span>
          <span className="sm:flex sm:items-center font-medium text-inherit">
            <span className="mr-2">{item.heading}</span>
            {item.isOpenSource ? <OpenSourceBadge /> : <></>}
          </span>
        </button>
      </dt>
      <dd
        className="overflow-hidden transition-height duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={ref}>
          <div className="mt-2 flex items-center">{item.content}</div>
        </div>
      </dd>
    </div>
  );
};

