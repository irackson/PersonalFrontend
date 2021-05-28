import { useState } from 'react';

const Subscribe = (props) => {
    const [subForm, setSubForm] = useState({
        first_name: '',
        email: '',
        projects: props.subState.projects,
        blog: props.subState.blog,
    });
    const handleChange = (event) => {
        const updatedSubForm = { ...subForm };
        if (event.target.type === 'checkbox') {
            updatedSubForm[event.target.name] =
                !updatedSubForm[event.target.name];
        } else {
            updatedSubForm[event.target.name] = event.target.value;
        }
        setSubForm(updatedSubForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validatedForm = { ...subForm };
        if (validatedForm.projects) {
            validatedForm.projects = 'on';
        } else {
            delete validatedForm.projects;
        }
        if (validatedForm.blog) {
            validatedForm.blog = 'on';
        } else {
            delete validatedForm.blog;
        }
        props.processSubscription(validatedForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Subscribe!" />
            <div>
                {!props.subState.projects ? (
                    <div>
                        <label htmlFor="projects">projects</label>
                        <input
                            type="checkbox"
                            name="projects"
                            checked={subForm.projects}
                            onChange={handleChange}
                        ></input>
                    </div>
                ) : null}
                {!props.subState.blog ? (
                    <div>
                        <label htmlFor="blog">blog</label>
                        <input
                            type="checkbox"
                            name="blog"
                            checked={subForm.blog}
                            onChange={handleChange}
                        ></input>
                    </div>
                ) : null}
            </div>
            <div>
                <input
                    type="text"
                    name="first_name"
                    placeholder="your name"
                    value={subForm.first_name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={subForm.email}
                    required
                    placeholder="your email address"
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Subscribe;
