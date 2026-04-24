import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface WithAuthProps {
  allowedRoles?: string[];
}

export function withAuth(
  Component: React.ComponentType<any>,
  options?: WithAuthProps
) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
      router.push("/auth/login");
      return null;
    }

    if (options?.allowedRoles) {
      if (!options.allowedRoles.includes(session?.user?.role)) {
        router.push("/");
        return null;
      }
    }

    return <Component {...props} session={session} />;
  };
}
