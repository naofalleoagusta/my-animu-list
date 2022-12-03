import Box from "@mui/material/Box";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ children, index, value }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`anime-detail-tabpanel-${index}`}
      aria-labelledby={`anime-detail-${index}`}
      sx={{ p: "24px 0" }}
    >
      <div style={{ display: index === value ? "block" : "none" }}>
        {children}
      </div>
    </Box>
  );
};

export default TabPanel;
