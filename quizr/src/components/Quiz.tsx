import { useParams, useSearchParams } from "react-router-dom";

export const QuizPage = () => {
    const urlParams = useParams();

    // TODO: Search for the quiz with the id from the urlParams
    // Can use .find() function
    // Also need to parse the id. URL Params are always strings.

    return (
        <>
            <div>Quiz {urlParams.quizId}</div>;
        </>
    );
};
