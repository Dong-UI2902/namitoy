import React from "react";
import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useAuth } from "../../contexts/Auth";

const DropdownUser = () => {
  const { user, logout } = useAuth();

  return (
    <Dropdown placement="bottom-right">
      <Navbar.Item>
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="secondary"
            size="md"
            src="/assets/avt.png"
          />
        </Dropdown.Trigger>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="User menu actions"
        color="secondary"
        onAction={(actionKey) => {
          if (actionKey === "logout") {
            return logout();
          }

          if (actionKey === "manager") {
            return (window.location.href = "/manager");
          }

          if (actionKey === "orders") {
            return (window.location.href = "/orders");
          }
        }}
      >
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            {/*{user?.username}*/}
              Chưa đổi được avt đâu :'(
          </Text>
        </Dropdown.Item>
        {user?.role === "ADMIN" ? (
          <Dropdown.Item key="manager" withDivider>
            Quản lý cửa hàng
          </Dropdown.Item>
        ) : (
          <Dropdown.Item key="manager" withDivider css={{ display: "none" }}>
            Quản lý cửa hàng
          </Dropdown.Item>
        )}
        <Dropdown.Item key="logout" withDivider color="error">
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownUser;
