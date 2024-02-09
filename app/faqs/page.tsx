import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div>
      <div className="text-3xl font-bold">FAQs</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. What is the purpose of this website?
          </AccordionTrigger>
          <AccordionContent>
            This website aims to raise awareness about the importance of proper
            e-waste disposal, provide information on nearby e-waste collection
            centers, and offer users the opportunity to earn credits for
            responsibly recycling their old electronic devices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            2. How can I find the nearest e-waste collection center?
          </AccordionTrigger>
          <AccordionContent>
            Navigate to our "E-Waste Locator" page, where you can use your
            location or input a specific address to find the closest e-waste
            collection and recycling facilities on the interactive map.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. What types of electronic devices can be recycled for credits?
          </AccordionTrigger>
          <AccordionContent>
            You can input the model of various electronic devices, including
            smartphones, laptops, tablets, and other gadgets. The website
            calculates credits based on the amount of precious metals recovered
            from each device.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            4. How are credit points calculated?
          </AccordionTrigger>
          <AccordionContent>
            Credit points are calculated based on the model of your old device
            and the estimated amount of precious metals recovered during the
            recycling process. The more valuable materials recovered, the more
            credits you earn.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. How do I earn and redeem credits?
          </AccordionTrigger>
          <AccordionContent>
            Create a user account, input your device models, and earn credits
            for each device recycled responsibly. The credits can be redeemed
            for discounts, coupons, or other incentives from our partnering
            organizations. Check your personalized dashboard for credit details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. Can I contribute educational content to the website?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We encourage users to share their knowledge and
            experiences related to e-waste recycling on our community forum.
            Your contributions can help raise awareness and educate others about
            responsible e-waste disposal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            7. Is my personal information safe on this website?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we take the privacy and security of your information seriously.
            Please refer to our "Privacy Policy" for detailed information on how
            we handle user data and maintain confidentiality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            8. How can I report an issue or provide feedback?
          </AccordionTrigger>
          <AccordionContent>
            If you encounter any issues or have feedback, please visit our
            "Contact Us" page. You can use the provided form to submit your
            concerns, and our team will address them promptly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            9. Do I need to register to use the website?
          </AccordionTrigger>
          <AccordionContent>
            While registration is not mandatory, creating an account offers
            additional benefits such as tracking your contributions, earning
            credits, and participating in the community forum. It also allows us
            to provide a more personalized experience for you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            10. Are there any restrictions on the types of e-waste accepted at
            collection centers?
          </AccordionTrigger>
          <AccordionContent>
            Each collection center may have specific guidelines regarding the
            types of e-waste they accept. It's recommended to check with the
            respective center or refer to our locator page for detailed
            information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
