import 'styles/vendors/GitCalStyle.css';
import useWindowDimensions from 'utils/window-size';
import GitHubCalendar from 'github-calendar';
import { useEffect } from 'react';

const Metrics = () => {
    useEffect(() => {
        document.title = 'Ian Rackson | Metrics';
    }, []);

    const { height, width } = useWindowDimensions();

    const getCal = () => {
        GitHubCalendar('.calendar', 'irackson', {
            // // summary_text:
            //     'Summary of my Github pull requests, issues opened, and commits',
            responsive: true,
            tooltips: true,
        });
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
                <figure>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/192f8a18-8f63-40c4-b7df-7afb3945b376.svg"
                        title="coding activity graph"
                    />
                </figure>
                <figure>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@4c81cb27-377a-401f-b22b-0f0921763ea1/24573ca6-65ed-4336-bc5d-886b2e845097.svg"
                        title="language (time spent)"
                    />
                </figure>
            </section>
        </>
    );
};
export default Metrics;
