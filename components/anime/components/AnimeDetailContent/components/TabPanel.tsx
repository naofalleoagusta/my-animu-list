import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import Skeleton from "../../../../ui_pallette/Skeleton";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ children, index, value }: TabPanelProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    if (!shouldRender && index === value) {
      setShouldRender(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, value]);
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`anime-detail-tabpanel-${index}`}
      aria-labelledby={`anime-detail-${index}`}
      sx={{ p: "24px 0" }}
    >
      <div style={{ display: index === value ? "block" : "none" }}>
        {shouldRender ? children : <Skeleton width="100%" height="400px" />}
      </div>
    </Box>
  );
};

export default TabPanel;
