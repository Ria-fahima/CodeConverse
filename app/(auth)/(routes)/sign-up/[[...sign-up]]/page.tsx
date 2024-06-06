import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp
          appearance={{
            variables: {
              colorPrimary: "#4B2550",
              colorTextSecondary: "#4B2550"
}
}}/>;
}