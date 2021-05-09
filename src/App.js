import 'App.scss';
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
import { Redirect, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <ThemeProvider>
            <GlobalStyle>
                <Header />
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        ></Route>
                        <Route
                            path="/settings"
                            render={(props) => <Settings {...props} />}
                        ></Route>
                        <Route
                            path="/blog"
                            exact
                            render={(props) => <Blog {...props} />}
                        ></Route>
                        <Route
                            path="/blog/:slug"
                            render={(props) => <BlogArticle {...props} />}
                        ></Route>

                        <Route
                            path="/projects"
                            exact
                            render={(props) => <Projects {...props} />}
                        ></Route>
                        <Route
                            path="/projects/:slug"
                            render={(props) => <ProjectArticle {...props} />}
                        ></Route>
                        <Route
                            path="/resume"
                            render={(props) => <Resume {...props} />}
                        ></Route>
                        <Route
                            path="/about"
                            render={(props) => <About {...props} />}
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
