import 'styles/vendors/GitCalStyle.css';
import GitHubCalendar from 'github-calendar';
import { useState, useEffect } from 'react';

const Metrics = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Metrics';
    }, []);

    const [cal, setCal] = useState(null);

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
            <section>
                <figure>
                    <embed
                        width="1000"
                        height="700"
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/192f8a18-8f63-40c4-b7df-7afb3945b376.svg"
                    />
                </figure>
                <figure>
                    <embed
                        width="1000"
                        height="700"
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/24573ca6-65ed-4336-bc5d-886b2e845097.svg"
                    />
                </figure>
            </section>
        </>
    );
};
export default Metrics;
