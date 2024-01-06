import { Fragment, useState } from "react";
import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoLogOut } from "react-icons/io5";
import { BsPhoneFill } from "react-icons/bs";
import { MdDashboard, MdHelp } from "react-icons/md";

/**
 * Combines multiple class names into a single string.
 *
 * @param {...string} classes - The class names to be combined.
 * @return {string} - The combined class names as a single string.
 */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 h-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className={"text-xl"}>DealBeta</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <div className={"flex"}>
            <MdDashboard className={"m-1"} />
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboards
            </a>
          </div>
          <div className={"flex"}>
            <BsPhoneFill className={"m-1"} />
            <a
              href="#"
              className="flext text-sm font-semibold leading-6 text-gray-900"
            >
              My Gadgets
            </a>
          </div>

          <div className={"flex"}>
            <MdHelp className={"m-1"} />
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Help
            </a>
          </div>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-auto lg:justify-end">
          <Menu as="div" className="relative mx-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700",
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700",
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700",
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <IoLogOut className={"m-1"} />{" "}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log Out
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl">DealBeta</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div
                  className={
                    "flex -mx-3 rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  }
                >
                  <MdDashboard className={"m-1"} />
                  <a href="#" className="">
                    Dashboard
                  </a>
                </div>
                <div
                  className={
                    "flex -mx-3 rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  }
                >
                  <BsPhoneFill className={"m-1"} />
                  <a href="#">My Gadgets</a>
                </div>
                <div
                  className={
                    "flex -mx-3 rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  }
                >
                  <MdHelp className={"m-1"} />
                  <a href="#">Help</a>
                </div>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
