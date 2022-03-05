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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolore asperiores ab culpa itaque animi, maiores
                        vero iure cumque minus quisquam tempora unde nulla
                        perferendis quis provident quia reiciendis perspiciatis,
                        deserunt dolorem ad non corporis! Corporis dolores
                        nostrum eius ipsum quas.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Incidunt suscipit unde ab quo non deleniti fuga
                        excepturi dolores, molestias nisi.
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
                <QuizCard/>
            </div>
        </>
    );
};
