import localFont from 'next/font/local'

const source_code_pro = localFont({
    src: "../fonts/SourceCodePro-Black.otf",
    weight: "900",
    style: "normal",
    display: "swap",
    variable: "--font-source-code-pro",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>

      <div className={source_code_pro.className} style={{fontWeight: 900}}>Lorem ipsum</div>
      <div style={{fontFamily: "var(--font-source-code-pro)", fontWeight: 900}}>Lorem ipsum</div>


      {children}

      </body>
    </html>
  )
}
