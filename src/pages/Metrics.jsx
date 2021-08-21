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
                {/* <figure> */}
                <figure style={{ display: 'none' }}>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@irackson/c91e9ad1-08d9-4b88-9051-2ac6343a5740.svg"
                        title="coding activity graph"
                    />
                </figure>
                <figure>
                    <embed
                        width={Math.floor(width * (80 / 100))}
                        height={Math.floor(height * (60 / 100))}
                        src="https://wakatime.com/share/@irackson/aaecfd27-6cb3-4a56-9490-b8e0ad12c335.svg"
                        title="language (time spent)"
                    />
                </figure>
            </section>
        </>
    );
};
export default Metrics;
