import classes from './page.module.css';
import { HeartPulse } from 'lucide-react';
import Link from 'next/link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classes.page}>
        <main>
        <div>
              <div className={classes.icon}>
                <HeartPulse size={40} color='white' />
                <div className={classes.text}>
                  
                  <h1>Healthcare Support</h1>
                  <p>Your health, our priority</p>
                </div>
                <div>
                  <h2>
                    <Link href="/Chat">FAQs</Link>
                  </h2>
                </div>
              </div>
              
        </div>
          
          
        </main>
        {children}
      </body>
    </html>
  );
}
