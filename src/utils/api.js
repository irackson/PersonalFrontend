const apiRoute = process.env.REACT_APP_API_URL;
//     process.env.NODE_ENV === 'production'
//         ? process.env.REACT_APP_API_URL
//         : process.env.REACT_APP_API_URL_DEV;
console.log(apiRoute);
export const getAll = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/all`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

export const getHome = async () => {
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

export const getAbout = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`${apiRoute}/about`, requestOptions);
    const data = await response.json();

    return new Promise(function (myResolve) {
        myResolve(data);
    });
};

export const getProjects = async () => {
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

export const getProjectBySlug = async (slug) => {
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

export const getBlogs = async () => {
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

export const getBlogBySlug = async (slug) => {
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
