import React from "react";
import { Outlet } from "react-router-dom";

import css from "../styles/pages/QuizGame.module.css";

import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { QuizCard } from "../components/Quiz";

export const QuizGamePage = () => {
    const startQuiz = () => {};

    const checkQuizAnswer = (e: React.MouseEvent) => {};

    const nextQuizQuestion = (e: React.MouseEvent) => {};

    return (
        <>
            <div className={css.main_container + " column"}>
                <div className={css.main_description}>
                    <p>
                        Are you ready to take on this <i>totally not boring </i>
                        challenge?
                    </p>
                    <p>
                        Will you conquer the praised{" "}
                        <i>and absolutely not fake</i>{" "}
                        <a href="#">leaderboard</a> containing all the attempts
                        of <i>totally not randomly generated players?</i>
                    </p>
                </div>
                <div className={css.preset_modes + " column"}>
                    <h3>Choose a difficulty</h3>
                    <div className={css.mode_row + " row"}>
                        <div
                            className={
                                css.mode_card + " " + css.card_color_primary
                            }
                        >
                            <AccessibleIcon />
                        </div>
                        <div
                            className={
                                css.mode_card + " " + css.card_color_tertiary
                            }
                        >
                            <AccessibleForwardIcon />
                        </div>
                        <div
                            className={
                                css.mode_card + " " + css.card_color_secondary
                            }
                        >
                            <AirlineSeatFlatIcon />
                        </div>
                    </div>
                </div>
                <div className={css.endless_mode + " column"}>
                    <h3>
                        ...or try going <span>Endless</span>
                    </h3>

                    <div className={css.mode + " row"}>
                        <div className={css.mode_card}>
                            <AllInclusiveIcon fontSize="inherit" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.ending}>
                <QuizCard />
            </div>
        </>
    );
};
