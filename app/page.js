
import dynamic from 'next/dynamic'


const HomeMenu = dynamic(() => import("@/components/HomeMenu"), { ssr: false })
export default function Home() {


  return (
    <>
      <div className="container">
        <h1 className="text-3xl  font-semibold m-4 text-center">Welcome to Hotel <span className="text-yellow-500">INDIANA</span></h1>
        <HomeMenu/>
      </div>

    </>
  );
}
