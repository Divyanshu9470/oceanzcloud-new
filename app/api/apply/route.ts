import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../lib/db';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const file = formData.get('resume') as File;

        if (!file) {
            return NextResponse.json({ error: 'Resume is required' }, { status: 400 });
        }

        // 1. Save File
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}_${file.name.replace(/\s/g, '_')}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');

        // Ensure directory exists
        await mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, filename);
        await writeFile(filePath, buffer);

        const publicPath = `/uploads/resumes/${filename}`;

        // 2. Save to Database
        const application = await prisma.jobApplication.create({
            data: {
                name,
                email,
                phone,
                jobTitle,
                resumePath: publicPath,
                coverLetter,
            },
        });

        // 3. Send Email
        // Configure transporter using environment variables
        // If env vars are missing, this might fail, so we wrap in try-catch or check conditionally.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default fallback
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"OceanzCloud Careers" <info@oceanzcloud.com>',
            to: email, // Send to applicant
            subject: `Application Received: ${jobTitle}`,
            text: `Dear ${name},\n\nThank you for applying for the position of ${jobTitle} at OceanzCloud. We have received your application and will review it shortly.\n\nBest regards,\nThe OceanzCloud Team`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Application Received</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for applying for the position of <strong>${jobTitle}</strong> at OceanzCloud.</p>
                    <p>We have received your application details and resume. Our team will review your qualifications and contact you if your profile matches our requirements.</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>The OceanzCloud Recruiting Team</strong></p>
                </div>
            `,
        };

        // Only attempt to send if credentials appear to be present or just try and log error
        // For this demo, we'll try and catch error properly so it doesn't crash the response
        try {
            if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
                await transporter.sendMail(mailOptions);
            } else {
                console.log("Skipping email sending: SMTP credentials not provided.");
                console.log("Would have sent email to:", email);
            }
        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            // We don't fail the request if email fails, just log it
        }

        return NextResponse.json({ success: true, application }, { status: 201 });

    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json({ error: `Internal Server Error: ${(error as Error).message}` }, { status: 500 });
    }
}
