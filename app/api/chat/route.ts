import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, history } = body;

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Simulate "thinking" delay
        await new Promise(resolve => setTimeout(resolve, 600));

        // Simple rule-based logic for demo purposes
        let botResponse = "I'm not sure about that. Could you please clarify?";
        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            botResponse = "Hello! Welcome to OceanzCloud. How can I assist you with our services today?";
        } else if (lowerMsg.includes('service') || lowerMsg.includes('offer')) {
            botResponse = "We offer a wide range of services including Cloud Solutions, AI & Machine Learning, Web & Mobile App Development, and Blockchain Technology.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
            botResponse = "You can reach us at info@oceanzcloud.com or fill out the contact form on our contact page.";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) {
            botResponse = "Our pricing is tailored to each project's specific needs. detailed quote, please contact our sales team.";
        } else {
            botResponse = "Thanks for your inquiry. Our team is currently unavailable to answer complex queries live, but we've logged your question and will get back to you via email if you leave your contact details.";
        }

        return NextResponse.json({
            reply: botResponse,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
