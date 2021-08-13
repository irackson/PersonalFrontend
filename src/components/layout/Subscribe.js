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
        <div className="subscribe-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="btn draw-border"
                    type="submit"
                    value="Subscribe!"
                />
                <div className="subscribe-checkboxes">
                    {!props.subState.projects ? (
                        <div>
                            <label htmlFor="projects">
                                apps
                                <input
                                    type="checkbox"
                                    name="projects"
                                    aria-labelledby="projects"
                                    checked={subForm.projects}
                                    onChange={handleChange}
                                ></input>
                            </label>
                            <span></span>
                        </div>
                    ) : null}
                    {!props.subState.blog ? (
                        <div>
                            <label htmlFor="blog">
                                blogs
                                <input
                                    type="checkbox"
                                    name="blog"
                                    aria-labelledby="blog"
                                    checked={subForm.blog}
                                    onChange={handleChange}
                                ></input>
                            </label>
                            <span></span>
                        </div>
                    ) : null}
                </div>
                <div>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="full name"
                        value={subForm.first_name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={subForm.email}
                        required
                        placeholder="email address"
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default Subscribe;
