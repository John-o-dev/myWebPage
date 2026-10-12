import Dock from "@/components/Dock/dock";
import Navbar from "@/components/Navbar/navbar";
import BlogSection from "@/components/BlogSection/blogSection";
import FooterSection from "@/components/Footer/footerSection";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Dock />
      <BlogSection />
      <FooterSection />
    </>
  )
}