import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ allItems, setFilter }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setFilter(allItems);
    } else if (newValue === 1) {
      const filteredSongs = allItems.filter(
        (item) => item.genre.key === "rock"
      );
      setFilter(filteredSongs);
    } else if (newValue === 2) {
      const filteredSongs = allItems.filter((item) => item.genre.key === "pop");
      setFilter(filteredSongs);
    } else if (newValue === 3) {
      const filteredSongs = allItems.filter(
        (item) => item.genre.key === "jazz"
      );
      setFilter(filteredSongs);
    } else if (newValue === 4) {
      const filteredSongs = allItems.filter(
        (item) => item.genre.key === "blues"
      );
      setFilter(filteredSongs);
    }
  };

  return (
    <Box sx={{ width: "100%", marginBottom: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { backgroundColor: "#34C94B", height: 3 } }}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#34C94B",
            },
            "& button": {
              color: "#FFFFFF",
              textTransform: "none",
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      
    </Box>
  );
}
