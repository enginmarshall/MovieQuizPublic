import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, CssBaseline } from "@mui/material";
import { GameComponent } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export default function Game() {
  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <CssBaseline />
        <Container maxWidth="xl"
          sx={{
            marginLeft: 0,
            marginTop: '1rem'
          }}>
          <GameComponent />
        </Container>
      </main>
    </>
  )
}
