import Footer from "@/components/landing/footer"
import { Header } from "@/components/landing/header"

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