import React from "react";
import "./styles/Global.module.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { LayoutPage } from "./routes/Layout";
import { HomePage } from "./routes/Home";
import { QuizPage } from "./components/Quiz";
import { AboutPage } from "./routes/About";
import { NotFoundPage } from "./routes/NotFound";
import { QuizGamePage } from "./routes/QuizGame";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="quiz-game" element={<QuizGamePage />}>
                        <Route path=":quizId" element={<QuizPage />} />
                    </Route>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
