import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  faqList = [
    {id:1, name: "What services do you offer?", value: "We offer a variety of services including web development, graphic design, and digital marketing."},
    {id:2, name:"How can I contact customer support?", value: "You can reach our customer support team via email at support@example.com or by calling (123) 456-7890."},
    {id:3, name:"How do I create an account?", value: "To create an account, click on the 'Sign Up' button on our homepage and fill out the registration form."},
    {id:4, name:"What payment methods do you accept?", value: "We accept major credit cards, PayPal, and bank transfers."},
    {id:5, name:"What should I do if I encounter a technical issue?", value: "If you experience any technical issues, please consult our troubleshooting guide or contact our support team for assistance."},
    {id:6, name:"Are there any system requirements for your software?", value: "Yes, our software requires a minimum of Windows 10 or macOS 10.15, along with a compatible web browser."},
  ]
}
