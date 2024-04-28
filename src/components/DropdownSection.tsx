import { useState, useEffect, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { DropdownSectionItem } from '../types/DropdownSectionItem';

type DropdownSectionProps = {
  title: JSX.Element,
  content: DropdownSectionItem[]
};

const heightAdjustment = 20; // make up for padding/margin

const AnimatedPanel: React.FC<{ children: React.ReactNode, open: boolean }> = ({ children, open }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (open) {
          setHeight(entry.target.scrollHeight + heightAdjustment);
        }
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [open]);

  useEffect(() => {
    if (open && ref.current) {
      setHeight(ref.current.scrollHeight + heightAdjustment);
    } else {
      setHeight(0);
    }
  }, [open, children]);

  return (
    <Disclosure.Panel
      as="dd"
      className="overflow-hidden transition-height duration-300 ease-in-out"
      style={{ height: `${height}px` }}
    >
      <div ref={ref}>
        {children}
      </div>
    </Disclosure.Panel>
  );
};

export default function DropdownSection(props: DropdownSectionProps) {
  return (
    <div className="bg-inherit">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-inherit">{props.title}</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {props.content.map((item, key) => (
              <Disclosure as="div" key={key} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex items-start text-white">
                        <span className="mr-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={`transform transition-transform duration-300 ${open ? '-rotate-180' : 'rotate-0'} h-6 w-6 text-primary`}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-medium text-inherit">{item.heading}</span>
                      </Disclosure.Button>
                    </dt>
                    <AnimatedPanel open={open}>
                      <div className="mt-2 pr-12 flex items-center">
                        {item.content}
                      </div>
                    </AnimatedPanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
