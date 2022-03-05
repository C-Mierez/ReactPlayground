import { useParams, useSearchParams } from "react-router-dom";

export interface QuizCardProps {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestions: number;
}

export const QuizCard = () => {
    return (
        <>
            <div>Quiz</div>
        </>
    );
};
