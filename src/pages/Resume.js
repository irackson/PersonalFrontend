import { useEffect } from 'react';

const Resume = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Resume';
    }, []);
    return (
        <div>
            <a href="https://github.com/irackson/PersonalBackend/raw/650b5101ef6c2cd4c9f05b76a1fc1c26a2605524/public/assets/resume/IanRackson-Resume.pdf">
                download resume
            </a>
        </div>
    );
};
export default Resume;
