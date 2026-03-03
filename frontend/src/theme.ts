import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",        // Ant blue
    colorInfo: "#1677ff",
    colorBgLayout: "#f5f7fb",         // soft off-white background
    colorText: "#0b1220",       // near-black
    colorBorder: "#e6eaf2",
    borderRadiusLG: 14,
    fontSize: 14,
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      bodyBg: "#f5f7fb",
      siderBg: "#ffffff",
    },
    Card: {
      colorBgContainer: "#ffffff",
      headerBg: "#ffffff",
    },
    Input: {
      colorBgContainer: "#ffffff",
    },
    Select: {
      colorBgContainer: "#ffffff",
    },
    Button: {
      colorPrimary: "#1677ff",
    },
  },
};
