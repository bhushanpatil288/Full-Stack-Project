import { Header, Footer } from ".";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-gray-800">
      <Header />
      <main className="grow pt-[88px] pb-[60px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout