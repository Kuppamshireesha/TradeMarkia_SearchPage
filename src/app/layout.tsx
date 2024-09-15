// import './globals.css'; 
// import { Inter } from 'next/font/google'; 
// import Footer from '../component/Footer'; 

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Trademarkia Search',
//   description: 'Search for trademarks with filters',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//         <Footer /> {/* Include Footer component here */}
//       </body>
//     </html>
//   );
// }

import './globals.css'; 
import { Inter } from 'next/font/google'; 
import Footer from '../component/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Trademarkia Search',
  description: 'Search for trademarks with filters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer /> {/* Include Footer component here */}
      </body>
    </html>
  );
}
