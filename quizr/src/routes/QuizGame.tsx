import { Outlet, useSearchParams } from "react-router-dom";

export const QuizGamePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // TODO: Should filter and show only quizzes with the fitting params

    return (
        <div>
            <div>Quiz Game</div>
            <input
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            <Outlet />
        </div>
    );
};
