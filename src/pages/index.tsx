import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, CssBaseline } from "@mui/material";
import { InstructionsComponent } from "@/components/InstructionsComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>.:: Movie Quiz ::.</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <CssBaseline />
        <Container maxWidth="xl">
          <InstructionsComponent />
        </Container>
      </main>
    </>
  );
}
