

const Faq = () => {
    return (
       <div style={{ background: "#0F172A" }}>
         <div className="container mx-auto px-4 py-8">
         <h1 className="text-5xl text-white text-center font-bold my-20">
         Frequently Asked Questions
      </h1>
          
            <div className="accordion " >
                {/* FAQ Entry 1 */}
                <div className="collapse collapse-arrow mb-4 "style={{background:'#050D14'}}>
                    <input type="radio" name="faq-accordion" id="faq-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What are the registration fees?
                    </div>
                    <div className="collapse-content">
                        <p>Registration fees vary depending on the type of event and any promotional offers available. Please check the event registration page for current pricing details.</p>
                    </div>
                </div>

                {/* FAQ Entry 2 */}
                <div className="collapse collapse-arrow mb-4 " style={{background:'#050D14'}}>
                    <input type="radio" name="faq-accordion" id="faq-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I cancel my registration?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can cancel your registration, but please note that cancellation policies may vary depending on the event organizer. Please refer to the event registration page or contact us for more information.</p>
                    </div>
                </div>

                {/* FAQ Entry 3 */}
                <div className="collapse collapse-arrow mb-4" style={{background:'#050D14'}}>
                    <input type="radio" name="faq-accordion" id="faq-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is parking available at the venue?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, parking facilities are available at the venue. However, parking availability and fees may vary depending on the event. Please check the event details for parking information.</p>
                    </div>
                </div>
                {/* Add more FAQ entries as needed */}
            </div>
        </div>
        <hr className=" border-t-2 border-gray-700" />
       </div>
    );
};

export default Faq;
