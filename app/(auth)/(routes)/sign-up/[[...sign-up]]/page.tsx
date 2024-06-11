import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp
          appearance={{
            variables: {
              colorPrimary: "#111827",
              colorTextSecondary: "#111827"
}
}}/>;
}