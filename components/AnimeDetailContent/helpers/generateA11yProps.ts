const generateA11yProps = (index: number) => {
  return {
    id: `anime-detail-tab-${index}`,
    "aria-controls": `anime-detail-tabpanel-${index}`,
  };
};

export default generateA11yProps;
