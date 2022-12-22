import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthToken } from "../services/error/AuthToken";

//routes user no Auth
export function canSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["@nextauth.token"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (erro) {
      if (erro instanceof AuthToken) {
        destroyCookie(ctx, "@nextauth.token");
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }

    return await fn(ctx);
  };
}
