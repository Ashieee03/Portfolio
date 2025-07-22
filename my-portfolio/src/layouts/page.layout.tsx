import SiteNavbar from "../components/site-navbar"


export const PageLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      </main>
    </div>
  )
}

export default PageLayout
