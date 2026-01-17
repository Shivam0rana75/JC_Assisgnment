'use client'
import classes from './page.module.css';
import QA from '@/components/QA';
import { useState } from 'react';
export default function FAQs(){

  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setSubmitted(true);
    setQuestion("");
  }

    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <h1>Some Frequently Asked Questions</h1>
            </div>
            
            <div className={classes.faqs}>
                <QA 
                    question="What is the purpose of this Healthcare Support application?" 
                    answer="This Healthcare Support application is designed to serve as a centralized platform that connects people in need with healthcare assistance, volunteers, donors, and emergency support services. The core purpose of the application is to simplify access to help by providing a clear, user-friendly interface where individuals can seek support, contribute resources, or volunteer their time. Many people, especially those from underserved communities or those facing emergencies, often struggle to navigate complex healthcare systems. This application aims to bridge that gap by offering a single point of contact."
                />
                <QA
                    question="Who can use this application?"
                    answer="This application is intended for a wide range of users, making it inclusive and accessible. Individuals seeking healthcare assistance—whether for themselves, their families, or animals—can use the platform to request support. This includes people who need medical guidance, emergency help, or financial assistance related to healthcare expenses. The application is especially useful for underserved or vulnerable populations who may not have easy access to traditional healthcare systems.Volunteers can also use the application to express their interest in contributing their time and skills. This may include medical professionals, animal welfare workers, students, or individuals who simply want to help in non-medical capacities such as coordination, awareness campaigns, or on-ground support. The platform provides a structured way for volunteers to connect with the NGO and participate meaningfully."
                
                />
                <QA
                    question="How does the application handle emergency healthcare requests?"
                    answer="Emergency healthcare requests are treated with the highest priority within the application. The platform provides a dedicated section for urgent assistance, allowing users to quickly submit essential details related to the emergency. This streamlined process ensures that critical information—such as contact details, the nature of the emergency, and the type of assistance required—can be captured without unnecessary delays.Once an emergency request is submitted, it is flagged internally so that the NGO’s response team can take immediate action. The application is designed to support rapid coordination, enabling volunteers, healthcare professionals, or emergency responders to be notified as quickly as possible. While the platform itself does not replace emergency medical services, it acts as a vital communication bridge between those in need and the organization’s support network."

                />

                <QA
                    question="How can someone become a volunteer through the application?"
                    answer="Becoming a volunteer through the application is a simple and structured process. Interested individuals can navigate to the volunteer section, where they are asked to provide basic information such as their name, contact details, and area of interest. Volunteers may choose to assist in various roles, including healthcare support, animal rescue, logistics, awareness programs, or administrative tasks.The application helps the NGO collect volunteer information in an organized manner, making it easier to match volunteers with suitable opportunities. Once a volunteer submits their details, the information is securely stored and reviewed by the organization’s team. Volunteers are then contacted for further coordination, training, or onboarding as required."
                
                />
                <QA  
                    question="How does the donation process work?"
                    answer="The donation process is designed to be straightforward and transparent. Users who wish to contribute can access the donation section, where they can indicate their intent to support the organization. Donations may be financial or non-financial, such as medicines, medical supplies, or essential resources. The application ensures that donors clearly understand how their contributions will be used.When a donation form is submitted, the information is recorded so the NGO can follow up and provide guidance on the next steps. While the application itself may not process payments directly, it acts as an important communication channel between donors and the organization. This allows for accountability and ensures that donations are directed toward the areas of greatest need."
                
                />

                <QA 
                    question="Does the application support animal healthcare and rescue?"
                    answer="Yes, animal healthcare and rescue are integral parts of the application’s mission. The platform recognizes that animal welfare is closely linked to public health and community well-being. Users can report injured, abandoned, or stray animals through the application, enabling the NGO to coordinate rescue and medical care more effectively.The application allows animal-related requests to be categorized separately, ensuring they receive appropriate attention. By working with veterinarians, animal welfare volunteers, and rescue organizations, the NGO can facilitate timely treatment, vaccinations, rehabilitation, and shelter support. This structured approach helps reduce suffering and improves outcomes for animals in need.Additionally, the platform encourages volunteers and donors to specifically contribute to animal welfare initiatives. Whether it is through medical expertise, rescue assistance, or supplies, the application makes it easier for people to support animal healthcare in a meaningful way."
                
                />

                <QA 
                    question = "What happens if my question is not covered in the FAQs?"
                    answer="If a user asks a question that is not covered in the predefined FAQs, the application provides a clear fallback response indicating that the query has been recorded. This ensures users feel acknowledged rather than ignored. The recorded question can then be reviewed by the organization’s support team for manual follow-up.This approach balances automation with human oversight. While frequently asked questions can be answered instantly, more complex or unique concerns are handled by real people who can provide personalized assistance. Over time, commonly repeated questions can be added to the FAQ list, improving the system’s effectiveness.This design reflects a realistic support workflow used by many organizations, where automation handles routine inquiries and human teams address specialized needs."

                />

                <QA  
                    question="How can this application be improved in the future?"
                    answer="The application is designed with future expansion in mind. Potential improvements include integrating AI-powered natural language processing to provide more intelligent responses, adding multilingual support to reach a broader audience, and enabling real-time chat with support representatives. Advanced analytics could also help the NGO identify trends and allocate resources more effectively.Additional features such as appointment scheduling, volunteer dashboards, and impact tracking could further enhance the platform. Secure payment integration may also be added to streamline donations. These improvements can be implemented gradually while maintaining the core principle of simplicity and accessibility.By starting with a minimal yet functional system, the application establishes a strong foundation that can evolve over time to better serve communities, animals, and healthcare initiatives."
                
                />
            </div>


            <div className={classes.askMore}>
                <h2>Want to ask something else?</h2>
                <p>
                If your question is not listed above, feel free to ask below. Our team
                will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className={classes.askForm}>
                    <input
                        type="text"
                        placeholder="Type your question here..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className={classes.askInput}
                    />
                    <button type="submit" className={classes.askButton}>
                        Submit
                    </button>
                </form>
            </div>

                {submitted && (
                    
                    <div className={classes.popupBox}>
                        <p>
                         Your question has been recorded.  
                        Our team will contact you shortly.
                        </p>
                        <button onClick={() => setSubmitted(false)}>Close</button>
                    </div>
                    
                )}
        </div>
    )
}