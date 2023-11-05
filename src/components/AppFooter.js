import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Dashbroad
        </a>
        <span className="ms-1">&copy; 2023 IotLabs Thầy Công.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Facebook</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
