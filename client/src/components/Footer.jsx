const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-void/80 backdrop-blur-lg border-t border-neon-cyan/30 shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <p className="text-gray-400 text-sm tracking-wider">Copyright ©{new Date().getFullYear()} AuthSystem. All rights reserved.</p>
                <p className="text-gray-400 text-sm tracking-wider">Made with ❤️ by Bhushan Patil</p>
            </div>
        </footer>
    )
}

export default Footer