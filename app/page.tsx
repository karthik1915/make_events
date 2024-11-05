import { Logo } from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Index() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <nav className="max-w-screen-2xl flex flex-row items-center justify-between px-4 py-5 mx-auto">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeSwitcher variant="secondary" />
          {user ? (
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Sign Up
            </Link>
          )}
        </div>
      </nav>
      <main>
        <header className="w-full text-center">
          <h1 className="text-5xl font-semibold">Make Events</h1>
        </header>
      </main>
    </>
  );
}
