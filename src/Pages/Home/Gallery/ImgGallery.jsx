import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ImgGallery = () => {
  return (
    <div>
      <Tabs>
      <div className="bg-white">
        <TabList className="flex p-4 space-x-4">
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded">
            Category 1
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded">
            Category 2
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded">
            Category 3
          </Tab>
        </TabList>
      </div>

      <TabPanel>
        {/* Content for Category 1 */}

        <h1>hello 1</h1>
      </TabPanel>
      <TabPanel>
        {/* Content for Category 2 */}

        <h2>Hellopsss</h2>
      </TabPanel>
      <TabPanel>
        {/* Content for Category 3 */}
        <h4>hiiii</h4>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default ImgGallery;
