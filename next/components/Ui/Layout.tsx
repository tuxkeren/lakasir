import { ArrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
interface ILayoutInterface {
  children: JSX.Element;
  title?: string;
  back?: boolean;
}

const Layout = (props: ILayoutInterface) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.title || props.back ? (
        <div className="flex items-center max-h-14 h-[52px] font-semibold text-xl mx-auto w-11/12">
          {props.back ? (
            <span className="cursor-pointer" onClick={() => router.back()}>
              <ArrowLeftIcon className="h-5 w-5" />
            </span>
          ) : (
            ""
          )}
          <p className="text-center w-full mr-4">{props.title}</p>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto w-11/12">{props.children}</div>
    </>
  );
};

export default Layout;
