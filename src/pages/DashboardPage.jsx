import SideMenu from "../components/layout/SideMenu";
import { AppShell, Navbar, Header, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={"calc(100vh - 60px)"} p="xs">
          <SideMenu />
        </Navbar>
      }
      header={
        <Header height={55} px="xs" pb="sm">
          <Title sx={() => ({ fontFamily: "PT Sans, sans-serif" })}>
            shopify challenge
          </Title>
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
