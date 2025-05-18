"use client";

import { Tab, Tabs } from "@heroui/tabs";

import Account from "./account";
import Billing from "./billing";
import ContactUs from "./contact-us";

export default function SettingsContent() {
  return (
    <Tabs className="">
      <Tab key="account" title="Account">
        <div className="py-4">
          <Account />
        </div>
      </Tab>
      <Tab key="billing" title="Billing">
        <div className="py-4">
          <Billing />
        </div>
      </Tab>
      <Tab key="contact" title="Contact Us">
        <div className="py-4">
          <ContactUs />
        </div>
      </Tab>
    </Tabs>
  );
}
