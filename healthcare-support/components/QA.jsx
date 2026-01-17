'use client'
import { useState } from "react";
import classes from './QA.module.css'
export default function QA({question, answer}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        
            <div className={classes.Card}>
                <h2 onClick={toggleExpanded}>{question}</h2>
                {isExpanded && <p onClick={toggleExpanded}>{answer}</p>}
            </div>
        
        
    )
}