import classes from './page.module.css'
import { submitForm } from './actions';
import { SubmitButton } from './SubmitButton';
export default function FormPage({item , type}) {
    return (
        <div className={classes.Volunteer}>
            <h1>
                {item.heading}
                
            </h1>
            <h2>
                {item.subHeading}
            </h2>
            <div className={classes.formWrapper}>
                <form action={submitForm} className={classes.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className={classes.input}
                    />

                    <input
                        type="text"
                        name="contact"
                        placeholder="Email or Phone"
                        required
                        className={classes.input}
                    />

                    <input type="hidden" name="reason" value={type} />

                    <select className={classes.select} disabled>
                        <option>{type}</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Tell us more (optional)"
                        className={classes.textarea}
                    />

                    <SubmitButton className={classes.button} />
                </form>


            </div>
            

        </div>
    );
}