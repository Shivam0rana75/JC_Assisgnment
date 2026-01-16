import classes from './page.module.css';
import Dog from '@/public/images/dogs.jpg';
import Homeless from '@/public/images/HomelessRescue.jpg';
import Funding from '@/public/images/FundingHealthcareExpensesForNeedy.jpg';
import Volunteer from '@/public/images/Volunteer.jpg';
import Donate from '@/public/images/Donate.jpg';
import Card from '@/components/card';
import Medicine from '@/public/images/ProvideMedicine.jpg';
import Support from '@/public/images/Support.jpg';
export default function Home() {
  const item1=[{title:"Rescuing and nursing stray Animals", image: Dog , id:1},
              {title:"Providing medical aid to homeless people", image: Homeless , id:2},
              {title:"Funding healthcare expenses for the needy", image: Funding , id:3}
  ];
  const item2=[{title:"Volunteer with us", image: Volunteer , id:10},
              {title:"Donate for a cause", image: Donate , id:20},
              {title:"Provide medicines or supplies", image: Medicine , id:30}
  ];
  const item3=[{title:"24/7 Emergency Support", image: Support , id:100}];
  return (
    <main className={classes.home}>
      <div className={classes.description}>
        <h1> Healthcare Support for everyone in need </h1>

        <div>
            <p>
              Our NGO is dedicated to providing compassionate healthcare support to all living beings, recognizing that the well-being of humans, animals, and the environment are deeply interconnected. We believe that access to basic healthcare is not a privilege, but a fundamental right that should extend beyond human boundaries to include animals and vulnerable life forms that cannot advocate for themselves.
            </p>

            <p>
                  For humans, we work to bridge gaps in healthcare accessibility by supporting underserved communities with medical assistance, health awareness programs, preventive care initiatives, and guidance on navigating healthcare services. Our efforts focus on early intervention, education, and support systems that help individuals and families lead healthier, more dignified lives.
            </p>

            <p>
                  At the same time, our NGO is actively involved in animal welfare and veterinary support. We assist injured, abandoned, and stray animals by facilitating medical treatment, vaccinations, rescue coordination, and rehabilitation. By collaborating with veterinarians, volunteers, and local communities, we aim to reduce suffering and promote responsible care for animals in need.
            </p>
            <p>
                  What sets our organization apart is our holistic approach to healthcare. We recognize that human health, animal health, and community well-being are inseparable. Through awareness campaigns, volunteer-driven initiatives, and partnerships with healthcare professionals, we strive to create a more empathetic and inclusive support ecosystem.
            </p>

            <p>
                  Our mission is rooted in compassion, responsibility, and service. Whether it is helping a patient seek medical guidance, supporting a volunteer eager to contribute, or ensuring an injured animal receives timely care, we are committed to making a meaningful difference—one life at a time.

            </p>
            <p>
                  By standing for all living beings, our NGO envisions a world where care, kindness, and health extend to every corner of life.

            </p>
          </div>
        
      </div>



      <div>
        <div className={classes.services}>
          <h1>Our Services</h1>
        </div>
        
        <Card items={item1} />
      </div>

      <div className={classes.joinus}>
        <h2>
          Want to join us in making a difference? Reach out today to learn how you can contribute to our mission of providing healthcare support to those in need—humans and animals alike. Together, we can create a healthier, more compassionate world for all living beings.
        </h2>

        <p>
          Ways to help us:
        </p>

        <div>
          <Card items={item2} />
        </div>

        <p>
          In need of urgent assistance? Contact us immediately for emergency healthcare support for humans or animals. Our dedicated team is ready to respond swiftly and provide the necessary aid during critical situations. Your well-being and that of vulnerable life forms is our top priority.
        </p>
        <div>
          <Card items={item3} middle={true} />
        </div>
      </div>
      
    </main>
  );
}