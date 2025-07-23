import Footer from "@/components/sections/landing/footer"
import { Header } from "@/components/sections/landing/header"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout