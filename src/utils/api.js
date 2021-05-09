// const apiRoute =
//     process.env.NODE_ENV === 'production'
//         ? 'http://api.ianrackson.com'
//         : 'http://localhost:3001';
const apiRoute = 'http://api.ianrackson.com';
const getHome = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

const getProjects = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/projects`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

const getProjectBySlug = async (slug) => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(
        `${apiRoute}/projects/${slug}`,
        requestOptions
    );
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

const getBlogs = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/blog`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

const getBlogBySlug = async (slug) => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/blog/${slug}`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

module.exports = {
    getHome,
    getProjects,
    getProjectBySlug,
    getBlogs,
    getBlogBySlug,
};
