/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { DropdownSectionItem } from '../types/DropdownSectionItem'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type DropdownSectionProps = {
  title: JSX.Element,
  content: DropdownSectionItem[]
}

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
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform text-primary')}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-medium text-inherit">{item.heading}</span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 flex">
                      <span className="mr-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className='h-6 w-6 transform text-transparent'
                          aria-hidden="true"
                        />
                      </span>
                      {item.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
