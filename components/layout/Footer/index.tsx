import * as React from "react";
import { Container, Stack } from "react-bootstrap";
import { H5, Sub3 } from "../../text";

const Footer: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ ...props }) => {
  return (
    <div className={`tw-bg-secondary-10 tw-py-[32px] ${props.className}`}>
      <Container>
        <div>
          <div className="md:tw-flex md:tw-justify-between">
            <div className="tw-mb-6 tw-md:mb-0">
              <a
                href="https://flowbite.com/"
                className="tw-flex tw-items-center">
                <span className="tw-self-center tw-text-[24px] tw-font-[700] tw-whitespace-nowrap">
                  YLVN DESIGN
                </span>
              </a>
            </div>
            <div className="tw-grid tw-grid-cols-2 tw-gap-8 sm:tw-gap-6 sm:tw-grid-cols-3">
              <div>
                <h2 className="tw-mb-6 tw-text-sm tw-font-[700] tw-text-gray-900 tw-uppercase">
                  Resources
                </h2>
                <ul className="tw-text-gray-600 dark:tw-text-gray-400">
                  <li className="tw-mb-4">
                    <a
                      href="https://flowbite.com/"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="tw-mb-6 tw-text-sm tw-font-[700] tw-text-gray-900 tw-uppercase">
                  Follow us
                </h2>
                <ul className="tw-text-gray-600 dark:tw-text-gray-400">
                  <li className="tw-mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70 ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="tw-mb-6 tw-text-sm tw-font-[700] tw-text-gray-900 tw-uppercase">
                  Legal
                </h2>
                <ul className="tw-text-gray-600 dark:tw-text-gray-400">
                  <li className="tw-mb-4">
                    <a
                      href="#"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="tw-my-6 tw-border-gray-200 sm:tw-mx-auto dark:tw-border-gray-700 lg:tw-my-8" />
          <div className="sm:tw-flex sm:tw-items-center sm:tw-justify-between">
            <span className="tw-text-sm tw-text-gray-500 sm:tw-text-center dark:tw-text-gray-400">
              © 2022
              <a
                href="https://flowbite.com/"
                className="hover:tw-underline tw-text-secondary-60 hover:tw-text-secondary-70">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
