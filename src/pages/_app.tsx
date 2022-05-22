import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { supabase } from "../utils/supabase";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter();

  const validateSession = async () => {
    const user = supabase.auth.user();
    if (user && pathname === "/") {
      push("/");
      // } else if (!user && pathname !== '/new') {
      //   await push('/auth')
    }
  };

  useEffect(() => {
    validateSession();
  }, []);

  supabase.auth.onAuthStateChange((event, _) => {
    if (event === "SIGNED_IN" && pathname === "/Auth") {
      push("/");
    }
    if (event === "SIGNED_OUT" && pathname === "/Auth") {
      push("/Auth");
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
