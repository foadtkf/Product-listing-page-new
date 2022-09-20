import React from "react";

const Tasty = () => {
    const collapse = [
        {
            question:'What does CollabAct do?',
            answer :'CollabAct provides a platform for collaboration. There is an immense gap and contradiction; between unemployment in the nation and the companies not getting the right team.We CollabAct, will find out the best of the talent and coach them to become Business Influencer. At the same time, we understand the needs and challenges of the businesses. And become a mediator and connect the right Business Influencer with the right company. We couple the talents of the candidates to the needs of the companies.'
        },
        {
            question:'What does CollabAct do for the Candidates?',
            answer :'After joining CollabAct, candidates are given counseling; they know more about their interests and competencies. One must know about their talents along with their passions. We provide them with skill-based and mindset training. It will be an entire journey from the Candidate to a Business Influencer. Then they will be associated with established companies according to their interest and choice.'
        },
        {
            question:'Who are the Candidates?',
            answer :'Candidates are the students, freshers, or people who are looking for an alternative to a job. They are the ones who don’t want to limit themselves in a 9 to 5 job cycle, who dare to do something big, something out of the box and are self-driven. Who are passionate but lack support, appropriate skills, and Business knowledge. The selected candidates will be trained to become Business Influencers.'
        },
        {
            question:'Who are Business Influencers?',
            answer :'Business Influencers are the candidates who have finished their training period. They will have to choose between Executive Business Partner (EBP) Model or Executive Business Leader (EBL) Model.'
        },
        {
            question:'Who are EBPs? What do they do?',
            answer :'Executive Business Partners (EBPs) are the Business Influencers who have finished their training and decided to work on the goals of one particular company. They will have a tie-up with a company and will have to perform their development and growth activities. They are not employees; they are EBPs, who will be paid in the percentage of the sales they make.'
        },
        {
            question:'Who are EBLs? What do they do?',
            answer :'Executive Business Leaders (EBLs) are the Business Influencers who have finished their training and decided to work in one segment. Not working with one particular company, but working on various products of different companies. They will not have a tie-up with one company but with various products of various companies. They get a choice on which products they would like to work with.'
        },
        {
            question:'What does CollabAct do for Businesses?',
            answer :'Businesses have given a lot of time and energy to establishing themselves and their product; what they cannot focus on; is marketing and sales. Selling is the core activity that generates revenue and is needed for scaling up the business. And for selling, a team with trained people is required.We CollabAct, try to minimize this challenge by providing young and trained talent who will work as an associate and not an employee.'
        },
        {
            question:'Is CollabAct a staffing/jobbing company?',
            answer :'No, CollabAct is not a jobbing/staffing or a freelancing company. CollabAct will not help you provide jobs; we have come up with an entirely new concept of Business Influencer. When you decide to work with us, we do not make you employees of a company. We support you to develop an entrepreneurial mindset and offer an opportunity to work with established businesses as Business Influencers (EBPs and EBLs). With us, you can work in the field you like; and earn a good income according to your performance.'
        },
        {
            question:'How is a Business Influencer different from an Employee?',
            answer :'Being a Business Influencer is much beyond than just doing a job. Business Influencers are trained to think like an entrepreneur. They have a growth mindset. They embrace challenges, have a learning attitude and take more responsibility and get more freedom. They are not operated by a fixed mindset, who create a glass ceiling for themselves. Business Influencers do not get a fixed salary; they earn it based on their performance and skills. They get a part of the profit, making their earnings limitless.'
        },
        {
            question:'Does CollabAct provide any free services?',
            answer :'We have a very powerful movement called the Enterprising India movement, where we are concentrating on bringing a revolution, a bigger transformation in the perspective of our youth. We collaborate with colleges and academic institutions to offer a fundamental program to the students. It will develop and nurture a growth mindset, help think beyond the 9 to 5 job cycle, and get prepared to work with established businesses. So these special programs for colleges and institutes are for free.'
        },
        {
            question:'Can I join CollabAct Team?',
            answer :'Of course, you can. Just send us a mail at info@collabact.com with your details and how you would like to connect with us. You can also contact us on our social media pages.'
        },
    ]
  return (
    <div className="">
      <div className=" mx-auto w-4/5 2xl:w-[94rem] ">
        <div className="">
          {
            collapse.map(col=>
                <div className="collapse collapse-arrow rounded-lg my-[0.7%]">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-[#f7f7f7] text-[#6e6c6c] peer-checked:bg-[#f4b50d] peer-checked:text-[#6e6c6c] font-bold border-l-4 border-[#f4b50d] rounded-lg">
              {col.question}
            </div>
            <div className="peer-checked:p-3 peer-checked:mb-2 collapse-content bg-[#ffffff] text-[#6e6c6c] peer-checked:bg-[#ffffff] peer-checked:text-[#6e6c6c] border-none">
              <p>{col.answer}</p>
            </div>
          </div> 
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Tasty;
