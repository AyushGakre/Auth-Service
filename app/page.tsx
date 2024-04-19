import { Loginbutton } from "@/components/Auth/login-btn";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
    <div>
      <h1 className="text-6xl font-semibold text-white shadow-sm text-center">
        Auth
      </h1>
      <p className=" text-2xl ">Simple Auth Service</p>
    </div>
    <Loginbutton>
    <Button size="lg">
      Login
    </Button>
    </Loginbutton>
    </div>
   
  );
}
