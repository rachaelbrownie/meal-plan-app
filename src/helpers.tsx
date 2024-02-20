export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800));

// Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};