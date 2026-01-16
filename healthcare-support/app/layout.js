import classes from './page.module.css';
import { HeartPulse } from 'lucide-react';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classes.page}>
        <main>
          <div className={classes.icon}>
            <HeartPulse size={40} color='white' />
            <div className={classes.text}>
              <h1>Healthcare Support</h1>
              <p>Your health, our priority</p>
            </div>
            
          </div>
          
        </main>
        {children}
      </body>
    </html>
  );
}
