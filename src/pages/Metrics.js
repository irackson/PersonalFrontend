import 'styles/vendors/GitCalStyle.css';
import useWindowDimensions from 'utils/window-size';
import GitHubCalendar from 'github-calendar';
import { useState, useEffect } from 'react';

const Metrics = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Metrics';
    }, []);

    const [cal, setCal] = useState(null);
    const { height, width } = useWindowDimensions();

    const getCal = () => {
        const calendar = GitHubCalendar('.calendar', 'irackson', {
            summary_text:
                'Summary of my Github pull requests, issues opened, and commits',
            responsive: true,
            tooltips: true,
        });
        setCal(calendar);
    };

    useEffect(() => {
        getCal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section>
                <div className="calendar"></div>
            </section>
            <section className="wakatime">
                {/* BUGFIX: Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute */}

                <figure>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/192f8a18-8f63-40c4-b7df-7afb3945b376.svg"
                        // sameSite="Strict"
                        // heigh
                    />
                </figure>
                <figure>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/24573ca6-65ed-4336-bc5d-886b2e845097.svg"
                        // sameSite="Strict"
                    />
                </figure>
            </section>
        </>
    );
};
export default Metrics;
