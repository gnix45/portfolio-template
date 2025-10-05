export const metadata = {
  title: 'Pavel Brayel - Portfolio',
  description: 'Cybersecurity Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}