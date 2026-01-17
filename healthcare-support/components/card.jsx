import Image from "next/image";
import classes from "./card.module.css";
import Link from "next/link";
export default function Card({ items , middle}) {
  return (
    <div className={middle ? classes.card : classes.help}>
      
      {items.map((obj) => (
        <div key={obj.id} className={classes.item}>

          <Link href={obj.href ? obj.href : '#'}>
                <Image
                  src={obj.image}
                  alt={obj.title}
                  width={450}
                  height={300}
                  className={classes.image}
                />
                <h2>{obj.title}</h2>
      
          </Link>
          
        </div>
      ))}
    </div>
  );
}
