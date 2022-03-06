import { Link, Outlet } from "react-router-dom";
import css from "../styles/pages/Layout.module.css";
import { createRef, useEffect, useRef } from "react";
import DriveFolderUpload from "@mui/icons-material/DriveFolderUpload";
import { red } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { actionLogIn, actionLogOut } from "../../app/redux/account/actions";

export const LayoutPage = () => {
    return (
        <div className={css.layout}>
            <NavBar />
            <div className={css.outlet}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const NavBar = () => {
    return (
        <>
            <nav className={css.header + " " + "row"}>
                <div className={css.header__section + " column"}>
                    <div className={css.title_card + " row"}>
                        <Link to="/">
                            <h1 className={css.title}>QUIZR</h1>
                        </Link>
                    </div>
                </div>
                <div className={css.header__section + " column"}>
                    <main className={css.content + " " + "row"}>
                        <Link to="/">Home</Link>
                        <Link to="/quiz-game">Quiz</Link>
                        <Link to="/about">About</Link>
                        <Link to="/quiz-game/2">Test</Link>
                    </main>
                </div>
                <div className={css.header__section + " column"}>
                    <AccountCard />
                </div>
            </nav>
            <div className={css.header_wave_decorator} />
        </>
    );
};

const AccountCard = () => {
    const state = useAppSelector((state) => state.account);
    const dispatch = useAppDispatch();

    const handleAccountClick = () => {
        console.log("Clicked Account");
        if (state.isLoggedIn) {
            dispatch(actionLogOut());
        } else {
            dispatch(actionLogIn({ name: "MyName", image: "Image" }));
        }
    };
    return (
        <div className={css.account_card} onClick={handleAccountClick}>
            {state.isLoggedIn ? (
                <>
                    <div className={css.account_username}>{state.name}</div>
                    <div className={css.account_image} />
                </>
            ) : (
                <div className={css.account_username}>{state.name}</div>
            )}
        </div>
    );
};

interface FlexCardProps {
    title?: string;
    isStyled?: boolean;
    content: FlexCardContent;
    content2?: string[];
}

type FlexCardContent = {
    text: string;
    to_bold?: string[];
};

const FlexCard = (props: FlexCardProps) => {
    const {
        title,
        content: { text, to_bold },
        isStyled,
        content2,
    } = props;

    let finalContent;
    if (to_bold) {
        finalContent = text.split(" ").map((word, i) => {
            return to_bold.includes(word) ? (
                <span className={"bold"}>{`${word} `} </span>
            ) : (
                `${word} `
            );
        });
    } else {
        finalContent = <p>text</p>;
    }
    return (
        <>
            <div className={css.card + " " + css.card_styled + " " + "column"}>
                {title ? <h3>{title}</h3> : <></>}
                <p>{finalContent}</p>
                {/* {content2.map((text, i) =>
                    i % 2 === 0 ? <span className={"bold"}>{text}</span> : <span className={"bold"}>{text}</span>
                )} */}
                <div className={"row"}>
                    <div style={{ fontSize: "0.7em" }}>
                        You know you want to.
                    </div>
                    <div className={css.icon_container}>
                        <img
                            src={require("../styles/images/github.png")}
                            alt="github"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const Footer = () => {
    return (
        <div className={css.footer + " " + "column"}>
            <div className={css.wave_spacer + " " + css.wave_svg_footer}></div>
            <div className={css.content + " " + "row"}>
                <div className={"column"}>
                    <h2 className={css.footer_title}>QUIZR</h2>
                    <div className={css.card_styled + " " + css.card}>
                        <p>
                            The most useless yet unnecessarily convoluted
                            website you will visit today,{" "}
                            <span className={"bold"}>guaranteed!</span>
                        </p>
                    </div>
                </div>
                <div id={css.id_socials} className={"column"}>
                    <h4 className={css.title}>SOCIALS</h4>
                    <div className={"row"}>
                        <div
                            className={
                                css.icon_container + " " + css.card_styled
                            }
                        >
                            <svg
                                viewBox="0 0 256 209"
                                preserveAspectRatio="xMidYMid"
                            >
                                <g>
                                    <path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"></path>
                                </g>
                            </svg>
                        </div>
                        <div
                            className={
                                css.icon_container + " " + css.card_styled
                            }
                        >
                            <svg
                                viewBox="0 0 256 262"
                                preserveAspectRatio="xMidYMid"
                            >
                                <g>
                                    <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451"></path>
                                    <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1"></path>
                                    <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37"></path>
                                    <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479"></path>
                                </g>
                            </svg>
                        </div>
                        <div
                            className={
                                css.icon_container + " " + css.card_styled
                            }
                        >
                            <svg
                                viewBox="0 0 256 180"
                                preserveAspectRatio="xMidYMid"
                            >
                                <g>
                                    <path d="M250.346231,28.0746923 C247.358133,17.0320558 238.732098,8.40602109 227.689461,5.41792308 C207.823743,0 127.868333,0 127.868333,0 C127.868333,0 47.9129229,0.164179487 28.0472049,5.58210256 C17.0045684,8.57020058 8.37853373,17.1962353 5.39043571,28.2388718 C-0.618533519,63.5374615 -2.94988224,117.322662 5.5546152,151.209308 C8.54271322,162.251944 17.1687479,170.877979 28.2113844,173.866077 C48.0771024,179.284 128.032513,179.284 128.032513,179.284 C128.032513,179.284 207.987923,179.284 227.853641,173.866077 C238.896277,170.877979 247.522312,162.251944 250.51041,151.209308 C256.847738,115.861464 258.801474,62.1091 250.346231,28.0746923 Z"></path>
                                    <polygon
                                        fill="#1F2731"
                                        points="102.420513 128.06 168.749025 89.642 102.420513 51.224"
                                    ></polygon>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"column"}>
                    <FlexCard
                        title="NEED MORE?"
                        content={{
                            text: "Find this website and even worse stuff in my repositories!",
                            to_bold: ["worse"],
                        }}
                        // content2={[
                        //     "Find this website and even ",
                        //     "worse",
                        //     " stuff in my repositories!",
                        // ]}
                    ></FlexCard>
                </div>
            </div>
            <div className={css.license}>
                <p className={css.card}>2022, Quizr</p>
                <p className={css.card}>MIT License</p>
                <p className={css.card}>
                    Built by <span className={"bold"}>CMierez</span>
                </p>
            </div>
            <div className={css.blob1}></div>
            <div className={css.blob3}></div>
            <div className={css.blob2}></div>
        </div>
    );
};
