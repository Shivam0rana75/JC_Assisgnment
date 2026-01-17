import FormPage from '@/components/Form';
export default function DonationPage() {
    return (
        <div>
            <FormPage type='Donation' item={{heading: "Support Our Cause", subHeading: "Your contribution makes a difference"}} />            
        </div>
    );
}