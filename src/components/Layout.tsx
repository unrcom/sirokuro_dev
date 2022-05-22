import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";

import styles from "./Layout.module.css";

type Title = {
  title: string;
  children: ReactNode;
};

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// function Copyright() {
//   return (
//     <Typography variant="body2" color="white" align="center">
//       {"Copyright © "}
//       {/* <Button variant="text" size="large"> */}
//       <a
//         className={styles.Copy}
//         href="https://unremoted.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         unremoted.com
//       </a>
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

export const Layout: FC<Title> = ({ children, title = "sirokuro.site" }) => {
  const user = supabase.auth.user();
  const { push, pathname } = useRouter();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const thisyear = new Date().getFullYear();

  // const loginBtn = () => {
  //   push("/auth");
  // };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          {/* <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8"></div>
        </nav> */}
        </header>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" color="inherit" open={open}>
          <Toolbar>
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <div className={styles.Title}>sirokuro.site</div>
              </Typography>
            </Link>
            <Link href="/Auth">
              {user ? "ログアウト" : "ログイン"}
              {/* ログイン */}
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          // color="inherit"
          // color="default"
        >
          <DrawerHeader className={styles.Bgblack}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon className={styles.Text} />
              ) : (
                <ChevronRightIcon className={styles.Text} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              "好き嫌いを投稿する",
              "対決を投稿する",
              "白黒サイトについて",
              "よくある質問",
            ].map((text, index) => (
              <ListItem button key={text} className={styles.Bgblack}>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={text} className={styles.Text} />
              </ListItem>
            ))}
          </List>
          <Divider className="Menu" />
          <List>
            {[
              "カテゴリーを追加する [＋]",
              "ほしい？",
              "並ぶ？",
              "お取り寄せ",
              "手に入らない",
              "人物",
              "カルチャー",
              "動物",
              "アート",
              "エンタメ",
              "場面",
              "場所",
              "科学",
              "IT",
              "モノ",
              "フード",
              "サービス",
              "SNS",
              "企業",
              "投資",
              "広告",
              "本",
              "ゲーム",
              "趣味",
              "ヘルスケア",
              "ギャンブル",
            ].map((text, index) => (
              <ListItem button key={text} className={styles.Bgblack}>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={text} className={styles.Text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main>
          <Box className={styles.LayoutMain}>
            <DrawerHeader />
            {children}
          </Box>
        </Main>
      </Box>
      <Box component="footer" sx={{ p: 2, bgcolor: "black" }}>
        <div className={styles.TextWhite}>
          Copyright ©　unremoted.com　{thisyear}.
        </div>
      </Box>
      {/* <footer className={styles.Footer}>
        <a
          className={styles.Copy}
          href="https://unremoted.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          当サイトの運営: unremoted.com
        </a>
      </footer> */}
    </>
  );
};
