import css from "../styles/pages/Home.module.css";

export const HomePage = () => {
    return (
        <div className={css.section_area}>
            <section>
                <h1>Sweet Curves</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    consectetur tempore dolore odio inventore nam possimus
                    commodi vel aliquam similique dolor reprehenderit, iste,
                    nostrum dolorem, mollitia perferendis et odit. Rem!
                </p>
            </section>
            <section>
                <h1>Sweet Curves</h1>
                <p>
                    Natus non aliquid deserunt sequi dignissimos quia adipisci
                    illo sit delectus a incidunt dolor repudiandae excepturi
                    perferendis tenetur provident minus earum corrupti
                    voluptates, nisi neque temporibus? In minus voluptate
                    excepturi!
                </p>
            </section>
            <div className={css.wave_spacer + " " + css.wave_svg_1}></div>
            <section>
                <h1>Sweet Curves</h1>
                <p>
                    Pariatur nam cum vero ut eligendi possimus aut dolorem!
                    Sapiente voluptatibus consectetur facere vitae enim
                    necessitatibus nam accusamus modi repudiandae corporis,
                    distinctio accusantium deleniti voluptate ex fugiat tempora
                    perferendis! Enim?
                </p>
            </section>
        </div>
    );
};
