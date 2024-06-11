import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
          appearance={{
            variables: {
              colorPrimary: "#111827",
              colorTextSecondary: "#111827"
    }
  }}/>;
}
