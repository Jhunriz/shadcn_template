import { Button } from "@/components/ui/button";


export default function Restricted404() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-9xl text-center">
          404
        </h1>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight text-center mt-2">
            Oops! Page Not Found
        </p>
        <p className="text-xl text-muted-foreground py-5">
          The link might be corrupted.
        </p>
        <Button className="uppercase py-2">Go back</Button>
      </div>
    </div>
  )
}
