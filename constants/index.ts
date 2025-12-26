export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];
// aiResponse.ts

export const AIResponseFormat = `
{
  "overallScore": 0,
  "ATS": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "Example ATS strength"
      },
      {
        "type": "improve",
        "tip": "Example ATS improvement"
      }
    ]
  },
  "toneAndStyle": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "Clear professional tone",
        "explanation": "The resume maintains a professional and consistent tone throughout."
      },
      {
        "type": "improve",
        "tip": "Improve action verbs",
        "explanation": "Use stronger action verbs to better highlight achievements."
      }
    ]
  },
  "content": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "Relevant experience included",
        "explanation": "The resume includes experience relevant to the target role."
      },
      {
        "type": "improve",
        "tip": "Add measurable impact",
        "explanation": "Include numbers and metrics to quantify achievements."
      }
    ]
  },
  "structure": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "Logical section order",
        "explanation": "Sections are arranged in a clear and readable order."
      },
      {
        "type": "improve",
        "tip": "Improve spacing",
        "explanation": "Increase white space to improve readability."
      }
    ]
  },
  "skills": {
    "score": 0,
    "tips": [
      {
        "type": "good",
        "tip": "Relevant technical skills",
        "explanation": "Skills listed are relevant to the job role."
      },
      {
        "type": "improve",
        "tip": "Match job keywords",
        "explanation": "Align skills more closely with keywords from the job description."
      }
    ]
  }
}
`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
}: {
  jobTitle: string;
  jobDescription: string;
}) => `
You are an expert ATS (Applicant Tracking System) resume evaluator.

Your task:
- Analyze the resume honestly and critically
- Give low scores if the resume is weak
- Base the evaluation on ATS compatibility and recruiter expectations
- Use the provided job title and job description when scoring

Job Title:
${jobTitle}

Job Description:
${jobDescription}

STRICT RULES:
- Return ONLY valid JSON
- Do NOT include markdown
- Do NOT include backticks
- Do NOT include explanations outside JSON
- All scores MUST be numbers between 0 and 100

Return the response EXACTLY in the following JSON format:
${AIResponseFormat}
`;
