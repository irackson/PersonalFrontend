import Footer from 'components/layout/Footer';
import GlobalStyle from 'components/layout/GlobalStyle';
import Header from 'components/layout/Header';
import ThemeProvider from 'components/providers/ThemeProvider';
import About from 'pages/About';
import Blog from 'pages/Blog';
import BlogArticle from 'pages/BlogArticle';
import Home from 'pages/Home';
import Metrics from 'pages/Metrics';
import ProjectArticle from 'pages/ProjectArticle';
import Projects from 'pages/Projects';
import Resume from 'pages/Resume';
import Settings from 'pages/Settings';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getAll } from 'utils/api';

export default function Main(props) {
    const [allData, setAllData] = useState({ isLoaded: false });
    const getAllData = async () => {
        setAllData({ ...(await getAll()), isLoaded: true });
    };

    useEffect(() => {
        getAllData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeProvider>
            <GlobalStyle>
                <Header />
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <Home
                                    {...props}
                                    contact={allData.contact}
                                    featuredBlog={allData.featuredBlog}
                                    featuredProject={allData.featuredProject}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/settings"
                            render={(props) => <Settings {...props} />}
                        ></Route>
                        <Route
                            path="/blog"
                            exact
                            render={(props) => (
                                <Blog
                                    {...props}
                                    blogs={allData.blogs}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/blog/:slug"
                            render={(props) => (
                                <BlogArticle
                                    {...props}
                                    blogs={allData.blogs}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>

                        <Route
                            path="/projects"
                            exact
                            render={(props) => (
                                <Projects
                                    {...props}
                                    projects={allData.projects}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/projects/:slug"
                            render={(props) => (
                                <ProjectArticle
                                    {...props}
                                    projects={allData.projects}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/resume"
                            render={(props) => <Resume {...props} />}
                        ></Route>
                        <Route
                            path="/about"
                            render={(props) => (
                                <About
                                    {...props}
                                    about={allData.about}
                                    isLoaded={allData.isLoaded}
                                />
                            )}
                        ></Route>
                        <Route
                            path="/metrics"
                            render={(props) => <Metrics {...props} />}
                        ></Route>
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </main>
                <Footer />
            </GlobalStyle>
        </ThemeProvider>
    );
}
