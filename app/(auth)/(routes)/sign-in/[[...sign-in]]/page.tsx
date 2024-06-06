import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
          appearance={{
            variables: {
              colorPrimary: "#4B2550",
              colorTextSecondary: "#4B2550"
    }
  }}/>;
}
