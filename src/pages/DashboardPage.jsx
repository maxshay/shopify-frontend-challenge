import { useState } from "react";
import SideMenu from "../components/layout/SideMenu";
import {
  AppShell,
  Navbar,
  Header,
  Title,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";

function HomePage() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          height={"calc(100vh - 60px)"}
          p="xs"
        >
          <SideMenu />
        </Navbar>
      }
      header={
        <Header height={55} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title sx={() => ({ fontFamily: "PT Sans, sans-serif" })}>
              shopify challenge
            </Title>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}

export default HomePage;
